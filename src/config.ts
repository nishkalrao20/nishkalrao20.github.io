export interface Project {
  name: string;
  slug: string;
  label?: string;
  description?: string;
  date?: string;
  repo?: string;
  demo?: string;
  skills?: string[];
  category?: string;
}

export interface Publication {
  title: string;
  authors?: string;
  venue?: string;
  year?: string | number;
  category?: 'Published' | 'Preprint' | string;
  doi?: string;
  arxiv?: string;
  pdf?: string;
  bibtex?: string;
  note?: string;
  id?: string;
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
  program?: string;
  poster?: string;
  video?: string;
  document?: string;
  notes?: string;
  slides?: string;
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
  publications?: Publication[];
}

export const siteConfig: SiteConfig = {
  name: "Nishkal Rao",
  title: "Graduate Researcher, IISER Pune",
  description: "Personal website - Research, Projects, and Resources",
  social: {
    email: "nishkal.rao@students.iiserpune.ac.in",
    github: "https://github.com/nishkalrao20",
    instagram: "https://instagram.com/nishkalrao",
    blog: "https://nishkal20.wixsite.com/dream",
    googleScholar: "https://scholar.google.com/citations?user=mHprqWAAAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0006-4551-7312",
    arxiv: "https://arxiv.org/search/gr-qc?searchtype=author&query=Rao,+N",
    inspire: "https://inspirehep.net/authors/3072511",
    semantic: "https://www.semanticscholar.org/author/Nishkal-Rao/2386621417",
    ads: "https://ui.adsabs.harvard.edu/search/q=orcid%3A0009-0006-4551-7312&sort=date+desc",
    researchgate: "https://www.researchgate.net/profile/Nishkal-Rao"
  },
  aboutMe:
    "I’m a 5th-year BS-MS student at IISER Pune. My research centers on general relativity, gravitational physics, black-hole horizons, ringdown physics, and mathematical aspects of general relativity.",
  skills: [
    "Gravitational Waves",
    "General Relativity",
    "Black Hole Decoherence",
    "Ringdown Physics",
    "Mathematical Physics",
    "Numerical Methods"
  ],
  publications: [
    {
      title: "Comprehensive analysis of time-domain overlapping gravitational wave transients: A Lensing Study",
      authors: "N. Rao, A. Mishra, A. Ganguly, A. More",
      venue: "Phys. Rev. D (in review)",
      year: 2025,
      category: "Preprint",
      arxiv: "2510.17787",
      doi: "10.48550/arXiv.2510.17787",
      bibtex: `@article{Rao:2025poe,
                author = "Rao, Nishkal and Mishra, Anuj and Ganguly, Apratim and More, Anupreeta",
                title = "{Comprehensive analysis of time-domain overlapping gravitational wave transients: A Lensing Study}",
                eprint = "2510.17787",
                archivePrefix = "arXiv",
                primaryClass = "gr-qc",
                reportNumber = "LIGO-P2500640",
                month = "10",
                year = "2025"}`,
      pdf: "",
      note: "Next-generation GW detectors will produce a high rate of temporally overlapping signals from unrelated compact binary coalescences. Such overlaps can bias parameter estimation (PE) and mimic signatures of other physical effects, such as gravitational lensing. In this work, we investigate how overlapping signals can be degenerate with gravitational lensing by focusing on two scenarios: Type-II strong lensing and microlensing by an isolated point-mass lens.",
      id: "overlapping-lensing-2025"
    }
  ],
  projects: [
    {
      name: "Quasi-Local Black Hole Horizons",
      slug: "quasi-local-horizons",
      label: "Master's Thesis",
      description:
        "Construction and analysis of quasi-local isolated horizons for near-horizon spacetime models.",
      category: "General Relativity",
      skills: ["General Relativity", "Isolated Horizons"],
      date: "June 2025 - present",
      repo: "",
      demo: "msthesis.pdf",
      imageCredit: "Kip Thorne, Interstellar"
    },
    {
      name: "Overlapping Gravitational Wave Transients",
      slug: "overlapping-gw",
      description:
        "Addressing challenges of overlapping compact binary coalescences in future gravitational wave detectors. Developing techniques for identification and characterization to enhance parameter estimation accuracy. Gained expertise in matched filtering (PyCBC), unmodeled analysis (cWB), and Bayesian parameter estimation (bilby).",
      category: "Gravitational Waves",
      skills: ["Gravitational Wave Analysis"],
      date: "July 2022 - June 2025",
      repo: "https://github.com/nishkalrao20/git_overlap",
      demo: "overlapping_gw_slides.pdf",
      imageCredit: "Olena Shmahalo, Quanta Magazine"
    },
    {
      name: "Post-merger emission of non-circular binary mergers",
      slug: "nc-ringdown",
      description:
        "Comprehensive study of non-circular encounters in the context of gravitational wave ringdowns, through fitting techniques and the reconstruction of waveforms that capture the physics of eccentric, non-circular mergers.",
      category: "Gravitational Waves",
      skills: ["Gravitational Wave Analysis", "Ringdowns", "Numerical Relativity"],
      date: "Jan 2025 - present",
      repo: "https://github.com/GCArullo/bayRing/tree/nc_fits_nishkal",
      demo: "nc_ringdown_slides.pdf",
      imageCredit: "Olena Shmahalo, Institute for Advanced Study"
    },
    {
      name: "Quantum Superpositions: Entanglement and Decoherence through Black Holes",
      slug: "bh-decoherence",
      description:
        "Study of decoherence of stationary superpositions in spacetimes with Killing horizons. Analysis framed via the local two-point function of quantum fields and applications to black hole induced decoherence.",
      category: "Quantum Foundations",
      skills: ["Black Hole Decoherence", "Quantum Field Theory", "General Relativity", "Quantum Foundations"],
      date: "Jan 2025 - present",
      repo: "",
      demo: "bh_decoherence_slides.pdf",
      imageCredit: "Kristina Armitage, Quanta Magazine"
    },
    {
      name: "On detectability of non-linear modes in ringdown through Parameter Estimation",
      slug: "quadratic-modes",
      description:
        "Implementation and testing of quadratic mode injections, development of parameter estimation strategies, and analysis of the detectability of non-linear/quadratic ringdown modes.",
      category: "Gravitational Waves",
      skills: ["Gravitational Wave Analysis", "Ringdowns", "Parameter Estimation"],
      date: "Dec 2024 - present",
      repo: "http://github.com/nishkalrao20/pycbc/tree/quadtratic_modes",
      demo: "",
      imageCredit: "Nils Siemonsen, Phys.org"
    },
    {
      name: "Enhancing IMR Consistency Tests for Gravitational Wave Transients",
      slug: "imrct-tgr",
      description:
        "Enhancements to inspiral–merger–ringdown (IMR) consistency tests using time-domain analyses: algorithmic improvements, SNR threshold refinement and investigation of higher-mode systematics on GR tests.",
      category: "Gravitational Waves",
      skills: ["Gravitational Wave Analysis"],
      date: "September 2023 - present",
      repo: "https://github.com/nishkalrao20/bilby/tree/time_domain_dev",
      demo: "",
      imageCredit: "Kristina Armitage, Quanta Magazine"
    },
    {
      name: "Reduced-order-quadrature model for binary neutron star merger parameter estimation",
      slug: "roq-bns",
      description:
        "Improved reduced order quadrature method for parameter estimation in binary neutron star mergers.",
      category: "Gravitational Waves",
      skills: ["Gravitational Wave Analysis"],
      date: "May 2024 - July 2024",
      repo: "https://github.com/nishkalrao20/bajes/tree/roq_inspiral",
      demo: "roq_bns_report.pdf",
      imageCredit: "Robert Hurt, Caltech JPL"
    }
  ],
  education: [
    {
      school: "Indian Institute of Science Education and Research (IISER) Pune",
      degree: "BS-MS Dual Degree (5 year)",
      dateRange: "2021 - present",
      achievements: ["Physics Major | Mathematics Minor", "GPA: 9.3/10"]
    },
    {
      school: "Mount Carmel Central School",
      degree: "Class XII CBSE",
      dateRange: "2021",
      achievements: ["Percentage: 97.2%", "Physics: 98/100 | Mathematics: 99/100"]
    },
    {
      school: "Sharada Vidyalaya",
      degree: "Class X CBSE",
      dateRange: "2019",
      achievements: ["Percentage: 97.4%", "Science: 100/100"]
    }
  ],
  news: [
    {
      date: "Nov 2025",
      title: "Talk: '' - LVK Lensing Group Meeting",
      description:
        "Presented updates on my work for the LIGO India MOU regarding analysing degeneracies between overlapping gravitational-wave signals and lensing effects, and tests of general relativity.",
      video: "https://youtu.be/x2Vpyx5Ay74",
      notes: "/updates/overlapping_gw_slides_3.pdf",
      slides: "/updates/imrct_gw.pdf"
    },
    {
      date: "Oct 2025",
      title: "Talk: 'Updates: Overlapping and Lensed GWs' - LVK Lensing Group Meeting",
      description:
        "Presented updates on our work regarding analysing degeneracies between overlapping gravitational-wave signals and lensing effects.",
      video: "https://youtu.be/b6Gn5agMtt8",
      slides: "/updates/overlapping_gw_slides_2.pdf"
    },
    {
      date: "July 2025",
      title: "ICTS Summer School on Gravitational-Wave Astronomy 2025 - ICTS-TIFR, Bangalore",
      description:
        "Attended ICTS Summer School on Gravitational-Wave Astronomy (July 2025). Participated in lectures and hands-on sessions on GW data analysis and modelling. Presented a poster summarizing work on non-circular binary merger ringdown and compiled detailed lecture notes.",
      poster: "/updates/icts-2025-poster.pdf",
      notes: "/updates/icts-2025-notes.pdf"
    },
    {
      date: "Feb 2025",
      title: "Talk: 'Degeneracies between Overlapping and Lensing GWs' - LVK Lensing Group Meeting",
      description:
        "Presented work analysing degeneracies between overlapping gravitational-wave signals and lensing effects. Discussed identification strategies and implications for parameter inference.",
      video: "https://youtu.be/GD7CZXRHXyA",
      slides: "/updates/overlapping_gw_slides_1.pdf"
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
      title: "ICTS Summer School on Gravitational-Wave Astronomy 2023 - ICTS-TIFR, Bangalore",
      description:
        "Attended ICTS Summer School on Gravitational-wave Astronomy (July 2023). Participated in lectures and practical sessions on GW data analysis and modelling.",
      notes: "/updates/icts-2023-notes.pdf"
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
    }
  ]
};
