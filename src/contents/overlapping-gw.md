---
title: "Overlapping Gravitational Wave Transients"
skills: ["Gravitational Wave Analysis"]
---

<h2>Gravity Waves</h2>

On September 14, 2015, in the quiet hours of an otherwise ordinary morning in the United States, two LIGO detectors in Hanford and Livingston registered a signal unlike any seen before. That signal, labeled [**GW150914**](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.061102), was the advent of gravitational wave astronomy. A gravitational wave that traveled across the cosmos at the speed of light for nearly a billion years before reaching Earth provided us with the toolkit to unravel a newer perspective of our universe.

What began with that first whisper has grown into a chorus. Since GW150914, observatories around the world have recorded hundreds more gravitational-wave events, and detections now occur with a rate that was once unimaginable, often multiple times per week. Over the past decade, the LIGO and Virgo detectors have been made markedly more sensitive, and research laboratories worldwide are building and testing further upgrades to push sensitivity even higher.

As detectors grow more sensitive and surveys become deeper and longer, new challenges appear alongside new opportunities. One key challenge is **overlapping signals** [<a class="cite" data-ref="r1">1</a>,<a class="cite" data-ref="r2">2</a>,<a class="cite" data-ref="r3">3</a>,<a class="cite" data-ref="r4">4</a>]: when two (or more) gravitational-wave strains arrive at close times and in similar frequency bands, their signals superpose in the detector output.

