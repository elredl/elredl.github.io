<script>
  const focusAreas = [
    "Quantum sensing protocols and hardware-aware modeling",
    "Simulation of real physical systems",
    "Quantum error correction and noise mitigation",
    "Experiment design and reproducible analysis"
  ];
  const toolStack = ["SvelteKit", "Python", "D-Wave Ocean", "PyTorch", "Julia", "Qiskit"];
</script>

<div class="page">
  <div class="blob blob-cyan"></div>
  <div class="blob blob-fuchsia"></div>

  <div class="content">
    <a href="/" class="back">← Back</a>

    <h1 class="title">About</h1>

    <div class="grid">
      <div class="prose">
        <p>
          I build exploratory tools for quantum sensing and the simulation of real systems. My work blends theory with hands-on
          experimentation, with a strong emphasis on rigorous validation and transparent failure analysis.
        </p>
        <p>
          I enjoy collaborating with labs and startups pushing applied quantum research. If you want to evaluate sensing
          protocols, compare simulation pipelines, or prototype error-correction workflows, I would love to help.
        </p>
        <p class="availability">
          Open to PhD opportunities — 2026 start. Based in Fort Collins, CO.
        </p>
        <div class="tool-stack">
          {#each toolStack as tool}
            <span class="tag">{tool}</span>
          {/each}
        </div>
      </div>

      <div class="cards">
        <div class="card">
          <div class="card-label">Focus areas</div>
          <ul class="focus-list">
            {#each focusAreas as area}
              <li>
                <span class="dot"></span>
                <span>{area}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="card card-gradient">
          <div class="card-label">Now building</div>
          <p class="card-body">
            Preparing PhD applications while helping organize CSU's inaugural quantum computing hackathon.
          </p>
          <a href="/progress" class="card-link">View progress →</a>
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
  .blob-fuchsia {
    bottom: 10%;
    left: -5%;
    width: 40vw;
    height: 40vw;
    max-width: 420px;
    max-height: 420px;
    background: rgba(217, 70, 239, 0.06);
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
    background: linear-gradient(135deg, #fff 30%, rgb(103, 232, 249));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .grid {
    display: grid;
    gap: 2.5rem;
  }
  @media (min-width: 768px) {
    .grid { grid-template-columns: 1fr 1fr; }
  }

  .prose {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    color: #a1a1aa;
    font-size: 0.95rem;
    line-height: 1.75;
  }
  .prose p { margin: 0; }

  .availability {
    color: #d4d4d8 !important;
    font-style: italic;
  }

  .tool-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  .tag {
    padding: 4px 12px;
    border-radius: 9999px;
    background: rgba(39, 39, 42, 0.7);
    border: 1px solid rgba(63, 63, 70, 0.8);
    font-size: 0.7rem;
    color: #d4d4d8;
    letter-spacing: 0.05em;
  }

  .cards {
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
    margin-bottom: 1rem;
  }

  .focus-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  .focus-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    font-size: 0.85rem;
    color: #e4e4e7;
    line-height: 1.5;
  }
  .dot {
    flex-shrink: 0;
    margin-top: 0.4rem;
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background: rgb(34, 211, 238);
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
</style>
