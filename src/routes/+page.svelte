<script lang="ts">
  import { onMount } from 'svelte';

  type Star = { x: number; y: number; r: number; rot: number; op: number; dur: number; del: number };
  let stars: Star[] = [];

  onMount(() => {
    stars = Array.from({ length: 65 }, () => ({
      x: Math.random() * 1000,
      y: Math.random() * 600,
      r: Math.random() * 1.8 + 0.7,
      rot: Math.random() * 45,
      op: Math.random() * 0.45 + 0.1,
      dur: Math.random() * 5 + 3,
      del: -(Math.random() * 8),
    }));
  });
</script>

<div class="screen">
  <!-- Star field -->
  <svg class="star-field" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <!-- 4-pointed sparkle: outer radius 1, inner radius 0.18 -->
      <path id="sparkle" d="M0,-1 L0.18,-0.18 L1,0 L0.18,0.18 L0,1 L-0.18,0.18 L-1,0 L-0.18,-0.18 Z" />
    </defs>
    {#each stars as s}
      <use
        href="#sparkle"
        transform="translate({s.x},{s.y}) rotate({s.rot}) scale({s.r})"
        fill="white"
        class="star"
        style="--op:{s.op}; --dur:{s.dur}s; --del:{s.del}s"
      />
    {/each}
  </svg>

  <div class="qubit-wrap">
    <svg class="qubit-svg" viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#1a4a7a" stop-opacity="0.55" />
          <stop offset="40%"  stop-color="#0a2540" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#000510" stop-opacity="0" />
        </radialGradient>
        <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="12" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="line-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="particle-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Central radial glow (no solid sphere) -->
      <ellipse cx="450" cy="275" rx="200" ry="140" fill="url(#core)" filter="url(#soft-glow)" class="core-aura"/>

      <!-- Orbital 1 — tilted upper-left → lower-right -->
      <ellipse cx="450" cy="275" rx="370" ry="100" fill="none"
        stroke="rgba(140,175,210,0.45)" stroke-width="1.2"
        transform="rotate(-30 450 275)" />

      <!-- Orbital 2 — roughly horizontal -->
      <ellipse cx="450" cy="275" rx="370" ry="100" fill="none"
        stroke="rgba(140,175,210,0.45)" stroke-width="1.2"
        transform="rotate(5 450 275)" />

      <!-- Orbital 3 — highlighted, tilted upper-right → lower-left -->
      <ellipse cx="450" cy="275" rx="370" ry="100" fill="none"
        stroke="rgba(30,140,230,0.75)" stroke-width="1.5"
        transform="rotate(38 450 275)" filter="url(#line-glow)" />

      <!-- Particles: each group rotates to match its orbital plane -->

      <!-- Orbital 1 particle (gray, -30°) -->
      <g transform="translate(450,275) rotate(-30)">
        <circle r="3" fill="rgba(160,200,230,0.95)" filter="url(#particle-glow)">
          <animateMotion dur="9s" repeatCount="indefinite"
            path="M 370,0 A 370,100 0 1,1 -370,0 A 370,100 0 1,1 370,0" />
        </circle>
      </g>

      <!-- Orbital 2 particle (gray, 5°, opposite direction) -->
      <g transform="translate(450,275) rotate(5)">
        <circle r="3" fill="rgba(160,200,230,0.95)" filter="url(#particle-glow)">
          <animateMotion dur="11s" repeatCount="indefinite"
            path="M -370,0 A 370,100 0 1,0 370,0 A 370,100 0 1,0 -370,0" />
        </circle>
      </g>

      <!-- Orbital 3 particle (blue, 38°) -->
      <g transform="translate(450,275) rotate(38)">
        <circle r="3.5" fill="rgba(60,170,255,0.95)" filter="url(#particle-glow)">
          <animateMotion dur="7s" repeatCount="indefinite"
            path="M 370,0 A 370,100 0 1,1 -370,0 A 370,100 0 1,1 370,0" />
        </circle>
      </g>
    </svg>

    <!-- Name centered in glow -->
    <div class="name-center">Leo Rodolico</div>

    <!-- Nav buttons at orbital wingtips -->
    <a href="/about"    class="nav-pill nav-about">About</a>
    <a href="/projects" class="nav-pill nav-projects">Projects</a>
    <a href="/research" class="nav-pill nav-research">Research</a>
    <a href="/contact"  class="nav-pill nav-contact">Contact</a>
  </div>

  <p class="tagline">Quantum &times; Machine Learning &times; AI</p>
</div>

<style>
  .screen {
    min-height: 100dvh;
    background: #080d16;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    overflow: hidden;
    position: relative;
  }

  .star-field {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .star {
    opacity: var(--op);
    animation: twinkle var(--dur) var(--del) ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: var(--op); }
    50%       { opacity: 0.02; }
  }

  /* Subtle film-grain texture */
  .screen::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    opacity: 0.03;
    pointer-events: none;
  }

  /* Soft radial vignette */
  .screen::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(2, 5, 12, 0.7) 100%);
    pointer-events: none;
  }

  /* Orbital widget — landscape ratio */
  .qubit-wrap {
    position: relative;
    width: min(92vw, 900px);
    height: min(52vw, 520px);
  }

  .qubit-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .core-aura {
    animation: breathe 4s ease-in-out infinite;
  }
  @keyframes breathe {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.6; }
  }

  /* Name label */
  .name-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.4rem, 3.4vw, 2.4rem);
    font-weight: 500;
    color: rgba(240, 245, 255, 0.92);
    letter-spacing: 0.02em;
    white-space: nowrap;
    pointer-events: none;
  }

  /* Circle nav buttons */
  .nav-pill {
    position: absolute;
    width: clamp(56px, 7vw, 72px);
    height: clamp(56px, 7vw, 72px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(0.6rem, 1.1vw, 0.72rem);
    font-weight: 500;
    letter-spacing: 0.04em;
    color: rgba(200, 220, 245, 0.8);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-decoration: none;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
    white-space: nowrap;
    text-align: center;
  }
  .nav-pill:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(120, 170, 230, 0.35);
    color: rgba(220, 235, 255, 0.95);
  }

  /* Button centers placed at computed orbital tip coordinates */
  .nav-about {
    left: 17.6%;
    top: 9%;
    transform: translate(-50%, -50%);
  }
  .nav-projects {
    left: 85.6%;
    top: 17.3%;
    transform: translate(-50%, -50%);
  }
  .nav-research {
    left: 9%;
    top: 46.7%;
    transform: translate(-50%, -50%);
  }
  .nav-contact {
    left: 91%;
    top: 59%;
    transform: translate(-50%, -50%);
  }

  .tagline {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(0.6rem, 1.1vw, 0.7rem);
    font-weight: 400;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(120, 145, 175, 0.4);
    text-align: center;
  }
</style>
