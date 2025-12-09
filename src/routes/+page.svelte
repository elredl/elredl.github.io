<script>
  const projects = [
    {title: "Quantum Annealing Benchmarking", description: "Exploratory website on Quantum Annealing + Classical Annealing Demo.", link: "annealing", tags: ["QUBO", "Quantum", "Benchmarking"]},
  ]
  const research = [
    {title: "Nothing yet", description: "Just you wait", year: "tbd"}
  ]
</script>


<div class="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-zinc-100">
  <!-- Top nav -->
  <div class="sticky top-0 z-20 backdrop-blur bg-black/30 border-b border-zinc-800">
    <nav class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
      <a class="text-sm tracking-widest uppercase text-zinc-300">LEO RODOLICO</a>
      <div class="hidden sm:flex items-center gap-4 text-sm text-zinc-300">
        <a href="#about" class="hover:text-white">About</a>
        <a href="#projects" class="hover:text-white">Projects</a>
        <a href="#research" class="hover:text-white">Research</a>
        <a href="#contact" class="hover:text-white">Contact</a>
      </div>
    </nav>
  </div>

  <!-- Hero -->
  <header id="top" class="max-w-5xl mx-auto px-4 pt-16 md:pt-24 pb-10">
    <p class="text-[10px] tracking-[0.35em] uppercase text-zinc-400">Quantum × Machine Learning × Artificial Intelligence</p>
    <h1 class="text-4xl md:text-6xl font-semibold mt-3 leading-tight">Leo Rodolico</h1>
    <p class="mt-5 text-zinc-300 max-w-2xl">
      Prospective PhD student. I program <span class="text-white font-bold">quantum</span> computers.
    </p>
    <div class="mt-6 flex gap-3">
      <a href="#projects" class="px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 text-sm hover:ring-zinc-500">LinkedIn</a>
      <a href="#contact" class="px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 text-sm hover:ring-zinc-500">Resume</a>
      <a href="#contact" class="px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 text-sm hover:ring-zinc-500">CV</a>
    </div>

    <!-- Stats row -->
    <!-- <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
      <div class="px-4 py-3 rounded-xl bg-zinc-900/70 ring-1 ring-zinc-800">
        <div class="text-xs text-zinc-400 mb-1">Focus</div>
        <div class="text-xl font-semibold">Nothing</div>
      </div>
      <div class="px-4 py-3 rounded-xl bg-zinc-900/70 ring-1 ring-zinc-800">
        <div class="text-xs text-zinc-400 mb-1">Specialty</div>
        <div class="text-xl font-semibold">Yet</div>
      </div>
      <div class="px-4 py-3 rounded-xl bg-zinc-900/70 ring-1 ring-zinc-800">
        <div class="text-xs text-zinc-400 mb-1">Tooling</div>
        <div class="text-xl font-semibold">To show</div>
      </div>
      <div class="px-4 py-3 rounded-xl bg-zinc-900/70 ring-1 ring-zinc-800">
        <div class="text-xs text-zinc-400 mb-1">Stack</div>
        <div class="text-xl font-semibold">Im young like that</div>
      </div>
    </div> -->
  </header>

  <main class="max-w-5xl mx-auto px-4">
    <!-- Projects -->
    <section id="projects" class="scroll-mt-28 py-14 md:py-20">
      <div class="flex items-center gap-3 mb-6">
        <div class="h-px w-10 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent"></div>
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-5">
        <!-- Card -->
         {#each projects as pr}
        <a href="{pr.link}" class="block group">
          <div class="relative p-[1px] rounded-2xl bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800">
            <div class="rounded-2xl h-full bg-zinc-950/70 ring-1 ring-zinc-800 p-5">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-medium">{pr.title}</h3>
                <svg width="18" height="18" viewBox="0 0 24 24" class="opacity-60 group-hover:opacity-100"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14zM5 5h5V3H3v7h2z"/></svg>
              </div>
              <p class="text-zinc-300 mb-3">{pr.description}</p>
              <div class="space-x-2">
                {#each pr.tags as tag}
                <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">{tag}</span>
                {/each}
              </div>
            </div>
          </div>
        </a>
        {/each}
      </div>
    </section>

    <!-- Research -->
    <section id="research" class="scroll-mt-28 py-14 md:py-20">
      <div class="flex items-center gap-3 mb-6">
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">Research & Notes</h2>
      </div>
      <div class="relative pl-6">
        <div class="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-zinc-700 to-fuchsia-500/40"></div>
        <div class="space-y-6">
          {#each research as res}
            <div class="relative">
              <div class="absolute -left-[13px] top-1 w-3 h-3 rounded-full bg-cyan-400/90 shadow-[0_0_25px_2px_rgba(34,211,238,0.45)]"></div>
              <div class="text-xs text-zinc-400">{res.year}</div>
              <div class="text-sm md:text-base text-zinc-200 font-medium">{res.title}</div>
              <div class="text-sm text-zinc-400">{res.description}</div>
            </div>
          {/each}
        </div>
      </div>
    </section>
    <section id="contact" class="scroll-mt-28 py-14 md:py20">
      
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
