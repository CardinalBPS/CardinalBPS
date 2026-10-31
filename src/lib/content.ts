export type Step = { title: string; body: string };
export type Offering = { title: string; body: string };

export type Service = {
  slug: string;
  index: string;
  kicker: string;
  title: string;
  headline: string;
  summary: string;
  lede: string;
  points: string[];
  steps: Step[];
  offerings: Offering[];
  impact: string[];
};

export const services: Service[] = [
  {
    slug: "medical-coding",
    index: "01",
    kicker: "Coding & reimbursement",
    title: "Medical Coding",
    headline: "Accurate coding built for better reimbursement.",
    summary:
      "Certified coding support that improves precision, strengthens case mix, and reduces compliance risk.",
    lede: "Expert coding support designed to improve coding accuracy, strengthen reimbursement outcomes, and reduce compliance risk for home health, hospice, and personal care organizations.",
    points: ["ICD-10 coding support", "Coding review and validation", "Documentation accuracy"],
    steps: [
      {
        title: "Review",
        body: "Clinical documentation and coding information are carefully reviewed.",
      },
      {
        title: "Validate",
        body: "Coding accuracy, completeness, and compliance considerations are evaluated.",
      },
      {
        title: "Strengthen",
        body: "Insights support better reimbursement and operational performance.",
      },
      {
        title: "Return",
        body: "Final codes and the findings are sent back so the claim can move with the documentation behind it.",
      },
    ],
    offerings: [
      {
        title: "ICD-10 coding support",
        body: "Accurate coding support designed around clinical documentation and applicable coding requirements.",
      },
      {
        title: "Coding review & validation",
        body: "Detailed review processes help identify inconsistencies, omissions, and potential coding issues.",
      },
      {
        title: "Documentation & coding accuracy",
        body: "Align documentation and coding to support accurate reporting and appropriate reimbursement.",
      },
      {
        title: "Reimbursement-focused coding",
        body: "Coding support designed to help organizations capture appropriate reimbursement.",
      },
      {
        title: "Case mix improvement",
        body: "Strategic coding support focused on case mix accuracy and overall performance.",
      },
      {
        title: "Coding compliance review",
        body: "Structured reviews designed to strengthen compliance and reduce unnecessary coding risk.",
      },
    ],
    impact: [
      "Improved coding precision",
      "More accurate reimbursement",
      "Stronger case mix outcomes",
      "Reduced compliance risk",
      "Improved documentation accuracy",
      "Reduced revenue leakage",
    ],
  },
  {
    slug: "oasis-review",
    index: "02",
    kicker: "Clinical quality",
    title: "OASIS Review",
    headline: "Better OASIS.\nBetter documentation.",
    summary:
      "Specialized OASIS review that improves accuracy, supports PDGM outcomes, and strengthens reimbursement.",
    lede: "Expert OASIS review designed to improve documentation accuracy, strengthen compliance, support reimbursement, and reduce documentation-related risk.",
    points: ["OASIS review", "Documentation validation", "Quality improvement"],
    steps: [
      {
        title: "Review",
        body: "Evaluate OASIS and the supporting clinical documentation.",
      },
      {
        title: "Identify",
        body: "Surface deficiencies, inconsistencies, and opportunities.",
      },
      {
        title: "Improve",
        body: "Strengthen documentation quality, compliance, and performance.",
      },
      {
        title: "Confirm",
        body: "Corrected OASIS items are checked against the chart before the assessment is locked.",
      },
    ],
    offerings: [
      {
        title: "Detailed OASIS quality review",
        body: "Comprehensive review processes designed to identify documentation gaps and improve OASIS accuracy.",
      },
      {
        title: "OASIS documentation support",
        body: "Practical support for the assessments that drive clinical, financial, and regulatory performance.",
      },
      {
        title: "PDGM reimbursement support",
        body: "Review focused on documentation that supports accurate PDGM outcomes.",
      },
      {
        title: "Compliance monitoring",
        body: "Ongoing attention to payer requirements and documentation integrity.",
      },
      {
        title: "Documentation auditing",
        body: "Structured audits that make deficiency patterns visible before they become claim risk.",
      },
      {
        title: "Deficiency identification",
        body: "Clear findings teams can act on, not a stack of unmarked charts.",
      },
    ],
    impact: [
      "Improved OASIS accuracy",
      "Stronger documentation quality",
      "Improved reimbursement accuracy",
      "Reduced claim risk",
      "Improved PDGM outcomes",
      "Stronger audit preparedness",
    ],
  },
  {
    slug: "revenue-cycle-management",
    index: "03",
    kicker: "Financial performance",
    title: "Revenue Cycle Management",
    headline: "Intelligent revenue cycle management for post-acute care.",
    summary:
      "End-to-end revenue cycle support that reduces denials, improves collections, and accelerates reimbursement.",
    lede: "Scalable revenue cycle solutions designed to improve cash flow, reduce denials, accelerate reimbursement, and strengthen the financial performance of home health, home care, and hospice organizations.",
    points: ["Claims management", "Denial prevention", "Accounts receivable follow-up"],
    steps: [
      { title: "Intake", body: "Referral intake, eligibility, and a clean start to the claim." },
      { title: "Authorization", body: "Coverage and payer requirements handled before they stall payment." },
      { title: "Claims", body: "Submission, denial prevention, and disciplined follow-through." },
      { title: "Collections", body: "A/R follow-up, posting, and recovery of what was earned." },
    ],
    offerings: [
      {
        title: "Referral intake & insurance verification",
        body: "Efficient intake and insurance verification establish a strong foundation for the revenue cycle.",
      },
      {
        title: "Eligibility & benefits validation",
        body: "Verify coverage and benefits early to reduce avoidable billing issues and delays.",
      },
      {
        title: "Authorization management",
        body: "Support authorization workflows to help prevent interruptions and unnecessary claim complications.",
      },
      {
        title: "Claims submission & management",
        body: "Structured claim management designed to support accurate and timely submission.",
      },
      {
        title: "Denial prevention & resolution",
        body: "Identify denial patterns and resolve issues to improve claim performance.",
      },
      {
        title: "Accounts receivable follow-up",
        body: "Focused A/R follow-up helps reduce outstanding balances and improve collections.",
      },
      {
        title: "Payment posting & reconciliation",
        body: "Accurate payment processing and reconciliation help maintain clean financial records.",
      },
      {
        title: "Underpayment analysis & recovery",
        body: "Identify payment discrepancies and opportunities for additional revenue recovery.",
      },
    ],
    impact: [
      "Reduced denial rates",
      "Improved clean claim performance",
      "Faster reimbursement cycles",
      "Lower days in A/R",
      "Increased revenue capture",
      "Reduced operational burden",
    ],
  },
  {
    slug: "quality-assurance",
    index: "04",
    kicker: "Quality assurance",
    title: "Quality Assurance",
    headline: "Therapy records, reviewed before they move.",
    summary:
      "Quality review of PT, OT, and ST documentation, including evaluations and re-evaluations, before the record is billed or surveyed.",
    lede: "A large part of the quality work is therapy. Cardinal BPS reviews physical, occupational, and speech therapy records — evaluations, re-evaluations, and the visits that follow — and sends the findings back to the team that wrote them.",
    points: ["PT, OT, and ST review", "Evaluations", "Re-evaluations"],
    steps: [
      {
        title: "Read",
        body: "Review the evaluation or re-evaluation against the plan of care, the diagnosis, and the visits already in the chart.",
      },
      {
        title: "Check",
        body: "Look for gaps in skilled need, goals, progress, and whether the note supports the therapy that was provided.",
      },
      {
        title: "Return",
        body: "Send specific findings back to the therapist so the next evaluation is cleaner than the last.",
      },
      {
        title: "Confirm",
        body: "The corrected evaluation or re-evaluation is read once more before the therapy is billed.",
      },
    ],
    offerings: [
      {
        title: "PT, OT, and ST quality review",
        body: "Review of physical, occupational, and speech therapy documentation for completeness, skilled need, and consistency with the plan of care.",
      },
      {
        title: "Therapy evaluations",
        body: "Review of the initial evaluation: findings, goals, frequency, and whether the record supports starting therapy.",
      },
      {
        title: "Therapy re-evaluations",
        body: "Review of re-evaluations for progress, updated goals, and a reason to continue, change, or end the service.",
      },
      {
        title: "Visit notes against the plan",
        body: "Therapy visits checked against the evaluation, so treatment, goals, and the note describe the same course of care.",
      },
      {
        title: "Coding and claim alignment",
        body: "Therapy documentation checked against the coding and the claim before the record leaves the agency.",
      },
      {
        title: "Findings back to the team",
        body: "A clear list of what failed and who corrects it, so the same gap does not show up on the next evaluation.",
      },
    ],
    impact: [
      "Cleaner therapy evaluations",
      "Re-evaluations that show progress",
      "Notes that support skilled care",
      "Fewer therapy-related denials",
      "Findings therapists can use",
      "Less rework after a review",
    ],
  },
  {
    slug: "clinical-documentation",
    index: "05",
    kicker: "Compliance & quality",
    title: "Clinical Documentation",
    headline: "Documentation that can stand up to review.",
    summary:
      "Documentation review and quality assurance that strengthen clinical records and regulatory readiness.",
    lede: "Comprehensive documentation review and quality assurance designed to strengthen clinical records, improve accuracy, and support regulatory readiness across post-acute care.",
    points: ["Documentation review", "Quality assurance", "Compliance support"],
    steps: [
      { title: "Read", body: "Review records the way an auditor, payer, and clinician would." },
      { title: "Mark", body: "Name the gaps, inconsistencies, and habits that create risk." },
      { title: "Repair", body: "Give teams a practical way to improve the next record, not only the last one." },
      {
        title: "Release",
        body: "Checked again before it goes to coding and the claim.",
      },
    ],
    offerings: [
      {
        title: "Documentation review",
        body: "Focused review of clinical records for completeness, consistency, and supportability.",
      },
      {
        title: "Quality assurance",
        body: "Repeatable QA that catches patterns before they become denials or survey findings.",
      },
      {
        title: "Compliance support",
        body: "Alignment with payer requirements, documentation integrity, and regulatory expectations.",
      },
      {
        title: "Audit preparation",
        body: "Organize records and findings so a review is not a scramble.",
      },
      {
        title: "Deficiency identification",
        body: "Specific, usable findings instead of vague notes about 'documentation opportunities.'",
      },
      {
        title: "Team feedback",
        body: "Clear guidance clinicians and coders can apply on the next admission.",
      },
    ],
    impact: [
      "Stronger clinical records",
      "Fewer documentation deficiencies",
      "Improved audit preparedness",
      "Better alignment with coding",
      "Reduced avoidable claim risk",
      "Clearer quality routines",
    ],
  },
  {
    slug: "healthcare-consulting",
    index: "06",
    kicker: "Strategy & growth",
    title: "Healthcare Consulting",
    headline: "Strategy that moves healthcare forward.",
    summary:
      "Consulting for operators who need clearer workflows, stronger performance, and a plan that can scale.",
    lede: "Strategic consulting that helps healthcare organizations improve operational efficiency, strengthen performance, and build systems that still hold when the agency grows.",
    points: ["Operational strategy", "Performance improvement", "Growth planning"],
    steps: [
      { title: "See", body: "Map how work actually moves — intake, care, coding, billing, and follow-up." },
      { title: "Choose", body: "Prioritize the few changes that improve cash, compliance, or capacity." },
      { title: "Install", body: "Leave behind routines a team can run without a permanent consulting presence." },
      {
        title: "Measure",
        body: "After the routine is in place, the result is checked against the cash, compliance, or capacity it was meant to change.",
      },
    ],
    offerings: [
      {
        title: "Strategic planning",
        body: "Direction tied to the realities of home health, hospice, and home care — not a generic slide deck.",
      },
      {
        title: "Operational improvement",
        body: "Identify gaps and implement changes people can feel in the workweek.",
      },
      {
        title: "Performance optimization",
        body: "Tighten the measures that matter: cash, denials, documentation, and throughput.",
      },
      {
        title: "Organizational support",
        body: "Leadership and staffing support while the operation is being rebuilt.",
      },
      {
        title: "Workflow redesign",
        body: "Technology-enabled process changes that match how your team already works.",
      },
      {
        title: "Growth & M&A support",
        body: "Guidance through transitions, integration, expansion, and strategic positioning.",
      },
    ],
    impact: [
      "Improved operational efficiency",
      "Stronger financial performance",
      "Better workflow management",
      "Clearer organizational decisions",
      "Scalable operating processes",
      "Sustainable growth",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function nextService(slug: string) {
  const index = services.findIndex((service) => service.slug === slug);
  if (index < 0) return services[0];
  return services[(index + 1) % services.length];
}

export const reasons = [
  {
    title: "Post-acute industry expertise",
    body: "Deep operational understanding of home health, home care, and hospice reimbursement environments.",
  },
  {
    title: "Operational excellence",
    body: "Disciplined revenue cycle workflows focused on measurable financial outcomes.",
  },
  {
    title: "Technology-driven processes",
    body: "Automation-enabled workflows designed to improve scalability and efficiency.",
  },
  {
    title: "Compliance-focused delivery",
    body: "Strong emphasis on payer requirements, documentation integrity, and regulatory alignment.",
  },
  {
    title: "Scalable support models",
    body: "Flexible operational partnerships designed to support agencies of all sizes.",
  },
  {
    title: "Performance-oriented approach",
    body: "Focused on cash flow, collections, and optimized revenue performance.",
  },
];

export const models = [
  {
    index: "01",
    title: "Modular support",
    body: "Targeted support for intake, billing, coding, authorizations, denials, collections, or A/R management.",
  },
  {
    index: "02",
    title: "End-to-end RCM",
    body: "A comprehensive partnership across the full patient financial journey.",
  },
  {
    index: "03",
    title: "Operational augmentation",
    body: "Extend internal teams with experienced post-acute revenue cycle specialists.",
  },
  {
    index: "04",
    title: "Strategic transformation",
    body: "Technology-enabled operational redesign and workflow optimization for growing organizations.",
  },
];

export const journey = [
  {
    index: "01",
    title: "Intake & Eligibility",
    line: "Building the foundation for reimbursement.",
    body: "Referral management, insurance verification, benefit confirmation, and financial clearance before care begins.",
  },
  {
    index: "02",
    title: "Authorization",
    line: "Securing coverage. Preventing delays.",
    body: "Prior authorizations, payer requirements, utilization tracking, and ongoing authorization management.",
  },
  {
    index: "03",
    title: "Documentation & Coding",
    line: "Where clinical accuracy meets financial integrity.",
    body: "OASIS review, ICD-10 coding, clinical documentation quality assurance, and physician order management.",
  },
  {
    index: "04",
    title: "Claims & Billing",
    line: "Getting claims right the first time.",
    body: "Claim preparation, billing validation, timely submission, payer compliance, and proactive rejection prevention.",
  },
  {
    index: "05",
    title: "Denials & Appeals",
    line: "Protecting revenue at every opportunity.",
    body: "Denial analysis, corrective action, appeals management, payer follow-up, and resolution of outstanding claims.",
  },
  {
    index: "06",
    title: "Collections & Recovery",
    line: "Converting earned revenue into cash flow.",
    body: "Payment posting, A/R management, reimbursement reconciliation, underpayment recovery, and collections optimization.",
  },
  {
    index: "07",
    title: "Revenue Intelligence & Analytics",
    line: "Turning financial data into smarter decisions.",
    body: "Real-time performance dashboards, revenue forecasting, payer analytics, denial trend analysis, cash flow monitoring, and actionable insights that drive financial performance.",
  },
];

export const marquee = [
  "Home Health",
  "PDGM & OASIS",
  "Hospice",
  "NOE & CAP",
  "Home Care",
  "EVV & Medicaid",
  "Coding accuracy",
  "Denial prevention",
  "Clean claims",
  "HIPAA-minded workflows",
];

export const contact = {
  email: "info@cardinalbps.com",
  street: "5151 Belt Line Rd, Ste 825",
  city: "Dallas, TX 75254",
  address: "5151 Belt Line Rd, Ste 825, Dallas, TX 75254",
};
