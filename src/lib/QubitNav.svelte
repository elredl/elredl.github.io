<script lang="ts">
  const navigate = (sectionId: string) => {
    if (typeof document === 'undefined') return;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
</script>

<div class="widget">
  <svg class="orbitals" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="qg" cx="38%" cy="32%">
        <stop offset="0%" stop-color="#e0f9ff" />
        <stop offset="40%" stop-color="#22d3ee" />
        <stop offset="100%" stop-color="#0e7490" />
      </radialGradient>
      <filter id="glow-filter" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
      </filter>
      <filter id="drop-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0e7490" flood-opacity="0.5"/>
      </filter>
    </defs>

    <!-- Glow aura behind sphere -->
    <circle cx="110" cy="110" r="36" fill="rgb(6,182,212)" opacity="0.18"
      filter="url(#glow-filter)" class="aura" />

    <!-- Orbital ring 1 (behind sphere) - back half dashed -->
    <ellipse cx="110" cy="110" rx="82" ry="22" fill="none"
      stroke="#06b6d4" stroke-width="2.5" opacity="0.9"
      stroke-dasharray="6 4"
      transform="rotate(0 110 110)" />

    <!-- Orbital ring 2 (tilted) - back half -->
    <ellipse cx="110" cy="110" rx="82" ry="22" fill="none"
      stroke="#a855f7" stroke-width="2.5" opacity="0.9"
      stroke-dasharray="6 4"
      transform="rotate(65 110 110)" />

    <!-- Sphere (sits on top) -->
    <circle cx="110" cy="110" r="26" fill="url(#qg)" class="sphere"
      filter="url(#drop-shadow)" />

    <!-- Sphere outline -->
    <circle cx="110" cy="110" r="26" fill="none"
      stroke="#0e7490" stroke-width="2" opacity="0.6" />

    <!-- Equatorial belt on sphere -->
    <ellipse cx="110" cy="110" rx="26" ry="6.5" fill="none"
      stroke="#0e7490" stroke-width="1.5" opacity="0.5" />

    <!-- State vector arrow -->
    <line x1="110" y1="110" x2="110" y2="82" stroke="white" stroke-width="2.5"
      stroke-linecap="round" opacity="0.95" />
    <!-- Arrowhead -->
    <polygon points="110,78 106,86 114,86" fill="white" opacity="0.95" />

    <!-- Sphere highlight (glossy) -->
    <ellipse cx="103" cy="101" rx="7" ry="5" fill="white" opacity="0.35"
      transform="rotate(-20 103 101)" />
    <circle cx="101" cy="99" r="2.5" fill="white" opacity="0.6" />

    <!-- Orbital dots (follow the ellipse paths) -->
    <g transform="translate(110,110)">
      <!-- Dot on orbital 1 -->
      <circle r="5.5" fill="#06b6d4" stroke="white" stroke-width="1.5" opacity="1">
        <animateMotion dur="5s" repeatCount="indefinite"
          path="M 82,0 A 82,22 0 1,1 -82,0 A 82,22 0 1,1 82,0" />
      </circle>

      <!-- Dot on orbital 2 -->
      <g transform="rotate(65)">
        <circle r="5.5" fill="#a855f7" stroke="white" stroke-width="1.5" opacity="1">
          <animateMotion dur="7s" repeatCount="indefinite"
            path="M 82,0 A 82,22 0 1,0 -82,0 A 82,22 0 1,0 82,0" />
        </circle>
      </g>
    </g>
  </svg>

  <!-- Navigation buttons -->
  <button class="btn top" on:click={() => navigate('about')}>About</button>
  <button class="btn right" on:click={() => navigate('projects')}>Projects</button>
  <button class="btn bottom" on:click={() => navigate('contact')}>Contact</button>
  <button class="btn left" on:click={() => navigate('research')}>Research</button>
</div>

<style>
  .widget {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 220px;
    height: 220px;
    z-index: 50;
    pointer-events: none;
  }

  .orbitals {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .sphere {
    animation: pulse 3.5s ease-in-out infinite;
  }

  .aura {
    animation: pulse 3.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.65; }
  }

  .btn {
    position: absolute;
    pointer-events: all;
    padding: 4px 14px;
    border-radius: 9999px;
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgb(103, 232, 249);
    background: rgba(6, 182, 212, 0.07);
    border: 1px solid rgba(6, 182, 212, 0.35);
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    white-space: nowrap;
  }

  .btn:hover {
    background: rgba(6, 182, 212, 0.18);
    border-color: rgba(6, 182, 212, 0.75);
    color: white;
    box-shadow: 0 0 14px rgba(6, 182, 212, 0.45);
  }

  .top {
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
  }

  .right {
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
  }

  .bottom {
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
  }

  .left {
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
