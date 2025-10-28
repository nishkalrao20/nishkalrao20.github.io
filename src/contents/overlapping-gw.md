---
title: "Overlapping Gravitational Wave Transients"
skills: ["Gravitational Wave Analysis"]
---

<h2>Gravity Waves</h2>

On September 14, 2015, in the quiet hours of an otherwise ordinary morning in the United States, two LIGO detectors in Hanford and Livingston registered a signal unlike any seen before. That signal, labeled [**GW150914**](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.061102), was the advent of gravitational wave astronomy. A gravitational wave that traveled across the cosmos at the speed of light for nearly a billion years before reaching Earth provided us with the toolkit to unravel a newer perspective of our universe.

What began with that first whisper has grown into a chorus. Since GW150914, observatories around the world have recorded hundreds more gravitational-wave events, and detections now occur with a rate that was once unimaginable, often multiple times per week. Over the past decade, the LIGO and Virgo detectors have been made markedly more sensitive, and research laboratories worldwide are building and testing further upgrades to push sensitivity even higher.

As detectors grow more sensitive and surveys become deeper and longer, new challenges appear alongside new opportunities. One key challenge is **overlapping signals** [<a class="cite" data-ref="r1">1</a>,<a class="cite" data-ref="r2">2</a>,<a class="cite" data-ref="r3">3</a>,<a class="cite" data-ref="r4">4</a>]: when two (or more) gravitational-wave strains arrive at close times and in similar frequency bands, their signals superpose in the detector output.

<iframe
  id="marimo-iframe"
  src="https://marimo.io/notebooks/nb_s4zzgEJG9sBBBMbidUjjJf/app"
  sandbox="allow-scripts allow-same-origin allow-downloads allow-popups"
  allow="microphone"
  allowfullscreen
  width="100%"
  height="60%"
  style="border: 1px solid #ddd; border-radius: 8px;"
  title="Overlapping Gravitational Waves"
></iframe>

Overlap can bias our conclusions if not addressed properly. Studies have shown that when one signal is recovered while ignoring a coincident or nearby signal, it can lead to distorted parameter estimates, decreased detection efficiency, and misleading confidence intervals. To tackle this issue, researchers are developing higher-dimensional joint-inference techniques that aim to model multiple overlapping sources simultaneously. They are also implementing practical strategies such as global-fit approaches, targeted subtraction of strong transients, and new search pipelines and machine-learning tools designed for dense populations of signals. These efforts are crucial: as detector technology improves and the rate of events increases, robust statistical and computational methods will ensure that we can reliably transform faint signals into valuable insights about the universe's most extreme events.

_Drafting is currently in progress. Sorry for any inconvenience. Please check back soon!_

<div id="ref-r1" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong>Rao, N. et al.,</strong> Comprehensive analysis of time-domain overlapping gravitational wave transients I: A Lensing Study. arXiv, 2025.
  </div>
</div>

<div id="ref-r2" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong><a href="https://doi.org/10.1103/PhysRevD.104.044003" target="_blank" rel="noopener">Samajdar, A. et al.,</strong> Biases in parameter estimation from overlapping gravitational-wave signals in the third-generation detector era. Physical Review D 2021</a>
  </div>
</div>

<div id="ref-r3" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong><a href="https://doi.org/10.1103/PhysRevD.104.084039" target="_blank" rel="noopener">Relton, P. and Raymond, V.,</strong> Parameter estimation bias from overlapping binary black hole events in second generation interferometers. Physical Review D 2021</a>
  </div>
</div>

<div id="ref-r4" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong><a href="https://doi.org/10.1093/mnras/stad1542" target="_blank" rel="noopener">Janquart, J. et al.,</strong> Analyses of overlapping gravitational wave signals using hierarchical subtraction and joint parameter estimation. Monthly Notices of the Royal Astronomical Society 2023</a>
  </div>
</div>
