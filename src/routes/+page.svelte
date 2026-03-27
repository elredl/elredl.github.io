<script>
  import { onMount } from 'svelte';

  let stars = [];
  onMount(() => {
    stars = Array.from({ length: 65 }, () => ({
      x: Math.random() * 1000,
      y: Math.random() * 600,
      r: Math.random() * 1.8 + 0.7,
      rot: Math.random() * 45,
      op: Math.random() * 0.35 + 0.08,
      dur: Math.random() * 5 + 3,
      del: -(Math.random() * 8),
    }));
  });

  const email = "leoo@colostate.edu";
  const location = "Fort Collins, CO";
  const availability = "PhD student at Colorado State University";

  const stats = [
    { label: "Focus", value: "Quantum algorithms" },
    { label: "Applied", value: "Quantum compilation" },
    { label: "Current", value: "Error correction" },
    { label: "Lab", value: "Qupacabras Lab" }
  ];

  const focusAreas = [
    "Quantum algorithms and circuit design",
    "Quantum error correction and noise mitigation",
    "Quantum compilation and hardware-aware optimization",
    "Variational methods (VQE, QAOA) and quantum simulation"
  ];

  const toolStack = ["SvelteKit", "Python", "Qiskit", "Cirq", "PyTorch", "TensorFlow"];

  const quickLinks = [
    { label: "Email", href: "#contact" },
    { label: "Latest work", href: "#projects" },
    { label: "Notes", href: "#research" }
  ];

  const projects = [
    {
      title: "Exploration into Quantum Benchmarking",
      description: "Interactive benchmark explorer for comparing classical and quantum annealers.",
      link: "annealing",
      tags: ["Benchmarking", "Quantum", "Visualization"],
      status: "Live",
      year: "2024"
    }
  ];

  const research = [
    {
      title: "Coming soon",
      description: "Research notes will live here as projects mature.",
      year: "2026",
      link: "#contact"
    }
  ];

  let activeTag = "All";
  let copied = false;

  const tags = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.tags)))
  ];

  const copyEmail = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      if (typeof window !== "undefined") {
        window.location.href = `mailto:${email}`;
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (error) {
      if (typeof window !== "undefined") {
        window.location.href = `mailto:${email}`;
      }
    }
  };

  $: filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));
</script>

