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
  description: "Personal website - Research, Projects, and Resources",
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
      skills: ["General Relativity", "Isolated Horizons"],
      date: "June 2025 - present",
      repo: "",
      demo: "",
    },
    {
      name: "Overlapping Gravitational Wave Transients",
      slug: "overlapping-gw",
      description:
        "Addressing challenges of overlapping compact binary coalescences in future gravitational wave detectors. Developing techniques for identification and characterization to enhance parameter estimation accuracy. Gained expertise in matched filtering (PyCBC), unmodeled analysis (cWB), and Bayesian parameter estimation (bilby).",
      skills: ["Gravitational Wave Analysis"],
      date: "July 2022 - June 2025",
      repo: "https://github.com/nishkalrao20/git_overlap",
      demo: "",
    },
    
    {
      name: "Post-merger emission of non-circular binary mergers",
      slug: "nc-ringdown",
      description:
        "Comprehensive study of non-circular encounters in the context of gravitational wave ringdowns, through fitting techniques and the reconstruction of waveforms that capture the physics of eccentric, non-circular mergers.",
      skills: ["Gravitational Wave Analysis", "Ringdowns", "Numerical Relativity"],
      date: "Jan 2025 - present",
      repo: "https://github.com/GCArullo/bayRing/tree/nc_fits_nishkal",
      demo: "",
    },
    
    {
      name: "Quantum Superpositions: Entanglement and Decoherence through Black Holes",
      slug: "bh-decoherence",
      description:
        "Study of decoherence of stationary superpositions in spacetimes with Killing horizons. Analysis framed via the local two-point function of quantum fields and applications to black hole induced decoherence.",
      skills: ["Black Hole Decoherence", "Quantum Field Theory", "General Relativity", "Quantum Foundations"],
      date: "Jan 2025 - present",
      repo: "",
      demo: "",
    },
    
    {
      name: "On detectability of non-linear modes in ringdown through Parameter Estimation",
      slug: "quadratic-modes",
      description:
        "Implementation and testing of quadratic mode injections, development of parameter estimation strategies, and analysis of the detectability of non-linear/quadratic ringdown modes.",
      skills: ["Gravitational Wave Analysis", "Ringdowns", "Parameter Estimation"],
      date: "Dec 2024 - present",
      repo: "http://github.com/nishkalrao20/pycbc/tree/quadtratic_modes",
      demo: "",
    },
    
    {
      name: "Enhancing IMR Consistency Tests for Gravitational Wave Transients",
      slug: "imrct-tgr",
      description:
        "Enhancements to inspiral–merger–ringdown (IMR) consistency tests using time-domain analyses: algorithmic improvements, SNR threshold refinement and investigation of higher-mode systematics on GR tests.",
      skills: ["Gravitational Wave Analysis"],
      date: "September 2023 - present",
      repo: "https://github.com/nishkalrao20/bilby/tree/time_domain_dev",
      demo: "",
    },
    
  ],

  education: [
    {
      school: "Indian Institute of Science Education and Research (IISER) Pune",
      degree: "BS-MS Dual Degree (5 year)",
      dateRange: "2021 - present",
      achievements: ["Physics Major, Mathematics Minor", "GPA: 9.3/10"]
    },
    {
      school: "Mount Carmel Central School",
      degree: "Class XII CBSE",
      dateRange: "2021",
      achievements: ["Percentage: 97.2%", "Physics: 98/100 | Mathematics: 99/100"],
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
      date: "July 2025",
      title: "ICTS Summer School on Gravitational-Wave Astronomy - ICTS-TIFR, Bangalore",
      description:
        "Attended ICTS Summer School on Gravitational-Wave Astronomy (July 2025). Participated in lectures and hands-on sessions on GW data analysis and modelling. Presented a poster summarizing work on non-circular binary merger ringdown and compiled detailed lecture notes.",
      poster: "/assets/news/icts-2025-poster.pdf",
      docs: "/assets/news/icts-2025-notes.pdf"
    },

    {
      date: "Feb 2025",
      title: "Talk: 'Degeneracies between Overlapping and Lensing GWs' - LVK Lensing Group Meeting",
      description:
        "Presented work analysing degeneracies between overlapping gravitational-wave signals and lensing effects. Discussed identification strategies and implications for parameter inference."
      poster: "https://www.youtube.com/watch?v=GD7CZXRHXyA"
    },

    {
      date: "June 2025",
      title: "QIQG 2025 - Quantum Information in Quantum Gravity (Perimeter Institute)",
      description:
        "Attended QIQG 2025 (online). Participated in lectures and discussions bridging quantum information concepts with gravitational physics and quantum gravity research."
    },

    {
      date: "Jan 2025",
      title: "Masterclass by Edward Witten - Black Hole Thermodynamics (DESY / University of Hamburg)",
      description:
        "Invited masterclass covering black hole thermodynamics and related conceptual foundations. Attended lectures and discussion sessions led by Prof. Edward Witten."
    },

    {
      date: "Jan 2025",
      title: "A Hundred Years of Quantum Mechanics - Discussion Meeting (ICTS-TIFR)",
      description:
        "Participated in the centennial discussion meeting on foundational and modern developments in quantum mechanics hosted by ICTS-TIFR."
    },

    {
      date: "June 2024",
      title: "EOB@Work24 Conference - Theoretisch-Physikalisches Institut, FSU Jena",
      description:
        "Attended EOB@Work24. Engaged with researchers working on effective-one-body modelling and waveform systematics related to compact-binary mergers."
    },

    {
      date: "July 2023",
      title: "ICTS Summer School on Gravitational-wave Astronomy (2023)",
      description:
        "Attended ICTS Summer School on Gravitational-wave Astronomy (July 2023). Participated in lectures and practical sessions on GW data analysis and modelling."
    },

    {
      date: "2024",
      title: "DAAD WISE Fellowship - Research Internship (FSU Jena)",
      description:
        "Awarded DAAD WISE Fellowship for a three-month funded research internship at Theoretisch-Physikalisches Institut, Friedrich-Schiller-Universität Jena (Germany)."
    },

    {
      date: "2022",
      title: "NIUS Astrophysics Fellow (HBCSE)",
      description:
        "Selected as National Initiative on Undergraduate Sciences (NIUS) Astrophysics Fellow at HBCSE (2022)."
    },

    {
      date: "2021",
      title: "KVPY SX/SB Fellowship (Kishore Vaigyanik Protsahan Yojana)",
      description:
        "Awarded KVPY SB Fellowship (2021) in recognition of strong performance in the Kishore Vaigyanik Protsahan Yojana program. Earlier, Recipient of the KVPY SX Fellowship (2020)."
    },
  ],
};
