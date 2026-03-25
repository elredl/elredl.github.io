<script>
  const items = [
    {
      title: "Coming soon",
      description: "Research notes will live here as projects mature.",
      year: "2026",
      link: "/contact"
    }
  ];
</script>

<div class="page">
  <div class="blob blob-cyan"></div>
  <div class="blob blob-amber"></div>

  <div class="content">
    <a href="/" class="back">← Back</a>

    <h1 class="title">Research &amp; Notes</h1>

    <div class="layout">
      <div class="timeline">
        <div class="timeline-line"></div>
        {#each items as item}
          <a href={item.link} class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">{item.year}</div>
            <div class="timeline-title">{item.title}</div>
            <div class="timeline-desc">{item.description}</div>
          </a>
        {/each}
      </div>

      <div class="sidebar">
        <div class="card">
          <div class="card-label">Lab log</div>
          <p class="card-body">
            Weekly notes covering datasets, solver configs, and quick experiments.
            Ask for access if you want to collaborate.
          </p>
          <a href="/request-access" class="card-link">Request access →</a>
        </div>

        <div class="card card-gradient">
          <div class="card-label">Speaking</div>
          <p class="card-body">
            Available for workshops on sensing workflows, simulation methods, and QEC basics.
          </p>
          <div class="topic-list">
            <span class="topic">Quantum sensing</span>
            <span class="topic">Real-system models</span>
            <span class="topic">Error correction</span>
          </div>
        </div>
      </div>
    </div>
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
  .blob-cyan {
    top: -5%;
    right: 5%;
    width: 35vw;
    height: 35vw;
    max-width: 380px;
    max-height: 380px;
    background: rgba(6, 182, 212, 0.08);
  }
  .blob-amber {
    bottom: -5%;
    left: 5%;
    width: 40vw;
    height: 40vw;
    max-width: 420px;
    max-height: 420px;
    background: rgba(251, 191, 36, 0.06);
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
    margin-bottom: 3rem;
    background: linear-gradient(135deg, #fff 30%, rgb(251, 191, 36));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .layout {
    display: grid;
    gap: 2.5rem;
  }
  @media (min-width: 768px) {
    .layout { grid-template-columns: 1.1fr 0.9fr; }
  }

  /* Timeline */
  .timeline {
    position: relative;
    padding-left: 1.5rem;
  }
  .timeline-line {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, rgba(34,211,238,0.4), rgba(63,63,70,0.5), rgba(217,70,239,0.3));
  }
  .timeline-item {
    position: relative;
    display: block;
    text-decoration: none;
    padding-bottom: 2rem;
    transition: none;
  }
  .timeline-dot {
    position: absolute;
    left: -1.84rem;
    top: 2px;
    width: 10px;
    height: 10px;
    border-radius: 9999px;
    background: rgb(34, 211, 238);
    box-shadow: 0 0 18px 2px rgba(34, 211, 238, 0.4);
  }
  .timeline-year {
    font-size: 0.7rem;
    color: #71717a;
    letter-spacing: 0.1em;
    margin-bottom: 0.3rem;
  }
  .timeline-title {
    font-size: 1rem;
    font-weight: 500;
    color: #e4e4e7;
    margin-bottom: 0.4rem;
    transition: color 0.2s;
  }
  .timeline-item:hover .timeline-title { color: white; }
  .timeline-desc {
    font-size: 0.85rem;
    color: #71717a;
    line-height: 1.6;
  }

  /* Cards */
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  .card {
    padding: 1.4rem;
    border-radius: 1rem;
    background: rgba(24, 24, 27, 0.7);
    border: 1px solid rgba(63, 63, 70, 0.6);
  }
  .card-gradient {
    background: linear-gradient(135deg, rgba(24,24,27,0.6), rgba(10,10,15,0.8));
  }
  .card-label {
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #71717a;
    margin-bottom: 0.8rem;
  }
  .card-body {
    font-size: 0.85rem;
    color: #a1a1aa;
    line-height: 1.65;
    margin: 0 0 1rem;
  }
  .card-link {
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgb(103, 232, 249);
    text-decoration: none;
    transition: color 0.2s;
  }
  .card-link:hover { color: white; }
  .topic-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .topic {
    padding: 3px 10px;
    border-radius: 9999px;
    background: rgba(39, 39, 42, 0.7);
    border: 1px solid rgba(63, 63, 70, 0.6);
    font-size: 0.65rem;
    color: #d4d4d8;
    letter-spacing: 0.04em;
  }
</style>
