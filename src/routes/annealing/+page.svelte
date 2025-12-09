<!-- QuantumAnnealing.svelte -->

<script lang="ts">
  import { Markdown } from 'svelte-exmarkdown';
  import ClassicalAnnealingDemo from "$lib/ClassicalAnnealingDemo.svelte";

  type Section = {
    id: number;
    question: string;
    answer: string;
  };

  const bibliography = `
<ol>
<hr class="my-4 border border-amber-400/40" />
  <li>
    The Quantum Insider. (2025). 
    <i>D-Wave Deep Dive: A Look at the Quantum Advantage Findings — And the Questions That Remain.</i>
    Retrieved from 
    <a href="https://thequantuminsider.com/2025/03/13/d-wave-deep-dive-a-look-at-the-quantum-advantage-findings-and-the-questions-that-remain/" target="_blank">
      https://thequantuminsider.com/2025/03/13/d-wave-deep-dive-a-look-at-the-quantum-advantage-findings-and-the-questions-that-remain/
    </a>
  </li>
  <hr class="my-4 border border-amber-400/40" />

  <li>
    Albash, T., et al. (2024). 
    <i>Benchmarking Quantum Annealers Using Transverse-Field Ising Model Dynamics.</i> arXiv:2403.00910. 
    Retrieved from 
    <a href="https://arxiv.org/html/2403.00910v1" target="_blank">
      https://arxiv.org/html/2403.00910v1
    </a>
  </li>
  <hr class="my-4 border border-amber-400/40" />

  <li>
    King, A. D., et al. (2025). 
    <i>Signatures of Coherent Quantum Annealing Across 2000 Qubits.</i> Science.  
    DOI: 
    <a href="https://www.science.org/doi/10.1126/science.ado6285" target="_blank">
      https://www.science.org/doi/10.1126/science.ado6285
    </a>
  </li>
  <hr class="my-4 border border-amber-400/40" />

  <li>
    Wikipedia Contributors. (2024). 
    <i>Transverse-field Ising model.</i> Wikipedia, The Free Encyclopedia.  
    Retrieved from 
    <a href="https://en.wikipedia.org/wiki/Transverse-field_Ising_model" target="_blank">
      https://en.wikipedia.org/wiki/Transverse-field_Ising_model
    </a>
  </li>
  <hr class="my-4 border border-amber-400/40" />

  <li>
    ChatGPT (OpenAI). (2025). 
    <i>Explanations, synthesis, and analysis of quantum annealing, TFIM dynamics, benchmarking debates, and hardware limitations.</i>
  </li>
  <hr class="my-4 border border-amber-400/40" />
</ol>

  `

  const sections: Section[] = [
    {
      id: 1,
      question: "What is the difference between classical and quantum annealing approaches?",
      answer: `

<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">
  The Problem
</h3>

<p>
  We want to <strong>simulate the continuous-time quantum dynamics</strong> of the
  <strong>transverse-field Ising model (TFIM)</strong>.
</p>

<p class="mt-2">
  TFIM describes:
</p>
<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>spins on a lattice</li>
  <li>Z-couplings that try to align spins</li>
  <li>a transverse X-field that tries to flip them</li>
</ul>

<p class="mt-3">
  Simulating TFIM dynamics means computing how the wavefunction evolves under a
  time-dependent Hamiltonian. This is difficult because:
</p>
<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>the Hilbert space grows as <span class="font-mono">2<sup>N</sup></span></li>
  <li>quenches and anneals create strong correlations and entanglement</li>
  <li>classical approximations (tensor networks, Monte Carlo) break down at scale</li>
</ul> <br>

<img src="/images/what-is-this.jpg" alt="funny" width=1000>


<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">
  Why This Problem Matters
</h3>

<p>
  We care about TFIM dynamics because:
</p>
<ul class="list-disc ml-6 mt-1 space-y-1">
  <li><strong>it is intrinsically hard</strong> for classical computers</li>
  <li><strong>quantum annealers natively implement TFIM</strong>, making it a natural test of quantum advantage</li>
  <li>
    TFIM is a <strong>canonical model of quantum magnetism</strong>, used to study:
    <ul class="list-disc ml-6 mt-1 space-y-1">
      <li>quantum phase transitions</li>
      <li>strongly correlated quantum systems</li>
      <li>nonequilibrium dynamics</li>
    </ul>
  </li>
</ul>

<p class="mt-3">
  Real-world relevance includes:
</p>
<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>magnetic storage technologies</li>
  <li>low-energy device design</li>
  <li>solid-state quantum sensors and transducers</li>
</ul>

<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">
  Classical Annealing
</h3>

<p>
  Classical annealing treats a problem as an <strong>energy landscape</strong>:
</p>
<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>start at high temperature</li>
  <li>explore many configurations</li>
  <li>slowly cool to settle into low-energy states</li>
</ul>

<p class="mt-3">
  Common uses:
</p>
<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>VLSI layout</li>
  <li>scheduling and routing</li>
  <li>design optimization</li>
  <li>machine learning hyperparameter tuning</li>
</ul>

<p class="mt-3">
  Limitations:
</p>
<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>it must <strong>climb over energy barriers</strong></li>
  <li>runtime grows quickly when barriers are <strong>tall or wide</strong></li>
  <li>TFIM often has large barriers (ferromagnetic, disordered, or frustrated cases)</li>
  <li>barriers arise when <strong>clusters of spins must flip together</strong></li>
</ul>

<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">
  Quantum Annealing
</h3>

<p>
  Quantum annealing replaces thermal hopping with <strong>quantum tunneling</strong>:
</p>
<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>encode the problem into a Hamiltonian</li>
  <li>initialize in the ground state of a simple Hamiltonian</li>
  <li>slowly morph into the problem Hamiltonian</li>
  <li>by the <strong>adiabatic theorem</strong>, slow evolution stays near the ground state</li>
</ul>

<p class="mt-3">
  Key idea:
  <br />
  <strong>Tunneling allows the system to pass through barriers that classical annealing must climb.</strong>
</p>

<p class="mt-3">
  For TFIM dynamics:
</p>
<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>quantum annealers are <strong>native TFIM simulators</strong></li>
  <li>qubits act as physical spins</li>
  <li>couplers implement Ising <span class="font-mono">Z<sub>i</sub>Z<sub>j</sub></span> interactions</li>
  <li>a global transverse field provides the X-term</li>
  <li>the annealing schedule implements <strong>continuous-time TFIM evolution</strong></li>
</ul> <br> 

<img src="/images/Quant-annl.jpg" alt="Quantum Annealing" width=1000 > 

<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">
  Benchmarking Perspective
</h3>

<p class="italic mb-2">
  The core question becomes:
</p>
<p class="mb-3 font-semibold">
  How well can classical algorithms simulate TFIM dynamics compared to a machine that physically implements those dynamics?
</p>

<p>
  Because:
</p>
<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>classical computers must <em>simulate</em> an exponentially large Hilbert space</li>
  <li>a quantum annealer <em>is</em> that Hilbert space</li>
  <li>benchmarking TFIM isolates the device’s true quantum behavior, without embedding overhead</li>
</ul>

<hr class="my-4 border border-amber-400/40" />
`


    },
    {
      id: 2,
      question: "What are current quantum annealing practices?",
      answer:`

<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">
  Why This Problem Is Hard
</h3>

<p>
  TFIM dynamics are <strong>intrinsically hard</strong> because the difficulty comes from the model’s
  <em>fundamental quantum nature</em>, not from a lack of classical computational resources.
</p>

<p class="mt-2">Key reason:</p>

<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>
    The state of an <span class="font-mono">N</span>-spin quantum system lives in a
    <span class="font-mono">2<sup>N</sup></span>-dimensional vector space.
  </li>
  <li>A classical computer must store <strong>all <span class="font-mono">2<sup>N</sup></span> amplitudes</strong> of the wavefunction.</li>
</ul>

<p class="mt-3">Scale of the problem:</p>
<ul class="list-disc ml-6 mt-1 space-y-1">
  <li><span class="font-mono">N = 30</span> → ~1 billion amplitudes</li>
  <li><span class="font-mono">N = 50</span> → ~1 quadrillion amplitudes</li>
  <li><span class="font-mono">N = 100</span> → more numbers than atoms on Earth</li>
</ul>

<p class="mt-3">
  Classical simulation avoids this exponential explosion <strong>only when entanglement remains small</strong>.
  But TFIM dynamics generate <strong>rapid entanglement growth</strong>, breaking methods like:
</p>

<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>MPS (Matrix Product States)</li>
  <li>PEPS</li>
  <li>TTN</li>
  <li>Variational Monte Carlo</li>
</ul>

<p class="mt-2">All eventually fail as system size or evolution time increases.</p>

<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">
  D-Wave’s Approach
</h3>

<p>
  <strong>D-Wave</strong>, founded in 1999 in Burnaby, BC, builds
  <strong>quantum annealers</strong>, not universal gate-model quantum computers.
</p>

<p class="mt-2">
  They achieved the first commercial sale of a quantum computer in 2010 (Lockheed Martin).
</p>

<p class="mt-3 font-semibold">
  Their core idea:
</p>

<p class="italic mb-3">
  <strong>Don’t simulate the TFIM.  
  Physically <em>be</em> the TFIM.</strong>
</p>

<p>How the hardware works:</p>

<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>Each <strong>superconducting flux qubit</strong> is a physical two-level quantum system (a “spin”).</li>
  <li><strong>Couplers</strong> implement the Ising interaction <span class="font-mono">Z<sub>i</sub>Z<sub>j</sub></span>.</li>
  <li>A <strong>global transverse field</strong> implements the <span class="font-mono">X</span>-term.</li>
  <li>The <strong>annealing schedule</strong> controls how the Hamiltonian evolves in time.</li>
</ul>

<p class="mt-3">
  Because the hardware obeys the TFIM Hamiltonian, it evolves under the Schrödinger equation
  <strong>automatically</strong> without simulating the wavefunction.
</p>

<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">
  How D-Wave Solves TFIM Dynamics
</h3>

<p>
  The device performs <strong>analog quantum evolution</strong>, not digital simulation.
</p>

<p class="mt-2">Workflow:</p>

<ol class="list-decimal ml-6 mt-1 space-y-1">
  <li>
    <strong>Program the Ising couplings</strong>  
    <br />
    Set <span class="font-mono">J<sub>ij</sub></span> and local fields <span class="font-mono">h<sub>i</sub></span>.
  </li>

  <li>
    <strong>Initialize the qubits</strong>  
    <br />
    Begin in the ground state of a strong transverse field (easy to prepare).
  </li>

  <li>
    <strong>Time-evolve under TFIM</strong>  
    <br />
    The system naturally evolves according to the TFIM Hamiltonian: no simulation.
  </li>

  <li>
    <strong>Measure the final state</strong>  
    <br />
    Read out all spins at the end of the anneal.
  </li>
</ol>

<p class="mt-3">
  This is <strong>continuous-time quantum dynamics happening physically on the chip</strong>,
  bypassing the exponential overhead faced by classical algorithms.
</p> <br>

<img src="/images/dwave-machine.webp" alt=D-Wave>

<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">
  What You Can Run on D-Wave Today
</h3>

<p>
  D-Wave provides quite a few demos to show what their machines can do, although it does seem like they are more
  focused on a hybrid classical-quantum approach as opposed to going purely quantum.
</p>

<p class="mt-2">Relevant Demos:</p>

<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>Tour Planning</li>
  <li>Reverse Annealing</li>
  <li>RNA Folding</li>
  <li>Portfolio Optimization</li>
  <li>Circuit Equivalence</li>
  <li>Frequency Selection</li>
</ul>

<p class="mt-2">
  These were run on real hardware (Advantage, Advantage2 prototype).
</p> <br>

<img src="/images/dwave-demo.png" alt="D-Wave Demo" width=1000>
<img src="/images/dwave-demo-2.png" alt="D-Wave Demo 2" width=1000>

<hr class="my-4 border border-amber-400/40" />
`
    },
    {
      id: 3,
      question: "What approaches should we take to benchmark these systems?",
      answer:`
<p>
  Now that we have some precursory knowledge on the subject, we can move on to the benchmarking aspect.
  If the hardware is itself a physical implementation of the transverse-field Ising model (TFIM),
  then <strong> how does benchmarking it against TFIM prove anything </strong>? 
</p>

<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">The Benchmarking Problem</h3>

<p>
  A story comes to mind when thinking about this problem.
  The TOP500 list ranks the “fastest supercomputers” almost entirely using the
  <strong>Linpack</strong> benchmark, which measures how quickly a machine can solve a large dense
  linear system. During the 2000s and 2010s, several national systems were engineered specifically
  to excel at Linpack.
</p>

<p class="mt-2">
  These machines performed exceptionally on the benchmark but poorly on the workloads
  supercomputers are actually used for: climate modeling, astrophysics, chemistry, and fluid dynamics.
</p>

<p class="mt-3 italic font-semibold text-amber-100">
  Excelling at a benchmark does not necessarily indicate broad computational performance.
</p>

<p class="mt-3">
  A similar concern applies to quantum annealers. Since the hardware is effectively a physical TFIM,
  a TFIM-based benchmark risks saying little more than:
</p>

<p class="mt-2 italic">
  “A TFIM-like device performs well on TFIM-like tasks.”
</p>

<p class="mt-2">
  This is not very informative. It does not automatically imply:
</p>

<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>an advantage on general optimization problems, nor</li>
  <li>consistent superiority over classical methods even on TFIM itself.</li>
</ul> <br>

<img src="/images/top-500.png" alt="D-Wave Benchmarking" width=1000>

<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">Physical TFIM vs Ideal TFIM</h3>

<p>
  The key complication is that <strong>a physical TFIM is not the same as an ideal, mathematical TFIM.</strong>
</p>

<p class="mt-2">The ideal TFIM assumes:</p>

<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>exact couplings</li>
  <li>noiseless evolution</li>
  <li>stable, time-independent calibration</li>
  <li>a precisely defined Hamiltonian</li>
</ul>

<p class="mt-3">
  Real hardware is an analog quantum system subject to:
</p>

<ul class="list-disc ml-6 mt-1 space-y-1">
  <li>noise and decoherence</li>
  <li>parameter drift</li>
  <li>crosstalk between qubits</li>
  <li>fabrication variations</li>
  <li>temperature and bias fluctuations over time</li>
</ul>

<p class="mt-3">
  As a result, the effective Hamiltonian realized by the device can deviate noticeably from the
  intended target Hamiltonian. Two identical experiments run hours apart may not produce identical
  results, making it hard to tell whether deviations from classical predictions reflect genuine quantum
  behavior or simply hardware imperfections.
</p> <br>

<img src="/images/d-wave-benchmarking-2.png" alt="D-Wave Benchmarking" width=1000>

<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">Where Benchmarking Research Is Moving</h3>

<p class="mt-3">
  Different choices produce different conclusions. Classical algorithms keep improving, so the boundary
  between “quantum advantage” and “classical catch-up” is constantly shifting.
</p> <br>

<p>
  Current research trends reflect an effort to design more meaningful and interpretable benchmarks.
  These include:
</p>

<ul class="list-disc ml-6 mt-1 space-y-2">
  <li>
    <strong>Focusing on native TFIM dynamics.</strong><br/>
    Nonequilibrium TFIM evolution (such as quenches or continuous-time dynamics) creates entanglement
    classical methods struggle with, but quantum hardware handles naturally.
  </li>

  <li>
    <strong>Emphasizing scaling behavior.</strong><br/>
    Rather than isolated success cases, benchmarks analyze how performance changes with system size.
  </li>

  <li>
    <strong>Using noise-aware, device-accurate models.</strong><br/>
    Comparisons are increasingly made against simulations of the <em>actual</em> Hamiltonian realized by the device.
  </li>

  <li>
    <strong>Incorporating hybrid quantum–classical workflows.</strong><br/>
    Evaluations measure whether adding a quantum annealer improves full pipeline performance.
  </li>

  <li>
    <strong>Measuring robustness and reproducibility.</strong><br/>
    Benchmarks now track stability over time, sensitivity to calibration drift, and consistency across runs.
  </li>
</ul> <br>

<img src="/images/d-wave-benchmarking-1.jpg" alt="D-Wave Benchmarking" width=1000>


<hr class="my-4 border border-amber-400/40" />

<h3 class="text-lg font-semibold text-amber-200 mb-2">My Opinion</h3>

<p>
  Based on my very unstructured and not too-indepth research on the subject, I (and pretty much everyone else) believe 
  that the current methods of benchmarking quantum annealers are still developing. Most of the papers I skimmed 
  through were focused on TFIM, which I believe shows how early it is for this technology. We aren't even sure 
  if the computer can interpret its own hardware that well. Once we get past that hurdle, we can focus on more specific
  and useful problems.
</p>

<hr class="my-4 border border-amber-400/40" />
        `
    }
  ];