<!-- Star field (outside wrapper so fixed positioning is never broken by ancestor transforms) -->
<svg class="star-field" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
    <path id="sparkle2" d="M0,-1 L0.18,-0.18 L1,0 L0.18,0.18 L0,1 L-0.18,0.18 L-1,0 L-0.18,-0.18 Z" />
  </defs>
  {#each stars as s}
    <use
      href="#sparkle2"
      transform="translate({s.x},{s.y}) rotate({s.rot}) scale({s.r})"
      fill="white"
      class="star"
      style="--op:{s.op}; --dur:{s.dur}s; --del:{s.del}s"
    />
  {/each}
</svg>

<div class="relative min-h-screen text-zinc-100">
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute -top-20 right-[10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
    <div class="absolute top-64 -left-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
    <div class="absolute bottom-[-10%] right-[-5%] h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"></div>
  </div>

  <!-- Top nav -->
  <div class="sticky top-0 z-20 backdrop-blur bg-black/40 border-b border-zinc-800">
    <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#top" class="text-xs tracking-[0.35em] uppercase text-zinc-300">LEO RODOLICO</a>
      <div class="hidden md:flex items-center gap-6 text-sm text-zinc-300">
        <a href="#about" class="hover:text-white">About</a>
        <a href="#projects" class="hover:text-white">Projects</a>
        <a href="#research" class="hover:text-white">Research</a>
        <a href="#contact" class="hover:text-white">Contact</a>
      </div>
    </nav>
  </div>

  <!-- Hero -->
  <header id="top" class="max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-12 relative">
    <div class="grid lg:grid-cols-[1.3fr,0.7fr] gap-10 items-start">
      <div>
        <p class="text-[10px] tracking-[0.35em] uppercase text-zinc-400">Quantum × Machine Learning × Artificial Intelligence</p>
        <h1 class="text-4xl md:text-6xl font-semibold mt-3 leading-tight">
          Leo Rodolico
        </h1>
        <p class="mt-5 text-zinc-300 max-w-2xl text-lg">
          PhD student in Computer Science at Colorado State University specializing in quantum algorithms, quantum error correction, and quantum compilation.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="#projects" class="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-100 ring-1 ring-cyan-500/40 text-sm hover:ring-cyan-300">Explore projects</a>
          <a href="#contact" class="px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 text-sm hover:ring-zinc-500">Get in touch</a>
            <a
              href="/resume-leo-rodolico.pdf"
              download
              class="px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 text-sm hover:ring-zinc-500"
            >
            Download resume
          </a>
          <button
            type="button"
            on:click={copyEmail}
            class="px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 text-sm hover:ring-zinc-500"
          >
            {copied ? "Email copied" : "Copy email"}
          </button>
        </div>

        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {#each stats as stat}
            <div class="px-4 py-3 rounded-xl bg-zinc-900/70 ring-1 ring-zinc-800">
              <div class="text-xs text-zinc-400 mb-1 uppercase tracking-widest">{stat.label}</div>
              <div class="text-sm md:text-base font-medium text-zinc-100">{stat.value}</div>
            </div>
          {/each}
        </div>
      </div>

      <div class="space-y-4">
        <div class="rounded-2xl bg-gradient-to-br from-zinc-900/60 via-zinc-900/40 to-zinc-950/80 ring-1 ring-zinc-800 p-5">
          <div class="text-xs uppercase tracking-[0.3em] text-zinc-400">Availability</div>
          <div class="mt-2 text-lg font-medium text-zinc-100">{availability}</div>
          <div class="mt-4 text-xs text-zinc-400">Based in {location}. Open to remote collaborations.</div>
        </div>
        <div class="rounded-2xl bg-zinc-900/70 ring-1 ring-zinc-800 p-5">
          <div class="text-xs uppercase tracking-[0.3em] text-zinc-400">Quick links</div>
          <div class="mt-3 flex flex-wrap gap-2">
            {#each quickLinks as link}
              <a href={link.href} class="px-3 py-1.5 rounded-full bg-zinc-950/70 ring-1 ring-zinc-800 text-xs hover:ring-zinc-500">
                {link.label}
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4">
    <!-- About -->
    <section id="about" class="scroll-mt-28 py-14 md:py-20">
      <div class="flex items-center gap-3 mb-6">
        <div class="h-px w-10 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-4 text-zinc-300 text-base leading-relaxed">
          <p>
            I research quantum algorithms, error correction, and compilation at the Qupacabras Lab, CSU. My work spans
            designing and running experiments on physical quantum hardware to advancing the state of the art in quantum computing.
          </p>
          <p>
            I enjoy collaborating on problems at the intersection of quantum computing and machine learning. If you want to
            explore quantum algorithm design, error correction workflows, or variational methods like VQE and QAOA, I would love to help.
          </p>
          <div class="flex flex-wrap gap-2">
            {#each toolStack as tool}
              <span class="px-3 py-1.5 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs text-zinc-200">{tool}</span>
            {/each}
          </div>
        </div>
        <div class="space-y-4">
          <div class="rounded-2xl bg-zinc-900/70 ring-1 ring-zinc-800 p-5">
            <div class="text-xs uppercase tracking-[0.3em] text-zinc-400">Focus areas</div>
            <ul class="mt-4 space-y-2 text-sm text-zinc-200">
              {#each focusAreas as area}
                <li class="flex items-start gap-2">
                  <span class="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span>
                  <span>{area}</span>
                </li>
              {/each}
            </ul>
          </div>
          <div class="rounded-2xl bg-gradient-to-r from-zinc-900/80 via-zinc-900/40 to-zinc-950 ring-1 ring-zinc-800 p-5">
            <div class="text-xs uppercase tracking-[0.3em] text-zinc-400">Now building</div>
            <p class="mt-3 text-sm text-zinc-300">
              Researching quantum error correction and compilation at the Qupacabras Lab, and co-organizing the first CSU quantum computing hackathon.
            </p>
            <a href="/progress" class="mt-4 inline-flex items-center text-xs uppercase tracking-widest text-cyan-300 hover:text-cyan-200">
              View progress →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="scroll-mt-28 py-14 md:py-20">
      <div class="flex items-center gap-3 mb-4">
        <div class="h-px w-10 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent"></div>
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
      </div>
      <div class="flex flex-wrap gap-2 mb-6">
        {#each tags as tag}
          <button
            type="button"
            aria-pressed={activeTag === tag}
            class={`px-3 py-1.5 rounded-full text-xs ring-1 transition ${
              activeTag === tag
                ? "bg-cyan-500/20 text-cyan-100 ring-cyan-500/50"
                : "bg-zinc-900/70 text-zinc-300 ring-zinc-800 hover:ring-zinc-500"
            }`}
            on:click={() => (activeTag = tag)}
          >
            {tag}
          </button>
        {/each}
      </div>

      <div class="grid md:grid-cols-2 gap-5">
        {#each filteredProjects as project}
          <a href={project.link} class="block group">
            <div class="relative p-[1px] rounded-2xl bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800">
              <div class="rounded-2xl h-full bg-zinc-950/70 ring-1 ring-zinc-800 p-5">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-medium">{project.title}</h3>
                  <svg width="18" height="18" viewBox="0 0 24 24" class="opacity-60 group-hover:opacity-100">
                    <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14zM5 5h5V3H3v7h2z" />
                  </svg>
                </div>
                <p class="text-zinc-300 mb-3">{project.description}</p>
                <div class="flex flex-wrap items-center gap-2 mb-4">
                  <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs text-zinc-200">{project.status}</span>
                  <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs text-zinc-200">{project.year}</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  {#each project.tags as tag}
                    <span class="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs">{tag}</span>
                  {/each}
                </div>
              </div>
            </div>
          </a>
        {/each}
      </div>
      {#if filteredProjects.length === 0}
        <div class="mt-6 text-sm text-zinc-400">No projects tagged with "{activeTag}" yet.</div>
      {/if}
    </section>

    <!-- Research -->
    <section id="research" class="scroll-mt-28 py-14 md:py-20">
      <div class="flex items-center gap-3 mb-6">
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">Research & Notes</h2>
      </div>
      <div class="grid lg:grid-cols-[1.1fr,0.9fr] gap-8">
        <div class="relative pl-6">
          <div class="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-zinc-700 to-fuchsia-500/40"></div>
          <div class="space-y-6">
            {#each research as item}
              <a href={item.link} class="relative block group">
                <div class="absolute -left-[13px] top-1 w-3 h-3 rounded-full bg-cyan-400/90 shadow-[0_0_25px_2px_rgba(34,211,238,0.45)]"></div>
                <div class="text-xs text-zinc-400">{item.year}</div>
                <div class="text-sm md:text-base text-zinc-200 font-medium group-hover:text-white">{item.title}</div>
                <div class="text-sm text-zinc-400">{item.description}</div>
              </a>
            {/each}
          </div>
        </div>
        <div class="space-y-4">
          <div class="rounded-2xl bg-zinc-900/70 ring-1 ring-zinc-800 p-5">
            <div class="text-xs uppercase tracking-[0.3em] text-zinc-400">Lab log</div>
            <div class="mt-3 text-sm text-zinc-300">
              Weekly notes covering datasets, solver configs, and quick experiments. Ask for access if you want to collaborate.
            </div>
            <a href="/request-access" class="mt-4 inline-flex items-center text-xs uppercase tracking-widest text-cyan-300 hover:text-cyan-200">
              Request access →
            </a>
          </div>
          <div class="rounded-2xl bg-gradient-to-br from-zinc-900/60 via-zinc-900/30 to-zinc-950 ring-1 ring-zinc-800 p-5">
            <div class="text-xs uppercase tracking-[0.3em] text-zinc-400">Speaking</div>
            <div class="mt-3 text-sm text-zinc-300">Available for workshops on sensing workflows, simulation methods, and QEC basics.</div>
            <div class="mt-4 text-xs text-zinc-400">Topics: quantum sensing, real-system models, error correction.</div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="scroll-mt-28 py-14 md:py-20">
      <div class="flex items-center gap-3 mb-6">
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">Contact</h2>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="rounded-2xl bg-zinc-900/70 ring-1 ring-zinc-800 p-6">
          <div class="text-xs uppercase tracking-[0.3em] text-zinc-400">Email</div>
          <div class="mt-3 text-lg font-medium text-zinc-100">{email}</div>
          <div class="mt-2 text-xs text-zinc-400">Typically replies within 48 hours.</div>
          <div class="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              on:click={copyEmail}
              class="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-100 ring-1 ring-cyan-500/40 text-sm hover:ring-cyan-300"
            >
              {copied ? "Copied" : "Copy email"}
            </button>
            <a href={`mailto:${email}`} class="px-4 py-2 rounded-xl bg-zinc-950 ring-1 ring-zinc-800 text-sm hover:ring-zinc-500">
              Compose message
            </a>
          </div>
        </div>
        <div class="rounded-2xl bg-gradient-to-br from-zinc-900/60 via-zinc-900/30 to-zinc-950 ring-1 ring-zinc-800 p-6">
          <div class="text-xs uppercase tracking-[0.3em] text-zinc-400">Collaboration</div>
          <div class="mt-3 text-sm text-zinc-300">
            For collaborations, send a short brief with your research goals, target system, and how quantum computing fits in.
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-full bg-zinc-950/70 ring-1 ring-zinc-800 text-xs text-zinc-200">Quantum algorithms</span>
            <span class="px-3 py-1.5 rounded-full bg-zinc-950/70 ring-1 ring-zinc-800 text-xs text-zinc-200">Error correction</span>
            <span class="px-3 py-1.5 rounded-full bg-zinc-950/70 ring-1 ring-zinc-800 text-xs text-zinc-200">Quantum compilation</span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="max-w-6xl mx-auto px-4 pb-6 text-xs text-zinc-400">
    <div class="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-5"></div>
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

<style>
  :global(body) {
    background: linear-gradient(to bottom, #09090b, #000000, #09090b);
    background-attachment: fixed;
  }

  .star-field {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .star {
    opacity: var(--op);
    animation: twinkle var(--dur) var(--del) ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: var(--op); }
    50%       { opacity: 0.02; }
  }
</style>
