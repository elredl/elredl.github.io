<script>
  const email = "leonardo.rodolico@colostate.edu";
  let copied = false;

  const copyEmail = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      if (typeof window !== "undefined") window.location.href = `mailto:${email}`;
      return;
    }
    try {
      await navigator.clipboard.writeText(email);
      copied = true;
      setTimeout(() => { copied = false; }, 2000);
    } catch {
      if (typeof window !== "undefined") window.location.href = `mailto:${email}`;
    }
  };
</script>

<div class="page">
  <div class="blob blob-fuchsia"></div>
  <div class="blob blob-amber"></div>

  <div class="content">
    <a href="/" class="back">← Back</a>

    <h1 class="title">Contact</h1>

    <div class="grid">
      <div class="card">
        <div class="card-label">Email</div>
        <div class="email">{email}</div>
        <div class="reply-note">Typically replies within 48 hours.</div>
        <div class="actions">
          <button type="button" on:click={copyEmail} class="btn btn-primary">
            {copied ? "Copied!" : "Copy email"}
          </button>
          <a href={`mailto:${email}`} class="btn btn-secondary">Compose message</a>
        </div>
      </div>

      <div class="card card-gradient">
        <div class="card-label">Collaboration</div>
        <p class="card-body">
          For collaborations, send a short brief with your sensing setup or target system,
          current model assumptions, and evaluation goals.
        </p>
        <div class="collab-tags">
          <span class="tag">Quantum sensing</span>
          <span class="tag">System simulation</span>
          <span class="tag">Error correction</span>
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
  .blob-fuchsia {
    top: -5%;
    right: 10%;
    width: 38vw;
    height: 38vw;
    max-width: 400px;
    max-height: 400px;
    background: rgba(217, 70, 239, 0.08);
  }
  .blob-amber {
    bottom: 5%;
    left: 0%;
    width: 40vw;
    height: 40vw;
    max-width: 440px;
    max-height: 440px;
    background: rgba(251, 191, 36, 0.07);
  }

  .content {
    max-width: 840px;
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

  .grid {
    display: grid;
    gap: 1.5rem;
  }
  @media (min-width: 640px) {
    .grid { grid-template-columns: 1fr 1fr; }
  }

  .card {
    padding: 1.6rem;
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
    margin-bottom: 0.9rem;
  }

  .email {
    font-size: 1rem;
    font-weight: 500;
    color: #f4f4f5;
    margin-bottom: 0.4rem;
    word-break: break-all;
  }
  .reply-note {
    font-size: 0.75rem;
    color: #71717a;
    margin-bottom: 1.2rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .btn {
    padding: 7px 18px;
    border-radius: 0.75rem;
    font-size: 0.8rem;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s;
  }
  .btn-primary {
    background: rgba(6, 182, 212, 0.18);
    color: rgb(103, 232, 249);
    border: 1px solid rgba(6, 182, 212, 0.45);
  }
  .btn-primary:hover {
    background: rgba(6, 182, 212, 0.28);
    border-color: rgba(6, 182, 212, 0.75);
  }
  .btn-secondary {
    background: rgba(24, 24, 27, 0.8);
    color: #d4d4d8;
    border: 1px solid rgba(63, 63, 70, 0.7);
  }
  .btn-secondary:hover {
    border-color: rgba(113, 113, 122, 0.8);
    color: white;
  }

  .card-body {
    font-size: 0.85rem;
    color: #a1a1aa;
    line-height: 1.65;
    margin: 0 0 1.2rem;
  }
  .collab-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .tag {
    padding: 4px 12px;
    border-radius: 9999px;
    background: rgba(39, 39, 42, 0.7);
    border: 1px solid rgba(63, 63, 70, 0.6);
    font-size: 0.65rem;
    color: #d4d4d8;
    letter-spacing: 0.04em;
  }
</style>
