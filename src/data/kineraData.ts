import { SolutionItem, InsightArticle, IndustryCategory } from '../types';

export const TRUSTED_CLIENTS = [
  'Zenvexa Pharmaceuticals',
  'MedFassst Healthcare',
  'Revive Me Technologies'
];

export const STATS_METRICS = [
  {
    value: '50,000',
    label: 'Verified expert panel',
    color: '#6B4FA3'
  },
  {
    value: '40+',
    label: 'Countries',
    color: '#E66C45'
  },
  {
    value: '120+',
    label: 'Specialties',
    color: '#D3A529'
  },
  {
    value: '10+',
    label: 'Languages',
    color: '#2C9A86'
  }
];

export const SOLUTIONS_LIST: SolutionItem[] = [
  {
    id: 'primary-market-research',
    badge: 'Pr',
    badgeBg: '#D1EAE2',
    badgeText: '#18473D',
    title: 'HCP & KOL Recruitment',
    description: 'The right specialists, confirmed for your study.',
    fullDetails: {
      overview: 'We recruit physicians, specialists and opinion leaders who match your screener, from community practitioners to national and regional KOLs. Whether you send us a target list or need us to build one, every respondent is checked before you see them.',
      keyMethods: [
        'Outreach by specialty, sub-specialty and geography',
        'Screener-based qualification and credential verification',
        'KOL and emerging-expert identification for IDIs and advisory boards',
        'Work from your target list or a list we build'
      ],
      sampleQuestions: [
        'Which specialists and KOLs best match our study screener?',
        'What credentials and experience should be verified before fieldwork?'
      ]
    }
  },
  {
    id: 'analytics-data-strategy',
    badge: 'An',
    badgeBg: '#F5E8BE',
    badgeText: '#5A4A12',
    title: 'Patient & Caregiver Recruitment',
    description: 'Real patient voices, recruited with care.',
    fullDetails: {
      overview: "We connect you with patients and caregivers who have lived the condition or treatment you're studying. Consent and privacy are built into how we recruit, and reminders keep attendance high.",
      keyMethods: [
        'Condition- and therapy-specific screening',
        'Support for rare and hard-to-reach populations',
        'Consent and privacy-compliant recruitment',
        'Scheduling and reminders to reduce no-shows'
      ],
      sampleQuestions: [
        'Which patient and caregiver profiles are available in our target markets?',
        'What support is needed to recruit rare or hard-to-reach populations?'
      ]
    }
  },
  {
    id: 'kol-expert-identification',
    badge: 'KOL',
    badgeBg: '#F3D7CA',
    badgeText: '#6A3120',
    title: 'Payer & Consumer Recruitment',
    description: 'The decision-makers and everyday voices behind access and demand.',
    fullDetails: {
      overview: 'We source pharmacy directors, formulary decision-makers and consumers who fit your study profile, so pricing, access and perception research reaches the right people.',
      keyMethods: [
        'Payer and P&T committee member sourcing',
        'Consumer recruitment against demographic and behavioral screeners',
        'Multi-market feasibility built in'
      ],
      sampleQuestions: [
        'Which payer and P&T decision-makers should we speak with?',
        'Which consumer profiles match our demographic and behavioral screeners?'
      ]
    }
  },
  {
    id: 'brand-message-tracking',
    badge: 'Br',
    badgeBg: '#E8E2D5',
    badgeText: '#4A4336',
    title: 'Fieldwork & Project Support',
    description: 'We handle the logistics. You run the research.',
    fullDetails: {
      overview: 'From the first feasibility check to the final honorarium, we take the operational load off your team, so nothing slips between recruitment and the interview.',
      keyMethods: [
        'Feasibility and incidence assessment before you commit',
        'Session scheduling across time zones, with reminders',
        'Honorarium management and respondent payments',
        'Regular recruitment status updates'
      ],
      sampleQuestions: [
        'What feasibility and incidence can we expect before recruitment begins?',
        'How should sessions, reminders and honoraria be managed across markets?'
      ]
    }
  },
  {
    id: 'evaluation-impact',
    badge: 'Ev',
    badgeBg: '#DCE8BE',
    badgeText: '#3F4F19',
    title: 'Evaluation & Impact',
    description: 'Rigorous before/after and longitudinal measurement for programs, campaigns, and patient support initiatives.',
    fullDetails: {
      overview: 'Isolate the causal business and clinical impact of commercial initiatives, patient assistance hubs, and digital educational campaigns with statistical rigor.',
      keyMethods: [
        'Difference-in-differences (DiD) observational studies',
        'Patient adherence telemetry and persistence curves',
        'ROI and net-promoter analysis for patient support services',
        'Field force enablement efficacy auditing'
      ],
      sampleQuestions: [
        'Did our digital patient onboarding hub verifiably improve 6-month therapy persistence?',
        'Which support interventions generated the highest retention among newly diagnosed patients?'
      ]
    }
  },
  {
    id: 'strategic-advisory',
    badge: 'St',
    badgeBg: '#F0DFC8',
    badgeText: '#5E4115',
    title: 'Strategic Advisory',
    description: 'Senior researchers embedded alongside your team for market entry, positioning, and go-to-market strategy work.',
    fullDetails: {
      overview: 'No junior handoffs. Veteran research directors work directly with your VP and director-level stakeholders to translate empirical market evidence into defensible strategic roadmaps.',
      keyMethods: [
        'War-gaming and competitive scenario workshops',
        'Go-to-market (GTM) strategy stress-testing',
        'Target product profile (TPP) commercial refinement',
        'Executive board and investor readout synthesis'
      ],
      sampleQuestions: [
        'How should we price and position our asset ahead of a second-to-market competitor entry?',
        'What strategic pivot will maximize enterprise valuation before our Series C / IPO window?'
      ]
    }
  }
];

