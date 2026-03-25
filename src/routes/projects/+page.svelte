<script>
  const projects = [
    {
      title: "Exploration into Quantum Benchmarking",
      description: "Interactive benchmark explorer for comparing classical and quantum annealers.",
      link: "/annealing",
      tags: ["Benchmarking", "Quantum", "Visualization"],
      status: "Live",
      year: "2024"
    }
  ];

  const tags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
  let activeTag = "All";

  $: filtered = activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));
</script>

<div class="page">
  <div class="blob blob-fuchsia"></div>
  <div class="blob blob-cyan"></div>

  <div class="content">
    <a href="/" class="back">← Back</a>

    <h1 class="title">Projects</h1>

    <div class="filters">
      {#each tags as tag}
        <button
          type="button"
          aria-pressed={activeTag === tag}
          class={`filter-btn ${activeTag === tag ? "active" : ""}`}
          on:click={() => (activeTag = tag)}
        >
          {tag}
        </button>
      {/each}
    </div>

    <div class="project-grid">
      {#each filtered as project}
        <a href={project.link} class="project-card">
          <div class="project-header">
            <h2 class="project-title">{project.title}</h2>
            <svg width="16" height="16" viewBox="0 0 24 24" class="arrow">
              <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14zM5 5h5V3H3v7h2z" />
            </svg>
          </div>
          <p class="project-desc">{project.description}</p>
          <div class="project-meta">
            <span class="badge">{project.status}</span>
            <span class="badge">{project.year}</span>
          </div>
          <div class="project-tags">
            {#each project.tags as t}
              <span class="tag">{t}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>

    {#if filtered.length === 0}
      <p class="empty">No projects tagged "{activeTag}" yet.</p>
    {/if}
  </div>
</div>

<style>
  .page {
    min-height: 100dvh;
    background: linear-gradient(160deg, #020617 0%, #000 50%, #0a0a0f 100%);
    color: #f4f4f5;
    padding: 4rem 1.5rem 3rem;
    position: relative;
    overflow: hidden;
  }

  .blob {
    position: absolute;
    border-radius: 9999px;
    filter: blur(80px);
    pointer-events: none;
  }
  .blob-fuchsia {
    top: -5%;
    left: 5%;
    width: 38vw;
    height: 38vw;
    max-width: 400px;
    max-height: 400px;
    background: rgba(217, 70, 239, 0.08);
  }
  .blob-cyan {
    bottom: 5%;
    right: -5%;
    width: 40vw;
    height: 40vw;
    max-width: 440px;
    max-height: 440px;
    background: rgba(6, 182, 212, 0.07);
  }

  .content {
    max-width: 960px;
    margin: 0 auto;
    position: relative;
  }

  .back {
    display: inline-block;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(103, 232, 249, 0.7);
    text-decoration: none;
    margin-bottom: 2.5rem;
    transition: color 0.2s;
  }
  .back:hover { color: rgb(103, 232, 249); }

  .title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #fff 30%, rgb(192, 132, 252));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .filter-btn {
    padding: 5px 14px;
    border-radius: 9999px;
    font-size: 0.7rem;
    border: 1px solid rgba(63, 63, 70, 0.8);
    background: rgba(24, 24, 27, 0.7);
    color: #a1a1aa;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.05em;
  }
  .filter-btn.active {
    background: rgba(6, 182, 212, 0.18);
    border-color: rgba(6, 182, 212, 0.5);
    color: rgb(103, 232, 249);
  }
  .filter-btn:hover:not(.active) {
    border-color: rgba(113, 113, 122, 0.8);
    color: #d4d4d8;
  }

  .project-grid {
    display: grid;
    gap: 1.2rem;
  }
  @media (min-width: 640px) {
    .project-grid { grid-template-columns: repeat(2, 1fr); }
  }

  .project-card {
    display: block;
    padding: 1.4rem;
    border-radius: 1rem;
    background: rgba(24, 24, 27, 0.7);
    border: 1px solid rgba(63, 63, 70, 0.6);
    text-decoration: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .project-card:hover {
    border-color: rgba(63, 63, 70, 1);
    box-shadow: 0 0 24px rgba(6, 182, 212, 0.08);
  }
  .project-card:hover .arrow {
    opacity: 1;
  }

  .project-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  .project-title {
    font-size: 1rem;
    font-weight: 500;
    color: #f4f4f5;
    margin: 0;
    line-height: 1.4;
  }
  .arrow {
    flex-shrink: 0;
    color: #a1a1aa;
    opacity: 0.5;
    transition: opacity 0.2s;
  }
  .project-desc {
    font-size: 0.85rem;
    color: #a1a1aa;
    line-height: 1.65;
    margin: 0 0 1rem;
  }
  .project-meta {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 0.75rem;
  }
  .badge {
    padding: 3px 10px;
    border-radius: 9999px;
    background: rgba(39, 39, 42, 0.7);
    border: 1px solid rgba(63, 63, 70, 0.7);
    font-size: 0.65rem;
    color: #d4d4d8;
    letter-spacing: 0.05em;
  }
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .tag {
    padding: 3px 10px;
    border-radius: 9999px;
    background: rgba(39, 39, 42, 0.5);
    border: 1px solid rgba(63, 63, 70, 0.5);
    font-size: 0.65rem;
    color: #a1a1aa;
    letter-spacing: 0.05em;
  }

  .empty {
    color: #71717a;
    font-size: 0.85rem;
    margin-top: 1.5rem;
  }
</style>
