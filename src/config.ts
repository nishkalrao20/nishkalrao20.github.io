export interface Project {
  name: string;
  slug: string;
  label?: string;
  description?: string;
  date?: string;
  repo?: string;
  demo?: string;
  skills?: string[];
}

export interface Education {
  school: string;
  degree: string;
  dateRange?: string;
  achievements?: string[];
}

export interface NewsItem {
  date: string;
  title: string;
  description?: string;
  url?: string;
  type?: "conference" | "poster" | "school" | "other";
}

export interface SiteConfig {
  name: string;
  title?: string;
  description?: string;
  accentColor?: string;
  social?: Record<string, string>;
  aboutMe?: string;
  skills?: string[];
  projects?: Project[];
  education?: Education[];
  news?: NewsItem[];
}

export const siteConfig: SiteConfig = {
  name: "Nishkal Rao",
  title: "Graduate Researcher",
  description: "Personal website — Research, Projects, and Resources",
  accentColor: "#1d4ed8",
  social: {
    email: "nishkal.rao@students.iiserpune.ac.in",
    github: "https://github.com/nishkalrao20",
    twitter: "https://x.com/nishkalrao",
    instagram: "https://instagram.com/nishkalrao",
    blog: "https://nishkal20.wixsite.com/dream",
  },

  aboutMe:
    "I’m a 5th-year BS-MS student at IISER Pune. My research centers on general relativity, gravitational physics, black-hole horizons, ringdown physics, and mathematical aspects of general relativity.",

  skills: [
    "Gravitational Waves",
    "General Relativity",
    "Black Hole Decoherence",
    "Ringdown Physics",
    "Mathematical Physics",
    "Numerical Methods",
  ],

  projects: [
    {
      name: "Quasi-Local Black Hole Horizons",
      slug: "quasi-local-horizons",
      label: "Master's Thesis",
      description:
        "Construction and analysis of quasi-local isolated horizons for near-horizon spacetime models.",
      skills: ["General Relativity"],
      date: "June 2025",
      repo: "",
      demo: "",
    },
    {
      name: "Comprehensive analysis of time-domain Overlapping Gravitational Wave Transients",
      slug: "overlapping-gw",
      description:
        "Addressing challenges of overlapping compact binary coalescences in future gravitational wave detectors. Developing techniques for identification and characterization to enhance parameter estimation accuracy. Gained expertise in matched filtering (PyCBC), unmodeled analysis (cWB), and Bayesian parameter estimation (bilby).",
      skills: ["Gravitational Wave Analysis"],
      repo: "",
      demo: "",
    },
    
    {
      name: "Post-merger emission of non-circular binary mergers",
      slug: "nc-ringdown",
      description:
        "Comprehensive study of non-circular encounters in the context of gravitational wave ringdowns, through fitting techniques and the reconstruction of waveforms that capture the physics of eccentric, non-circular mergers.",
      skills: ["Gravitational Wave Analysis", "Ringdowns", "Numerical Relativity"],
      repo: "",
      demo: "",
    },
    
    {
      name: "Quantum Superpositions: Entanglement and Decoherence through Black Holes",
      slug: "bh-decoherence",
      description:
        "Study of decoherence of stationary superpositions in spacetimes with Killing horizons. Analysis framed via the local two-point function of quantum fields and applications to black hole induced decoherence.",
      skills: ["Black Hole Decoherence", "Quantum Field Theory", "General Relativity", "Quantum Foundations"],
      repo: "",
      demo: "",
    },
    
    {
      name: "On detectability of non-linear modes in ringdown through Parameter Estimation",
      slug: "nonlinear-ringdown-pes",
      description:
        "Implementation and testing of quadratic mode injections, development of parameter estimation strategies, and analysis of the detectability of non-linear/quadratic ringdown modes.",
      skills: ["Gravitational Wave Analysis", "Ringdowns", "Parameter Estimation"],
      repo: "",
      demo: "",
    },
    
    {
      name: "Enhancing IMR Consistency Tests for Gravitational Wave Transients",
      slug: "imr-consistency-enhancements",
      description:
        "Enhancements to inspiral–merger–ringdown (IMR) consistency tests using time-domain analyses: algorithmic improvements, SNR threshold refinement and investigation of higher-mode systematics on GR tests.",
      skills: ["Gravitational Wave Analysis"],
      repo: "",
      demo: "",
    },
    
    {
      name: "Reconstruction of the Universe from the DESI Survey using Neural Networks",
      slug: "desi-reconstruction",
      description:
        "Constructing high-resolution density and peculiar velocity field maps using DESI galaxy-survey data and neural networks. Aims to enable velocity-field reconstructions for cosmological analyses of dark matter and dark energy.",
      skills: ["Cosmology", "Neural Networks", "Machine Learning"],
      repo: "",
      demo: "",
    },

  ],

  education: [
    {
      school: "Indian Institute of Science Education and Research (IISER) Pune",
      degree: "BS–MS (Physics) — 5th year (Master's student)",
      dateRange: "2021 — present",
      achievements: ["Research in gravitational physics", "Teaching assistant"],
    },
    {
      school: "Sharada Vidyalaya",
      degree: "Class X CBSE",
      dateRange: "2019",
      achievements: ["Percentage: 97.4%", "Science: 100/100"],
    },
  ],

  news: [
    {
      date: "2025-07-01",
      title: "ICTS Summer School on Gravitational-Wave Astronomy — Attended",
      description: "ICTS-TIFR, Bangalore (July 2025). Summer school on GW astronomy and data analysis.",
      url: "/posters/poster_presentation.pdf",
      type: "school",
    },
    {
      date: "2025-06-15",
      title: "QIQG 2025: Quantum Information in Quantum Gravity — Participant",
      description: "Perimeter Institute (online). Participated in workshops exploring foundations of quantum gravity.",
      url: "",
      type: "conference",
    },
    {
      date: "2024-06-10",
      title: "EOB@Work24 Conference — Presented",
      description: "Theoretisch-Physikalisches Institut, FSU Jena. Presented a poster/talk on quasi-local horizons.",
      url: "",
      type: "conference",
    },
    {
      date: "2024-05-01",
      title: "DAAD WISE Fellowship (FSU Jena) — Awarded",
      description: "Three-month funded research internship award (Theoretisch-Physikalisches Institut, FSU Jena).",
      url: "",
      type: "award",
    },
  ],
};