export const METHOD_STEPS = [
  {
    title: '1. Brief Alignment',
    description: 'We start with your open commercial question, defining exactly what a good, actionable answer needs to look like.'
  },
  {
    title: '2. Feasibility & Planning',
    description: 'Before you commit, we assess availability and incidence for your target audience. You get a realistic timeline, sample plan and cost estimate, so you know exactly what to expect.'
  },
  {
    title: '3. Targeted Sourcing',
    description: "Have a target list? We work directly from it and reach out only to the data you provide. Don't have one? We build a focused list matched to your study. Either way, we recruit for your criteria, not whoever is easiest to find."
  },
  {
    title: '4. Screening & Verification',
    description: 'Every respondent is checked against your screener and their credentials are confirmed before we present them. Duplicates and mismatches are filtered out early, so your fieldwork stays clean.'
  },
  {
    title: '5. Scheduling & Fieldwork Support',
    description: 'We confirm participants, schedule sessions across time zones and send reminders to protect attendance. You get regular updates on recruitment status until every slot is filled.'
  },
  {
    title: '6. Honorarium & Closeout',
    description: "We manage respondent honoraria and close out the project with a final status summary. Have another wave or a new study? We're ready to start again with the same care."
  }
];

export const INDUSTRIES_LIST: IndustryCategory[] = [
  {
    id: 'pharma-biotech',
    name: 'Pharma & Biotech',
    description: 'Verified physicians, KOLs, patients and caregivers across all therapeutic areas, from common conditions to rare diseases.',
    recentQuestions: [
      'Physicians and KOLs for IDIs and advisory boards',
      'Patients on specific therapies for journey and burden research'
    ]
  },
  {
    id: 'medical-devices',
    name: 'Medical Devices',
    description: 'Clinicians and hospital decision-makers across specialties, ready for your device and procedure research.',
    recentQuestions: [
      'Physicians, surgeons and nurses who use or evaluate devices',
      'Procurement and value analysis committee members'
    ]
  },
  {
    id: 'health-insurance',
    name: 'Health Insurance',
    description: 'Payer decision-makers and plan members, recruited for your coverage, access and experience research.',
    recentQuestions: [
      'Medical and pharmacy directors, P&T committee members',
      'Health plan members across age and coverage types'
    ]
  },
  {
    id: 'consumer-health',
    name: 'Consumer Health',
    description: 'Everyday consumers matched to your OTC, supplement and self-care research criteria.',
    recentQuestions: [
      'OTC and supplement buyers by demographic and behavior',
      'Pharmacists and health-conscious shoppers'
    ]
  },
  {
    id: 'digital-health',
    name: 'Digital Health',
    description: 'Clinicians and real users for your digital therapeutics and remote monitoring research.',
    recentQuestions: [
      'Healthcare professionals who prescribe or use digital tools',
      'Patients managing chronic conditions with apps and devices'
    ]
  },
  {
    id: 'nonprofit-public-health',
    name: 'Nonprofit & Public Health',
    description: 'Patients, caregivers and community voices for advocacy and public health research.',
    recentQuestions: [
      'Caregivers and patient advocacy group members',
      'Community health workers and underserved populations'
    ]
  },
  {
    id: 'animal-health',
    name: 'Animal Health',
    description: 'Veterinarians and pet owners recruited for your veterinary product and pet wellness research.',
    recentQuestions: [
      'Veterinarians and clinic decision-makers',
      'Pet owners by species, age and spending habits'
    ]
  },
  {
    id: 'diagnostics-testing',
    name: 'Diagnostics & Testing',
    description: 'Physicians, lab professionals and patients for your testing and screening research.',
    recentQuestions: [
      'Physicians who order or interpret tests',
      'Lab directors, pathologists and patients with testing experience'
    ]
  },
  {
    id: 'b2b-health-services',
    name: 'B2B Health Services',
    description: 'Hospital and health system executives for research on the vendors and services they buy.',
    recentQuestions: [
      'Hospital CFOs, revenue cycle and operations leaders',
      'Supply chain, IT and staffing decision-makers'
    ]
  },
];

