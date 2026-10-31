import { useEffect, useRef, useState, type ReactNode } from "react";

const FILM = "/film/film-music.mp4?v=film40";

export function HeroFilm({ children }: { children: ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motion, setMotion] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [discovered, setDiscovered] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotion(!query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!motion) {
      video.pause();
      return;
    }
    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => undefined);
    });
  }, [motion]);

  const holdLastFrame = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration === 0) return;
    if (video.currentTime < video.duration - 0.15) return;
    const frame = Math.max(0, video.duration - 0.15);
    video.pause();
    if (video.currentTime < frame) video.currentTime = frame;
  };

  const playFilm = () => {
    const video = videoRef.current;
    if (!video || !motion) return;
    if (!discovered) {
      setDiscovered(true);
      video.currentTime = 0;
      video.muted = false;
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => undefined);
      });
      return;
    }
    const atEnd =
      Number.isFinite(video.duration) &&
      video.duration > 0 &&
      video.currentTime >= video.duration - 0.2;
    if (!video.paused && !atEnd) {
      video.pause();
      return;
    }
    if (atEnd) video.currentTime = 0;
    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => undefined);
    });
  };

  return (
    <>
      <div className="film" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          src={FILM}
          playsInline
          preload="auto"
          onTimeUpdate={holdLastFrame}
          onEnded={holdLastFrame}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <div className="hero-scrim" />
      </div>
      <div className="wrap hero-copy is-in">
        <div className="segment-buttons" role="group" aria-label="Film">
          <button type="button" aria-pressed={playing} onClick={playFilm}>
            {discovered && playing ? "Pause" : "Discover Cardinal BPS"}
          </button>
        </div>
        {children}
      </div>
    </>
  );
}