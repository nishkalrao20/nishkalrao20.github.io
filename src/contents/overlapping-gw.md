---
title: "Comprehensive analysis of time-domain Overlapping Gravitational Wave Transients"
skills: ["Gravitational Wave Analysis"]
---

### Overlapping Transients

### Lensing Effects
#### Strong Lensing (Type II):
It is an effect of scaling the signal's amplitude, a temporal delay and an overall phase shift. Resulting in non-trivial properties in the time domain for certain parameters.
#### Microlensing: 
Exhibits frequency-dependent amplification due to wave-optics effects. Resemblance to the beating patterns in overlapping signals.

### Parameters
Systematically vary key parameters influencing waveform evolution: Chirp mass ratio: $\mathcal{M}_B/\mathcal{M}_A$, SNR ratio: $\rm{SNR_B/SNR_A}$, Coalescence time difference: $\Delta t_c$.
#### Parameter estimation:
$\mathcal{M}_B/\mathcal{M}_A \in \{0.5,\,1,\,2\}$, $\mathrm{SNR_B/SNR_A} \in \{0.5,\,1\}$, $\Delta t_c \in [-1,\,1]\,$s, (60 signals)
#### Fitting factor:
$\mathcal{M}_B/\mathcal{M}_A \in [0.1,\,10]$, $\mathrm{SNR_B/SNR_A} \in [0.1,\,10]$, $\Delta t_c \in [-1,\,1]\,$s, ($\sim\mathcal{O}$(5000) signals)

### Methods
#### Parameter Estimation
Bayesian inference: $\mathcal{L}(d|\theta)\propto\exp\Big[-\tfrac{1}{2}\langle d-h(\theta)|d-h(\theta)\rangle\Big]$
$\underbrace{\log_{10}\mathcal{B}^L_U}_{\text{Bayes Factor}} = \log_{10}\mathcal{Z}_L - \log_{10}\mathcal{Z}_U, \quad \mathcal{Z}_M = \int d\theta \mathcal{L}(d | \theta, \mathcal{H}_M) \pi_M(\theta | \mathcal{H}_M)$

#### Fitting Factor 
Maximizing waveform overlap: $\mathcal{M}[h_1, h_2] = \max_{t_c, \Phi_c}\frac{\langle h_1 | h_2 \rangle}{\sqrt{\langle h_1 | h_1 \rangle \langle h_2 | h_2 \rangle}}.$
$\mathcal{F}=\max_{\lambda}\,\mathcal{M}[h_1, h_2(\lambda)], \quad \log_{10}\mathcal{B}^L_U = (\mathcal{F}_L^2 - \mathcal{F}_U^2)\frac{\mathrm{SNR}^2}{2}$

### Unlensed Singles:
#### Parameter Estimation:
- Overlap induces significant parameter biases (e.g., in chirp mass).
- Higher-SNR signals dominate recovery.
- Bimodal distributions emerge in strongly overlapping cases.

#### Fitting Factor:
- Confirms the individual case dependencies and biases. 
- Evident biases increase at stronger overlaps and comparable chirp mass, SNRs.

### Type II Lensed:
#### Parameter Estimation: 
- _A:_ Fixed Morse phase shows distinct Bayes factor differences over the unlensed case.
- _B,C:_ Allowing the Morse phase to vary improves lensing characterization.

#### Fitting Factor:
- _A:_ Fixed Morse phase presents mild support for Type II lensing recovery, except at comparable chirp mass, SNRs.
- _B, C:_ Allowing the Morse phase to vary shows greater support for strong lensing.

### Microlensed:
#### Parameter Estimation:
- Microlensed templates yield stronger support for strongly overlapping signals.
- Recovered lens parameters ($M_\ell^z$, $y$) show dependencies with $\Delta t_c$.
- For cases with significant overlap, the microlensed recovery tends to favour _larger_ lens masses and _smaller_ impact parameters. 
- Decrease in support for lensing at higher difference in coalescence times.

#### Fitting Factor:
- Significant support for microlensing at specific parameter regimes.
- Larger lens mass and smaller impact parameters recovered at significant chirp mass and SNR ratios.

### Conclusions
- Overlapping signals lead to significant biases in single signal unlensed parameter recovery.
- Further, we find that Type II lensing and microlensing signals can mimic overlapping effects, especially in the strong overlap regime.
- Advanced parameter estimation methods are essential to disentangle these effects.

<div id="ref-r1" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong>Rao, N. et al.,</strong> Comprehensive analysis of time-domain overlapping gravitational wave transients I: A Lensing Study. arXiv, 2025.
  </div>
</div>

<div id="ref-r2" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong>Samajdar, A. et al.,</strong> Biases in parameter estimation from overlapping gravitational-wave signals in the third-generation detector era. Physical Review D 2021 <a href="https://doi.org/10.1103/PhysRevD.104.044003" target="_blank" rel="noopener">*</a>
  </div>
</div>

<div id="ref-r3" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong>Relton, P. and Raymond, V.,</strong> Parameter estimation bias from overlapping binary black hole events in second generation interferometers. Physical Review D 2021 <a href="https://doi.org/10.1103/PhysRevD.104.084039" target="_blank" rel="noopener">*</a>
  </div>
</div>

<div id="ref-r4" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong>Janquart, J. et al.,</strong> Analyses of overlapping gravitational wave signals using hierarchical subtraction and joint parameter estimation. Monthly Notices of the Royal Astronomical Society 2023 <a href="https://doi.org/10.1093/mnras/stad1542" target="_blank" rel="noopener">*</a>
  </div>
</div>

<div id="ref-r5" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong>Veitch, J. and Vecchio, A.,</strong> Bayesian coherent analysis of in-spiral gravitational wave signals with a detector network. Physical Review D 2010 <a href="https://doi.org/10.1103/PhysRevD.81.062003" target="_blank" rel="noopener">*</a>
  </div>
</div>

<div id="ref-r6" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong>Owen, B.J.,</strong> Search templates for gravitational waves from inspiraling binaries: Choice of template spacing. Physical Review D 1996 <a href="https://doi.org/10.1103/PhysRevD.53.6749" target="_blank" rel="noopener">*</a>
  </div>
</div>