export const INSIGHTS_LIST: InsightArticle[] = [
  {
    id: 'ai-is-changing-neurology-research',
    category: 'INNOVATION',
    title: 'How AI is changing neurology research',
    description: 'Why neurological research teams are pairing AI-assisted analysis with more human respondent conversations.',
    gradientClass: 'from-[#6B4FA3] via-[#2C9A86] to-[#D3A529]',
    readTime: '5 min read',
    author: 'Kinera Neurology Practice Group',
    content: [
      "Neurology research is entering a new phase. AI can help teams organize longitudinal records, surface patterns across symptom journeys and identify the questions that deserve deeper human investigation.",
      "### What AI does well",
      "AI-assisted workflows can reduce the time spent finding signals across complex clinical and patient data. They can help researchers compare treatment experiences, cluster unmet needs and prepare sharper screeners for neurologists, caregivers and patients.",
      "### Where human voices matter most",
      "A model can identify a pattern, but it cannot replace the lived context behind it. Respondent conversations remain essential for understanding diagnosis delays, treatment trade-offs, cognitive burden and the practical realities of managing neurological conditions.",
      "> \"The strongest neurology studies will use AI to focus the conversation, not to remove people from it.\"",
      "The opportunity is a better partnership between technology and recruitment: faster signal discovery, more focused qualitative work and findings that remain grounded in the experience of the people the research is meant to serve."
    ]
  },
  {
    id: 'the-self-directed-patient-is-changing-how-brands-earn-trust',
    category: 'CATEGORY TRENDS',
    title: 'The self-directed patient is changing how brands earn trust',
    description: "A look at how patients are researching treatment decisions before ever speaking to a rep.",
    gradientClass: 'from-amber-300 via-orange-400 to-rose-400',
    readTime: '6 min read',
    author: 'Patient & Consumer Intelligence Team',
    content: [
      "Patients and family caregivers no longer passively accept a first-line therapeutic recommendation without extensive independent research. From specialized Reddit communities to scientific journal preprints, the <b>self-directed patient</b> represents a seismic shift in healthcare decision-making.",
      "### The New Patient Journey",
      "Our research shows that in specialty and chronic conditions (such as autoimmune disorders or rare oncology), over <b>68% of patients have already researched 2 to 3 alternative therapeutic mechanisms</b> prior to their specialist appointment.",
      "> \"Patients aren't just googling symptoms anymore. They are reading the FDA package inserts, comparing side-effect profiles on TikTok, and walking into clinics with a specific brand name in mind.\"",
      "### Where Traditional Messaging Fails",
      "Traditional commercial messaging built around physician detailing alone misses this critical early window of trust formation. If a brand only speaks to the doctor, they leave the patient to be educated by competitors, patient-advocacy forums, or worse, misinformation.",
      "Brands that succeed provide clear, transparent, scientifically grounded educational assets directly accessible to caregivers. When brands respect patient agency through empathetic, plain-language clinical evidence, physician-patient dialogue becomes constructive rather than skeptical."
    ]
  },
  {
    id: 'cutting-a-market-entry-decision-from-6-months-to-8-weeks',
    category: 'CASE STUDY',
    title: 'Cutting a market-entry decision from 6 months to 8 weeks',
    description: 'How a mid-size medtech brand used our Signal-to-Synthesis framework to move faster than legacy players.',
    gradientClass: 'from-indigo-400 via-purple-400 to-pink-400',
    readTime: '7 min read',
    author: 'Strategic Advisory Practice',
    content: [
      "A fast-growing surgical robotics firm faced a critical dilemma: enter the European market with direct capital equipment sales, or partner with established regional distributors. They had one shot to get it right.",
      "### The Syndicated Trap",
      "Traditional market research consultancies proposed a 6-month, 200-page syndicated study costing hundreds of thousands of dollars. The problem? The client needed an answer before their Q3 board meeting, and a generic 'State of EU Robotics' report wouldn't answer their specific margin-structure questions.",
      "### The Signal-to-Synthesis Approach",
      "Kinera deployed our bespoke framework. We focused <i>exclusively</i> on the three operational gating items:",
      "<b>1. Hospital tender committee approval cycles</b> (Can we navigate the bureaucracy directly?)",
      "<b>2. Capital expenditure authority limits</b> (Who actually signs the check?)",
      "<b>3. Surgeon workflow friction</b> (Will they advocate for us if we don't have local reps?)",
      "> \"By cutting out the macroeconomic fluff, we reduced the fieldwork timeline by 70% while actually increasing the depth of the insights that mattered.\"",
      "Within 8 weeks, our team conducted targeted stakeholder interviews across 14 hospital systems in Germany, the UK, and France. We delivered a decision-ready playbook that led the executive team to a hybrid distribution model — saving an estimated $2.4M in overhead."
    ]
  },
  {
    id: 'how-ai-is-reshaping-clinical-trial-recruitment',
    category: 'INNOVATION',
    title: 'How AI is reshaping clinical trial recruitment',
    description: 'Our early findings on patient willingness to engage with AI-driven screening protocols.',
    gradientClass: 'from-blue-400 via-cyan-300 to-emerald-300',
    readTime: '4 min read',
    author: 'Digital Health Practice',
    content: [
      "Clinical trial recruitment remains one of the largest bottlenecks in bringing new therapies to market. Recently, AI-driven pre-screening tools and predictive algorithms have promised to accelerate this process by identifying eligible patients through EHR data mining.",
      "### The Demographic Divide",
      "However, our latest quantitative study of 2,500 chronic illness patients reveals a complex reality: while younger demographics (18-35) are highly comfortable sharing health data with algorithms for matching, <b>patients over 65 show significant hesitation.</b>",
      "> \"When an AI chatbot asked for my medical history to qualify me for a trial, it felt invasive. I want to hear about these options from my actual doctor.\" — <i>Study Participant, 68</i>",
      "### Human-in-the-Loop is Non-Negotiable",
      "The key to adoption lies in 'human-in-the-loop' communication. When AI is positioned as a background tool that helps their <i>existing physician</i> find the best options—rather than an autonomous, patient-facing decision-maker—opt-in rates increase by 42%.",
      "Sponsors must balance algorithmic efficiency with empathetic, transparent patient communications. The technology should empower the clinical site coordinators, not replace them."
    ]
  },
  {
    id: 'navigating-the-biosimilar-cliff',
    category: 'MARKET ACCESS',
    title: 'Navigating the 2025 biosimilar cliff',
    description: 'Payer and prescriber strategies as blockbuster biologics face generic competition.',
    gradientClass: 'from-rose-400 via-fuchsia-400 to-indigo-500',
    readTime: '8 min read',
    author: 'Market Access & Pricing Team',
    content: [
      "As several major biologic therapies lose exclusivity between 2024 and 2026, the market is bracing for a wave of biosimilar entries. But unlike small-molecule generics, biosimilar adoption is highly dependent on provider comfort, immunogenicity concerns, and complex payer formulary design.",
      "### Beyond the Discount",
      "Our recent advisory boards with P&T committee directors indicate that <b>cost alone will not drive automatic substitution.</b>",
      "> \"We expect a discount. But if your patient support hub is clunky, or your autoinjector is prone to misfires, we won't switch our stable patients over a 15% rebate difference.\"",
      "Payers are demanding robust real-world evidence of interchangeability, comprehensive patient support programs (PSPs), and flawless supply chain reliability.",
      "### Strategies for Entrants and Originators",
      "For <b>originator brands</b>, the strategy must pivot from clinical superiority to ecosystem value—highlighting supply chain reliability, established patient hubs, and unique delivery mechanisms that biosimilars cannot easily replicate.",
      "<b>Biosimilar entrants</b> must go beyond discounting, building localized contracting strategies that align with the specific incentives of Integrated Delivery Networks (IDNs) and specialized pharmacy benefit managers."
    ]
  },
];
