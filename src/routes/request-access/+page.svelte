<script lang="ts">
  const email = "leonardo.rodolico@colostate.edu";

  let name = "";
  let org = "";
  let project = "";
  let message = "";

  const encodedSubject = encodeURIComponent("Access request: lab log");

  $: body = [
    `Name: ${name || "[Your name]"}`,
    `Organization: ${org || "[Your organization]"}`,
    `Project: ${project || "[Your project]"}`,
    "",
    "Context:",
    message || "[Add a short description of your collaboration or research needs.]"
  ].join("\n");

  $: mailtoHref = `mailto:${email}?subject=${encodedSubject}&body=${encodeURIComponent(body)}`;
</script>

<div class="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-zinc-100">
  <div class="pointer-events-none absolute inset-0">
    <div class="absolute -top-24 right-[10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
    <div class="absolute bottom-[-12%] left-[-6%] h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"></div>
  </div>

  <div class="relative max-w-3xl mx-auto px-4 py-10 md:py-16">
    <a href="/" class="inline-flex items-center text-xs uppercase tracking-[0.25em] text-zinc-400 hover:text-zinc-200">
      ← Back to home
    </a>

    <div class="mt-5 rounded-2xl bg-zinc-900/70 ring-1 ring-zinc-800 p-6 md:p-8">
      <p class="text-[10px] uppercase tracking-[0.35em] text-zinc-400">Collaboration</p>
      <h1 class="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Request access</h1>
      <p class="mt-3 text-sm md:text-base text-zinc-300">
        Share a short overview and I will follow up with access details for lab logs and research notes.
      </p>

      <div class="mt-6 grid gap-4 md:grid-cols-2">
        <label class="text-sm">
          <span class="block mb-1 text-zinc-300">Name</span>
          <input bind:value={name} type="text" class="w-full rounded-xl bg-zinc-950 ring-1 ring-zinc-800 px-3 py-2 text-zinc-100 focus:outline-none focus:ring-cyan-500/60" placeholder="Your name" />
        </label>

        <label class="text-sm">
          <span class="block mb-1 text-zinc-300">Organization</span>
          <input bind:value={org} type="text" class="w-full rounded-xl bg-zinc-950 ring-1 ring-zinc-800 px-3 py-2 text-zinc-100 focus:outline-none focus:ring-cyan-500/60" placeholder="Lab, startup, or university" />
        </label>

        <label class="text-sm md:col-span-2">
          <span class="block mb-1 text-zinc-300">Project or collaboration area</span>
          <input bind:value={project} type="text" class="w-full rounded-xl bg-zinc-950 ring-1 ring-zinc-800 px-3 py-2 text-zinc-100 focus:outline-none focus:ring-cyan-500/60" placeholder="Quantum sensing, simulation, error correction..." />
        </label>

        <label class="text-sm md:col-span-2">
          <span class="block mb-1 text-zinc-300">Message</span>
          <textarea bind:value={message} rows="6" class="w-full rounded-xl bg-zinc-950 ring-1 ring-zinc-800 px-3 py-2 text-zinc-100 focus:outline-none focus:ring-cyan-500/60" placeholder="What are you working on, and what access are you looking for?"></textarea>
        </label>
      </div>

      <div class="mt-6 flex flex-wrap items-center gap-3">
        <a href={mailtoHref} class="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-100 ring-1 ring-cyan-500/40 text-sm hover:ring-cyan-300">
          Open email draft
        </a>
        <a href={`mailto:${email}`} class="px-4 py-2 rounded-xl bg-zinc-950 ring-1 ring-zinc-800 text-sm hover:ring-zinc-500">
          Email directly
        </a>
      </div>

      <p class="mt-4 text-xs text-zinc-500">Contact: {email}</p>
    </div>
  </div>
</div>