</script>

<div class="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
  <div class="mx-auto max-w-4xl px-4 py-10 space-y-10">
    <header class="text-center space-y-3">
      <h1 class="text-3xl md:text-4xl font-semibold tracking-tight text-amber-300">
        Benchmarking Quantum Annealing
      </h1>
      <p class="text-sm md:text-base text-neutral-400">
        By Leo Rodolico
      </p>
    </header>

    <main class="space-y-10">
      {#each sections as section}
        <section
          id={"section-" + section.id}
          class="rounded-3xl bg-neutral-900/80 border border-amber-400/40 shadow-xl shadow-black/40 p-6 md:p-8 space-y-6"
        >
          <!-- Tag -->
          <div
            class="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            Question {section.id}
          </div>

          <!-- Question -->
          <h2 class="text-2xl font-semibold text-amber-100">
            {section.question}
          </h2>

          <!-- Answer -->
          <div class="space-y-3">
            <p
              class="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500/80"
            >
              Answer
            </p>
            <div class="prose prose-invert max-w-none text-neutral-200 break-words overflow-hidden">
              {@html section.answer}
            </div>
          </div>

          <!-- Visuals / Interactive -->
          {#if section.id === 1}
          <div class="space-y-4">
            <p  
              class="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500/80"
            >
              Classical Annealing Demo
            </p>

            <div
              class="rounded-xl border border-amber-300/40 bg-neutral-950/70 p-4 md:p-5"
            >
                <ClassicalAnnealingDemo />
            </div>
          </div>
          {/if} 
        </section>
      {/each}
        <section
          id={"bibliography"}
          class="rounded-3xl bg-neutral-900/80 border border-amber-400/40 shadow-xl shadow-black/40 p-6 md:p-8 space-y-6"
        >

          <!-- Question -->
          <h2 class="text-2xl font-semibold text-amber-100">
            Bibliography
          </h2>

          <!-- Answer -->
          <div class="space-y-3">
            <div class="prose prose-invert max-w-none text-neutral-200 break-words overflow-hidden">
              {@html bibliography}
            </div>
          </div>
        </section>
    </main>
    

    <footer class="pt-4 text-center text-xs text-neutral-500">
      © {new Date().getFullYear()} Leonardo Rodolico · Presentation
    </footer>
  </div>
</div>