<iframe
  src="https://marimo.app/#code/MQAg9BIM4MYE4EsAOAXAUKOBTAjgVwWygFokBPFACwHsA7EAXhACIA+BgZgDoBGAJmYYQAEyxIstUbRgIsURiADaQkKpYBDKCjjVyDBgHZevZgBoVa5gCMEAGytl9fLkYAMZi6ua31tqARQsfSM+ADYTc1A1FgBbdUQY6g8oyziUJFtqFFsEK31uHlcXZOiWWjwYvQZnZ1CSgF0hCDA0NARK6jgUEDiE6laAfQGAcwksOHVA4QGAdwQqBWYinnCAVkF1JCQFXvbqLgBBLYAKOeEqBmYYrGEECrMQdTwUagHhahnaTPVhBkVmSgoGK2Zj1ACUrTQAAFNkguDAsLZbMdKAhRAMYNRRAwACpwPBYCGiABmIAGxzBAC40NF2khOt1dolHvJEjS1HSGSAZvFaAhaMMoOzVJyuiBypUyCzxUhhSBRYzJhksjkrFxyMrupoQBl0LSOmKbPYyHLsCg8HB6EaHKYetRbbrITCtvDEcjUejMdi8QSiVhSeTdVS5ZjMnABkhfFgUIEFABvOXRADkSAS8TIScpICTwFcrgMfAAQnwk+ZSmok1AsJjJOnM9ngABhRsGACcBwMpcTFcCXQQdazObzrYAogYOF3ogBfVrREnirAzAZwGAABXi6hiUFOaIuKfUoyTwfLqlgUYGxPUMBecAUzn4q27qmJCGGs13lAj3SYZ9sWAvV43iAABUICrIUXCuE+IDEvIP4wOel7Xp0IEgK20GaOI17LpMCDUHeLiPie8rSJQcgRuMX4KDwkHgCABZcHwBjQS+b5nAsTCse+5yfqgqH8jAZFQBR4aoCxr4DGRr6AgoXHsZQdGYdWKA4SgeHiYKCAAF5YAoxxyR+tpcVJwyAhC0G0IuEYblu8YzsRllLpGExbooSasRaWBcKxUDaVgSb1LJr6+TpFlWc5m5QG5xJ0CgXAhf5gWcUKDnhTZUVJoEAAecV4FW2UBQoABivhVmFTnpW56hZXIXA+FYiIJYVTBJtctwVEm5XWS5GU5QgMAANZcLc2DXnhtDNdm-KdalFU9W5FD9UNI3KeNk1JtNXURa5SZ9YNXAxPynRcAAbggvlWH+k0+lgW2VUmi37YdtDHWdF1XUlIA3Xd81Jn+oySN5sVNZ9rU3HcMQzSejndZFbn-RIwhcJQ6iSH+f4ClQk00URJ5mha9Aw9tKVqLqXAruuPVcHgSDCJMWDHDDFPpRS5lzhauF0AoAAskFylAm4ZPyb7Etg+ASDAUpMHwrjcwAHHKz3tBUF5iwS0hSyAMumv64wS-+ou4OrksKKsUHRFo8QqWp1wDNQxKwdGBHm2o+OWiAxzQaGnTWX+MZYGWJ7CBzal0IH5ZKzEKuG+LGvh6U2DEnr0gG2rEtkPHFuCzkAqq0b6eZ2oltdAMNv-vbjsoPH5nQrCrpIiiaL-l6QQ3X6Aae9E1oZyG1Bhr70aBPHwcTKHtDx5H0dp3Hcq6vHifJwieex5L8cC5UOci9Pq-8ygVul+05cO-l5jHmo84A+M9N2yd4w+FswsDL5wy0KVxxxFAwmj3htpQLQ4bf3tCIFAMAz7lisJof8oxqAIloNbQ+1F+ChD4KsVs3NkFcG5tBCBVY3jnT3inaieYihQWgvyAAVqtOgsNri9mEuoeMrVNDCR4E-agFoET1lbFwUIrYmJ8D4NzHgqwDCuDQRwVYhcTxMM-qpPC9YihmzNjwHgHAOCuA4DwVscsVhSPLEmdQAweAKMgmEOWfAOBy2ISo2WOieB6NKAYgYJYsxFG5gYcxctuYiPAtzVsBgCwSIccmbAwgoComJCgesOMNEqO5hwVsrgtEiNCKsSR0FHGYmEmpWwKljGuMgq4Pg-jWwcCYqsTRPA-FaKqcEisWSD65OcSY4RrYeCiJWHLLxEjuYWPScRRxSBURGJcSAGiWikkcHlrw7meZQh5j4HU1QKZhnkNsPWXmfB+C9OKR47RvS1FLOzA0qg0ZDHkImlmYgRQDArD4V41wqCAltMORkkJ6h6zcD4HLDpqx5ZyxEWg1YTEjlJlEDAExrZkE-OKUxJJOiJEcFBUgXyJjRE-MsQYUI7jZn3LlsilGVZ6zhCKRYvh2iVF-NKa2UFAl1kFNufwjxTFxx+LlqEAwoKTlkT3gMLSlyQDXMwTo75ULEkSO0RipFbyKwfxYfWQRjFQhaPJasOWpSKn9IGbK5hzSsz8EYsCtVqjZmzOSaC2wFQjq+RQGQPBlsU4KqsWsNV6CRGqMZdzUFOS8nRK4KsDlOjeFoIBcqlYWrtXZh9XqsZmDChoOQR41w8y5leplcs05vKLkKq4BwDp5jUlCJWPLNNkaM08sMfynN+ZYXtPAmgmWbZpVluzNA2B8Drj1hwVArAMCJAdqwDOMhtBKFjWodtaM4xhJWEYXKuR1ATFKKSao9RmiKWhFBYY-JIBlgy3lhUktvDtm6PTdmQxoyigCL+Um2FYQElFNBaE8JCBIl+okTopJaS8yzJlmgrl1Bsl2F9VckhbSAliK2WbaZstFmnqTCcoDMaijKoMGbUIXj3FdIMEI2DLaVkIBGZ8nhKwAnYYPeqgN+K4NDII2s+sqxGLUqxcmngnizbNrLfBgDpcK0DGzQUkR8S1G3LUVs7RybH0fKzAx0pgjQihDzR4tdFjQXgpad04R3irHcx09ejjkaUyoqzM4KF7Tily0sQG1sfCPEEsgRs3NUyPFYpZcqkptLpD0tjcouT-AmIrHsXB7lZy+UCuWIi9VUyZZMXkwkiN2qZHyuk+EdVYR3HWYSQCzRoK52jK2bwY1IaQ1bK8ZyuDlrnoAfmHa24DrOFZjURyrgPzP1dIDd4+LAzMqIe3TReTYQoVpLKWoizKDvWIYvVwRJwL+FpNY9hvhnXiKZV4-xndU3UFzLKd4gJ8zWxLekZmytAqaLxLZdZqp2KsM8CHcRChVDaA0MnXAad-w239oPtcUEChu0jF7e2z7ukADUwCYDDtHWPJ7dCBhWH+HO1hUB2EriwN9pg92x2PYndD9QcPdUI6Rwib7oE52APBw9qHU6Yf-Aq9a6r9qCGE8+p3SN6PIdY8pzj7wVqXo2pq-g1GjO6J-wAZzaCbMTzFwHT9yBf2+1wMB4KkQIdxogBB5LwHdtj7RlnCeHkt8YpwBiAMeIwwKj9rgiIfqKBmfar1-6ToRvYQ6Cyu0VGKBLgAEkACyAAlVcZEXoxFXCdAQSyF7YBTsvY2jhw-6yjwXdNk8jcx2jwwJP8eZ7EXF+WO3BujeX1Hj7BhTBu5cGGDMLgAB1dQ+uHcAHExiF7gDbgZI9Oa0AYG3seSz15C1zin9ODBe+bwzzvMt6uy5D73iXMuSyB8azeNQOI-I2EcP-IkUQtgGCl-L-FAnXkfC2Bh-ydMMOfCDUkn3AO6bc8O+N3AU31w4FQAYLfw39-H-m70dn0ob-8+N8mB9hnRLzsAcDLwr2r1r0Nwb0sibxb2Ii73Gk72VzDnTWH0fnn0liH2zgwO3h7nH2nwHSn33ln3TUwJqyX3UBX0RzXwGA30RG31ALIHAL3zXzql8GP1fjgDtUuivAGkvz-CWT-w-zN2f1fxr3t3fxN1EJQCgG-x13LBfW42LxAB3wr1EECGQjgC4A9zgXGCTh0FoXGAABl8Fjh-gAAJHgUECEO7GKadH7JglgjQ5SY6XQ3sAwpfZ7UwrQcw5gKwmwshew0uLIXwRw40ZwydLQnQvQuATwowuAHw63Sw6w8EBQ0oA3EQJ2fkJQJQ+hW0PImHAo4Il4PeWweoakMtJQhQDQxQVwRoKomKA6fkZWZPPAnYFoqONo-ODWdNJQg6aqVo0fTWdA-vdosALWPopo-KJ+bQKgx7OmXlUWJfPlcYV4F6c6BmU9IuHAsYnorA0YrefY-AltVQRAugZAwBcebY08QgwHYgmfQ+JZH-WkYI9QLgVnJ+V8V+ZEG-CQvPP7WAwAuAcQqA--IEm8Y3JZdnF7BgVncaCnF7KEsXdI147jNUT45+H4+A3Xf4u-AvYE0EyQ8Eq+SEqwaEmyZ7F-eE8dSk6HcklE6CUAXQiHVQrIBSfkF4EAU5KNUI9ZLIzQm8II7jUo3wD4kdZSL4l+XwHEnPPE9-Akm8IkgExUovCklyKkuEiUjHRE-IlEuwkUvk8UiHKU7Ev4sEwE0kzoZU-EgAsk9UzcTUmkzHOkynBkrPVEtQUABjEABvboHEQ+YgAAEUoJyIAGU5j+RoJARjcFBCicd6iuAy5F9l9HstAJgoziIYzgD5RgjYdEzkz3hUzZiMzaBozrY+S4ySi+S6j6gkzD4Uz5iSz5joIy4Ld4zaz6zbZ4gJgTQNJbRqoFAyZ-ArBNRtwfI-IGBjh+BbRQgwQXi1Bqp1RMhrd002ylkYz1AllvYQSdyB5-Z-gqwaw6ZuDQQlkc5FwPwGAcZzz1AGot9mAwyPcAA5OvYwkcMMkAA4DwD04iJczUWU0odc9NbM7cvua0vcyMP2QIf4XsNSdMM89NC8+Sa8-1W8+8y4J81898z8wsH8k8Wwk8f8lcwC6IYCstGM0U2wJZZgYgYgfC7VHchgSCqMA85gVMV3U8+oc8-kS8niVCg7UoeqBg5gVcA4D3H3MMhi0oBc1QJcmYrKYS5EZgAM64EAAAEkUCgHqHUuYEIvLHkujAGDICUuOEfMjPoHUsoF0tkpAB8ECC0DoPGFGHDDLh2GqmOF+3e3l1n1UJl28qlxB3OFAWgk1FmKtgUHsrkBUmuAf0ojcuIHWxQVCpXIGERkivpkctipcoVxB2WAwiyniiMsUvaGODCslwdFSsRlsqXIRkkApAKrL0QGEGOBultAvK0BMqCGYEpAeF8CGXUAYGQ30tKDJjUlMhUh8DIHYWt1srdnoFYh1nNHdmOEVPLlvjgHviQEfixNKlMBrmdDhARAbg9GbixFbnxEJDQHnHJESDAR6F1UASfhyFEFvCYESGpgQHihevGEAtcFtEWWgECCQCGsgkkRABOl8AJFBppTsrvIYLgGYHUoAB00hKBYA4A4wvcpwBhCwwBUbJh0b4AsacaDhdK5QRrhd51nqm43q7RPrvraa-rbR7EgaxBQbWbIbLUggaJ-q4aMLEaUa0bDc4wwznyfcca8aCaqARaxaJaBgybBBogRrN9eUQEabXqdh9gCBGbXrAKhVWblhf5gbQaklbQuboajb+aEakbkagzEQ95uSMR1KlBtKla1Af8axtA+4LcPr0a95BpALFASdOYNbxhf5-5qaoAfq4BbRVbDF1bo7abuLoJyE8o1JiRHB4N+1xgoZVARqvadA-AlqCYsjckE6YAw7Y6HrZEnqk7XqI6RdQ4q6nQ65jr3Qm4MRzrcRLr24yQW947S5K767w65Q1qb475YQdrvi9rFZHrQ6R7Y7+ZI666Y7T5KjSYVyFBx7qANqtrp7pS-BAKQ7m7F7Toobr9iIqbV7abz7ua9FB7E6Y677fR0jNQS7LRIQX0yQBhX5bYBhGAmBmAhhiyBgeq5Q658RaAGqgA"
  sandbox="allow-scripts allow-same-origin allow-downloads allow-popups"
  allow="microphone"
  allowfullscreen
  width="100%"
  height="600px" 
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
