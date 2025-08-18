---
title: "Quantum Superpositions: Entanglement and Decoherence through Black Holes"
skills: ["Black Hole Decoherence", "Quantum Field Theory", "General Relativity", "Quantum Foundations"]
---

### The Gedankenexperiment: Causality and Complementarity
The foundational problem is how a quantum source interacts with the gravitational field. This is explored via a thought experiment involving two spacelike separated agents, A and B.

**The Setup:** Agent **A** prepares a massive particle in a spatial superposition $|\Psi\rangle = \frac{1}{\sqrt{2}}(|L\rangle + |R\rangle)$, where the paths are separated by a distance $d$. After a time $T_A$, A attempts to recombine the paths to observe interference. At a distance $D$, agent **B** tries to determine the particle's path by measuring its field, a process taking time $T_B$. A potential paradox arises if $T_A < D$ and $T_B < D$, as it seems to allow for a violation of complementarity or causality.

**Resolution via Quantum Field Theory:** The paradox is averted by two key QFT effects:
1.  **Vacuum Fluctuations:** These create fundamental noise, preventing B from making an instantaneous, precise measurement. To gain which-path information, the displacement $(\delta x)$ of B's probe caused by A's field must exceed this quantum noise.
* For electromagnetism, A's superposition creates an effective electric dipole $\mathcal{D}_A = q_A d$. The displacement of B's probe is $\delta x \sim \frac{q_B}{m_B}\frac{\mathcal{D}_A}{D^3}T_B^2$. The measurement is only possible if this displacement overcomes the inherent charge localization uncertainty, requiring $\frac{\mathcal{D}_A}{D^3}T_B^2 > 1$. For $T_B < D$, this condition cannot be met.
* For gravity, A's superposition creates a mass quadrupole $\mathcal{Q}_A$. The displacement $\delta x \sim \frac{\mathcal{Q}_A}{D^4}T_B^2$ must be larger than the Planck length $l_P$. This is similarly constrained.

2.  **Quantized Radiation:** If A recombines the superposition non-adiabatically (too quickly), the changing multipole moment of the particle radiates quanta (photons/gravitons). This radiation becomes entangled with A's particle, destroying the coherence required for interference. The number of radiated quanta must be negligible ($\mathcal{N} \ll 1$) for A's experiment to succeed.
* For EM, the number of emitted photons is $\mathcal{N} \sim \left(\frac{\mathcal{D}_A}{T_A}\right)^2$. A must perform the recombination slowly, such that $T_A > \mathcal{D}_A$, to avoid decoherence.
* For gravity, the number of gravitons is $\mathcal{N} \sim \left(\frac{\mathcal{Q}_A}{T_A^2}\right)^2$. This imposes the condition $T_A^2 > \mathcal{Q}_A$.

---

### Decoherence from Black Holes and Horizons 

Introducing a black hole creates a powerful, unavoidable decoherence mechanism, even for an adiabatically maintained superposition.

**The Mechanism:** As a charged or massive particle in superposition is held near a black hole, its static field extends to the event horizon. Even a slow, quasi-static movement of the superposition components causes a permanent change in the field configuration at the horizon—a phenomenon known as the **"memory effect."** According to field equations on the horizon (e.g., Maxwell's equation $\mathcal{D}^{\Omega}E_{\Omega}=-\partial_VE_r$), this change in the radial field ($E_r$) necessarily generates a flux of transverse radiation ($E_\Omega$) into the black hole.

**Emission of Soft Quanta:** This radiated field carries which-path information into the horizon, irretrievably destroying the superposition's coherence. The memory effect corresponds to a divergence in the Fourier transform of the potential on the horizon, $\hat{A}_\Omega(\omega) \sim 1/\omega$ as $\omega \to 0$. The expected number of photons radiated through the horizon is given by:
$$\langle N \rangle_{\mathscr{H}^+} = \frac{1}{\pi \hbar} \int d\Sigma \int_0^{\infty} \omega d\omega |\hat{A}_{\Omega}(\omega, x^\Omega)|^2$$
The $1/\omega$ divergence in $\hat{A}_\Omega$ causes this integral to diverge logarithmically for low frequencies. For a superposition held for a finite time $T$, the integral is effectively cut off at frequencies $\omega \sim 1/T$, leading to a number of radiated quanta that grows **linearly with time**:
* **Electromagnetic Decoherence:** $\langle N \rangle_{\text{EM}} \propto \frac{M^3 q^2 d^2}{b^6} T$
* **Gravitational Decoherence:** $\langle N \rangle_{\text{GR}} \propto \frac{M^5 m^2 d^4}{b^{10}} T$
where $M$ is the black hole mass, $b$ is the distance to the hole, and $d$ is the superposition separation. This implies that any spatial superposition will inevitably decohere.

**Generalization:** This effect is not unique to black holes but occurs for any **Killing horizon**, such as the Rindler horizon experienced by a uniformly accelerating observer.

---

### The Local Description of Decoherence

The decoherence mechanism can be understood from a purely local viewpoint, without reference to a global horizon. The effect arises from the interaction between the superposition's components and the local **vacuum fluctuations** of the quantum field.

**Mathematical Formulation:** The degree of decoherence is determined by the number of entangling photons, which can be calculated by smearing the quantum field operator with the difference in the classical currents of the two superposition paths ($q^\mu = j_1^\mu - j_2^\mu$):
$$\langle N \rangle = \left\langle \Psi_0 \left| \left( \int d^4x \sqrt{-g} \ \mathbf{A}_{\mu}^{in}(x) q^\mu(x) \right)^2 \right| \Psi_0 \right\rangle$$
Using a dipole approximation for the current difference, this expression simplifies to an integral over the two-point correlation function of the electric field fluctuations along the particle's worldline $\mathbf{X}(t)$:
$$\langle N \rangle \approx 4q^2 \int dt \int dt' \ d(t) d(t') \langle \Psi_0 | s^\mu \mathbf{E}^{in}_{\mu}(t, \mathbf{X}(t)) s^\nu \mathbf{E}^{in}_{\nu}(t', \mathbf{X}(t')) | \Psi_0 \rangle$$

**Role of the Vacuum State:** The linear-in-$T$ growth of decoherence is a direct consequence of the thermal nature of the **Unruh vacuum** state near the horizon. This state's two-point function contains a specific low-frequency structure corresponding to thermal noise. The weighting factor for modes originating from the horizon ("white hole" modes) behaves as $G_U^+(\omega) \approx \frac{\kappa}{2\pi\omega}$ for low frequencies, where $\kappa$ is the surface gravity. It is this $1/\omega$ term that, when integrated, produces the decoherence rate proportional to time $T$. Other vacuum states, like the Boulware vacuum, lack this thermal component and lead to a much slower, logarithmic ($\ln T$) decoherence. In essence, the black hole acts as a thermal bath with fluctuating multipole moments, and the interaction of the superposition with these thermal fluctuations drives the decoherence.

<div id="ref-r1" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong>Author A.</strong> Title of paper. Journal, 2024. <a href="https://doi.org/..." target="_blank" rel="noopener">link</a>
  </div>
</div>

<div id="ref-r2" class="refdef" style="display:none">
  <div class="ref-entry">
    <strong>Author B.</strong> Another source. 2023.
  </div>
</div>
