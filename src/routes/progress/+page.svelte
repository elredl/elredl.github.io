<script lang="ts">
  const milestones = [
    {
      title: "Interactive quantum annealing briefing",
      status: "Live",
      detail: "Built and published a multi-section walkthrough with card navigation and visuals.",
      href: "/annealing"
    },
    {
      title: "PhD application cycle",
      status: "In progress",
      detail: "Finalizing statements, refining research fit, and preparing materials for 2026 admissions.",
      href: "/#about"
    },
    {
      title: "CSU quantum computing hackathon",
      status: "In progress",
      detail: "Helping organize CSU's inaugural quantum computing hackathon with collaborators across campus.",
      href: "/#research"
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-zinc-100">
  <div class="pointer-events-none absolute inset-0">
    <div class="absolute -top-24 right-[10%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
    <div class="absolute bottom-[-10%] left-[-8%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
  </div>

  <div class="relative max-w-4xl mx-auto px-4 py-10 md:py-16">
    <a href="/" class="inline-flex items-center text-xs uppercase tracking-[0.25em] text-zinc-400 hover:text-zinc-200">
      ← Back to home
    </a>

    <section class="mt-5 rounded-2xl bg-zinc-900/70 ring-1 ring-zinc-800 p-6 md:p-8">
      <p class="text-[10px] uppercase tracking-[0.35em] text-zinc-400">Roadmap</p>
      <h1 class="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">View progress</h1>
      <p class="mt-3 text-sm md:text-base text-zinc-300">
        Current milestones across research communication, PhD applications, and community-building initiatives.
      </p>

      <div class="mt-7 space-y-4">
        {#each milestones as milestone}
          <article class="rounded-xl bg-zinc-950/70 ring-1 ring-zinc-800 p-4 md:p-5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <h2 class="text-lg font-medium text-zinc-100">{milestone.title}</h2>
              <span
                class={`px-2.5 py-1 rounded-full text-xs ring-1 ${
                  milestone.status === "Live"
                    ? "bg-cyan-500/20 text-cyan-100 ring-cyan-500/40"
                    : milestone.status === "In progress"
                      ? "bg-amber-500/20 text-amber-100 ring-amber-500/40"
                      : "bg-zinc-800/80 text-zinc-200 ring-zinc-700"
                }`}
              >
                {milestone.status}
              </span>
            </div>
            <p class="mt-2 text-sm text-zinc-300">{milestone.detail}</p>
            <a href={milestone.href} class="mt-3 inline-flex items-center text-xs uppercase tracking-widest text-cyan-300 hover:text-cyan-200">
              Open →
            </a>
          </article>
        {/each}
      </div>
    </section>
  </div>
</div>
