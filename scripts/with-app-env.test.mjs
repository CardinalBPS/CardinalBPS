
import { spawn } from "node:child_process";
import {
  existsSync,
  readFileSync,
  realpathSync,
} from "node:fs";
import {
  basename,
  dirname,
  join,
  resolve,
} from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_FILE = fileURLToPath(import.meta.url);

export const APP_ENV_REL_PATH = join(
  ".grok",
  "app-env.json",
);

export function projectRoot() {
  return resolve(dirname(SCRIPT_FILE), "..");
}

export function parseAppEnv(input) {
  try {
    const parsed = JSON.parse(input);

    if (
      !parsed ||
      typeof parsed !== "object" ||
      Array.isArray(parsed)
    ) {
      return {};
    }

    return Object.fromEntries(
      Object.entries(parsed).filter(
        ([key, value]) =>
          key.startsWith("VITE_") &&
          typeof value === "string",
      ),
    );
  } catch {
    return {};
  }
}

export function readAppEnv(root = projectRoot()) {
  try {
    return parseAppEnv(
      readFileSync(
        join(root, APP_ENV_REL_PATH),
        "utf8",
      ),
    );
  } catch {
    return {};
  }
}

export function mergeAppEnv(
  fileEnv,
  processEnv = process.env,
) {
  return {
    ...fileEnv,
    ...processEnv,
  };
}

function commandForChild(
  requestedCommand,
  requestedArgs,
) {
  const name = basename(
    requestedCommand,
  ).toLowerCase();

  // Windows fix:
  // Launch the Vite JavaScript entry point
  // through Node instead of spawning vite.cmd.

  if (name === "vite" || name === "vite.cmd") {
    const viteScript = join(
      projectRoot(),
      "node_modules",
      "vite",
      "bin",
      "vite.js",
    );

    if (existsSync(viteScript)) {
      return {
        command: process.execPath,
        args: [
          viteScript,
          ...requestedArgs,
        ],
      };
    }
  }

  // Preserve normal execution for other
  // commands used by the wrapper.

  return {
    command: requestedCommand,
    args: requestedArgs,
  };
}

function run() {
  const [
    requestedCommand,
    ...requestedArgs
  ] = process.argv.slice(2);

  if (!requestedCommand) {
    console.error(
      "Usage: node scripts/with-app-env.mjs <command> [...args]",
    );

    process.exitCode = 1;
    return;
  }

  const { command, args } = commandForChild(
    requestedCommand,
    requestedArgs,
  );

  const child = spawn(command, args, {
    cwd: process.cwd(),
    env: mergeAppEnv(readAppEnv()),
    stdio: "inherit",
  });

  // Forward termination signals to the child.

  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, () => {
      if (child.pid) {
        child.kill(signal);
      }
    });
  }

  child.once("error", (error) => {
    console.error(
      `[with-app-env] failed to run ${requestedCommand}: ${error.message}`,
    );

    process.exitCode = 1;
  });

  child.once("close", (code, signal) => {
    process.removeAllListeners("SIGINT");
    process.removeAllListeners("SIGTERM");

    if (signal) {
      try {
        process.kill(process.pid, signal);
      } catch {
        process.exitCode = 1;
      }
    } else {
      process.exitCode = code ?? 1;
    }
  });
}

// Detect direct invocation, including when
// the script is accessed through a symlink.

let isCLI = false;

if (process.argv[1]) {
  try {
    isCLI =
      realpathSync(process.argv[1]) ===
      realpathSync(SCRIPT_FILE);
  } catch {
    isCLI = false;
  }
}

if (isCLI) {
  run();
}
