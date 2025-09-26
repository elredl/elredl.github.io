<script>
  // Barebones interactivity only for the contact form
  let email = "";
  let message = "";
  const submit = (e) => {
    e.preventDefault();
    alert("Thanks! I’ll get back to you soon.");
    email = ""; message = "";
  };
</script>

<!--
  Minimal SvelteKit + Tailwind page
  Theme: Quantum × ML (clean, futuristic, no particles)
  File: src/routes/+page.svelte
-->

<div class="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-zinc-100">
  <!-- Top nav -->
  <div class="sticky top-0 z-20 backdrop-blur bg-black/30 border-b border-zinc-800">
    <nav class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#top" class="text-sm tracking-widest uppercase text-zinc-300">Quantum • ML</a>
      <div class="hidden sm:flex items-center gap-4 text-sm">
        <a href="#about" class="hover:text-white text-zinc-300">About</a>
        <a href="#projects" class="hover:text-white text-zinc-300">Projects</a>
        <a href="#research" class="hover:text-white text-zinc-300">Research</a>
        <a href="#contact" class="hover:text-white text-zinc-300">Contact</a>
      </div>
    </nav>
  </div>

  <!-- Hero -->
  <header id="top" class="max-w-5xl mx-auto px-4 pt-16 md:pt-24 pb-10">
    <p class="text-[10px] tracking-[0.35em] uppercase text-zinc-400">Quantum × Machine Learning</p>
    <h1 class="text-4xl md:text-6xl font-semibold mt-3 leading-tight">Leo Rodolico</h1>
    <p class="mt-5 text-zinc-300 max-w-2xl">
      I build quiet, measurable systems at the intersection of <span class="text-white">quantum optimization</span> and <span class="text-white">modern ML</span> — with an emphasis on QUBO/Ising design, annealing vs. variational tradeoffs, and honest evaluation.
    </p>
    <div class="mt-6 flex gap-3">
      <a href="#projects" class="px-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500">
        <span class="block px-4 py-2 rounded-[10px] bg-black text-sm font-medium">View Projects</span>
      </a>
      <a href="#contact" class="px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 text-sm hover:ring-zinc-500">Contact</a>
    </div>

    <!-- Stats row -->
    <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
      <div class="px-4 py-3 rounded-xl bg-zinc-900/70 ring-1 ring-zinc-800">
        <div class="text-xs text-zinc-400 mb-1">Focus</div>
        <div class="text-xl font-semibold">Quantum × ML</div>
      </div>
      <div class="px-4 py-3 rounded-xl bg-zinc-900/70 ring-1 ring-zinc-800">
        <div class="text-xs text-zinc-400 mb-1">Specialty</div>
        <div class="text-xl font-semibold">QUBO & Ising</div>
      </div>
      <div class="px-4 py-3 rounded-xl bg-zinc-900/70 ring-1 ring-zinc-800">
        <div class="text-xs text-zinc-400 mb-1">Tooling</div>
        <div class="text-xl font-semibold">PyTorch, Svelte</div>
      </div>
      <div class="px-4 py-3 rounded-xl bg-zinc-900/70 ring-1 ring-zinc-800">
        <div class="text-xs text-zinc-400 mb-1">Stack</div>
        <div class="text-xl font-semibold">SvelteKit + Tailwind</div>
      </div>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-4">
    <!-- About -->
    <section id="about" class="scroll-mt-28 py-14 md:py-20">
      <div class="flex items-center gap-3 mb-6">
        <div class="h-px w-10 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
      </div>
      <div class="text-sm md:text-base text-zinc-300 leading-relaxed space-y-4">
        <p>
          I design compact algorithms and tools that scale—clean inputs, clear outputs, no magic. My work spans annealing baselines, hybrid pipelines, and UI layers that make results easy to compare.
        </p>
        <p>
          Interests: adiabatic schedules, constraint calibration for QUBO, graph ML, embeddings, and end‑to‑end evaluation methodology.
        </p>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="scroll-mt-28 py-14 md:py-20">
      <div class="flex items-center gap-3 mb-6">
        <div class="h-px w-10 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent"></div>
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-5">
        <!-- Card -->
        <a href="#" class="block group">
          <div class="relative p-[1px] rounded-2xl bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800">
            <div class="rounded-2xl h-full bg-zinc-950/70 ring-1 ring-zinc-800 p-5">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-medium">AnnealBench</h3>
                <svg width="18" height="18" viewBox="0 0 24 24" class="opacity-60 group-hover:opacity-100"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14zM5 5h5V3H3v7h2z"/></svg>
              </div>
              <p class="text-zinc-300 mb-3">Reproducible annealing benchmarks: gap‑aware schedules, pause/etch variants, time‑to‑target, cost‑normalized scores.</p>
              <div class="space-x-2">
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">QUBO</span>
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">Schedules</span>
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">Benchmarks</span>
              </div>
            </div>
          </div>
        </a>

        <!-- Card -->
        <a href="#" class="block group">
          <div class="relative p-[1px] rounded-2xl bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800">
            <div class="rounded-2xl h-full bg-zinc-950/70 ring-1 ring-zinc-800 p-5">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-medium">QUBO Kit</h3>
                <svg width="18" height="18" viewBox="0 0 24 24" class="opacity-60 group-hover:opacity-100"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14zM5 5h5V3H3v7h2z"/></svg>
              </div>
              <p class="text-zinc-300 mb-3">Utilities to map SAT/MaxCut/routing into compact QUBO/Ising forms with principled penalty scaling.</p>
              <div class="space-x-2">
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">Ising</span>
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">Penalty</span>
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">Mappings</span>
              </div>
            </div>
          </div>
        </a>

        <!-- Card -->
        <a href="#" class="block group">
          <div class="relative p-[1px] rounded-2xl bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800">
            <div class="rounded-2xl h-full bg-zinc-950/70 ring-1 ring-zinc-800 p-5">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-medium">Q‑Embed</h3>
                <svg width="18" height="18" viewBox="0 0 24 24" class="opacity-60 group-hover:opacity-100"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14zM5 5h5V3H3v7h2z"/></svg>
              </div>
              <p class="text-zinc-300 mb-3">Hybrid pipeline: classical encoders → variational layer → linear probe. Fast ablations built‑in.</p>
              <div class="space-x-2">
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">Embeddings</span>
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">VQA</span>
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">Hybrid</span>
              </div>
            </div>
          </div>
        </a>

        <!-- Card -->
        <a href="#" class="block group">
          <div class="relative p-[1px] rounded-2xl bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800">
            <div class="rounded-2xl h-full bg-zinc-950/70 ring-1 ring-zinc-800 p-5">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-medium">GraphCuts++</h3>
                <svg width="18" height="18" viewBox="0 0 24 24" class="opacity-60 group-hover:opacity-100"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14zM5 5h5V3H3v7h2z"/></svg>
              </div>
              <p class="text-zinc-300 mb-3">Compare annealing, QAOA, and classical heuristics on curated graph families with tight baselines.</p>
              <div class="space-x-2">
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">MaxCut</span>
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">Heuristics</span>
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">A/B</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>

    <!-- Research -->
    <section id="research" class="scroll-mt-28 py-14 md:py-20">
      <div class="flex items-center gap-3 mb-6">
        <div class="h-px w-10 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">Research & Notes</h2>
      </div>
      <div class="relative pl-6">
        <div class="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-zinc-700 to-fuchsia-500/40"></div>
        <div class="space-y-6">
          <div class="relative">
            <div class="absolute -left-[13px] top-1 w-3 h-3 rounded-full bg-cyan-400/90 shadow-[0_0_25px_2px_rgba(34,211,238,0.45)]"></div>
            <div class="text-xs text-zinc-400">2025</div>
            <div class="text-sm md:text-base text-zinc-200 font-medium">Annealing pauses & spectra</div>
            <div class="text-sm text-zinc-400">Practical gaps, pause/etch strategies, and noise impacts on success probability.</div>
          </div>
          <div class="relative">
            <div class="absolute -left-[13px] top-1 w-3 h-3 rounded-full bg-cyan-400/90 shadow-[0_0_25px_2px_rgba(34,211,238,0.45)]"></div>
            <div class="text-xs text-zinc-400">2024</div>
            <div class="text-sm md:text-base text-zinc-200 font-medium">QUBO design without magic constants</div>
            <div class="text-sm text-zinc-400">Penalty calibration, constraint scaling, and stability across instance sizes.</div>
          </div>
          <div class="relative">
            <div class="absolute -left-[13px] top-1 w-3 h-3 rounded-full bg-cyan-400/90 shadow-[0_0_25px_2px_rgba(34,211,238,0.45)]"></div>
            <div class="text-xs text-zinc-400">2024</div>
            <div class="text-sm md:text-base text-zinc-200 font-medium">Evaluation methodology</div>
            <div class="text-sm text-zinc-400">Solution quality, time‑to‑target, success probability, and cost‑normalized metrics.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="scroll-mt-28 py-14 md:py-20">
      <div class="flex items-center gap-3 mb-6">
        <div class="h-px w-10 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent"></div>
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">Contact</h2>
      </div>
      <form on:submit|preventDefault={submit} class="grid gap-3 max-w-xl">
        <input bind:value={email} required placeholder="Your email" class="px-4 py-2 rounded-xl bg-zinc-950 ring-1 ring-zinc-800 focus:outline-none focus:ring-cyan-500" />
        <textarea bind:value={message} required placeholder="Message" rows="4" class="px-4 py-2 rounded-xl bg-zinc-950 ring-1 ring-zinc-800 focus:outline-none focus:ring-cyan-500"></textarea>
        <button class="justify-self-start px-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500">
          <span class="block px-4 py-2 rounded-[10px] bg-black text-sm font-medium">Send</span>
        </button>
      </form>
    </section>
  </main>

  <!-- Footer -->
  <footer class="max-w-5xl mx-auto px-4 pb-16 text-xs text-zinc-400">
    <div class="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-8"></div>
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <p>© {new Date().getFullYear()} Leo Rodolico. Built with SvelteKit & Tailwind.</p>
      <p>
        <a href="#about" class="hover:text-zinc-200">About</a>
        <span class="mx-2">·</span>
        <a href="#projects" class="hover:text-zinc-200">Projects</a>
        <span class="mx-2">·</span>
        <a href="#contact" class="hover:text-zinc-200">Contact</a>
      </p>
    </div>
  </footer>
</div>
