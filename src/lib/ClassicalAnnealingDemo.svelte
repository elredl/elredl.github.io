<script lang="ts">
  import { onDestroy } from "svelte";

  const GRID_SIZE = 15;

  type State = { x: number; y: number };
  type LandscapeMode = "single" | "double";
  type DynamicsMode = "classical" | "tunneling";

  let landscapeMode: LandscapeMode = "single";
  let dynamicsMode: DynamicsMode = "classical";

  let energies: number[][] = [];
  let minE = Infinity;
  let maxE = -Infinity;

  const INITIAL_T = 5.0;
  let temperature = INITIAL_T;
  const MIN_T = 0.05;
  const COOLING = 0.98;

  let current: State = {
    x: Math.floor(GRID_SIZE / 2),
    y: Math.floor(GRID_SIZE / 2)
  };
  let best: State = { ...current };
  let bestEnergy = 0;

  let running = false;
  let interval: number | null = null;
  let stepCount = 0;

  // --- Landscapes ---

  function energySingle(x: number, y: number): number {
    const nx = (x / (GRID_SIZE - 1)) * 4 - 2;
    const ny = (y / (GRID_SIZE - 1)) * 4 - 2;
    const base = nx * nx + ny * ny;
    const bumps = 0.7 * (Math.sin(3 * nx) * Math.cos(3 * ny));
    return base + bumps;
  }

  function energyDouble(x: number, y: number): number {
    const nx = (x / (GRID_SIZE - 1)) * 4 - 2;
    const ny = (y / (GRID_SIZE - 1)) * 4 - 2;

    const wellLeft = (nx + 1) * (nx + 1) + ny * ny;
    const wellRight = (nx - 1) * (nx - 1) + ny * ny;
    const base = Math.min(wellLeft, wellRight);

    const barrierHeight = 6.0;
    const barrierWidth = 0.4;
    const barrier = barrierHeight * Math.exp(-(nx * nx) / (2 * barrierWidth * barrierWidth));

    return base + barrier;
  }

  function energy(x: number, y: number): number {
    return landscapeMode === "single" ? energySingle(x, y) : energyDouble(x, y);
  }

  function buildLandscape() {
    energies = [];
    minE = Infinity;
    maxE = -Infinity;

    for (let y = 0; y < GRID_SIZE; y++) {
      const row: number[] = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        const e = energy(x, y);
        row.push(e);
        if (e < minE) minE = e;
        if (e > maxE) maxE = e;
      }
      energies.push(row);
    }

    temperature = INITIAL_T;
    current = {
      x: Math.floor(GRID_SIZE / 2),
      y: Math.floor(GRID_SIZE / 2)
    };
    best = { ...current };
    bestEnergy = energy(current.x, current.y);
    stepCount = 0;
  }

  function normEnergy(x: number, y: number): number {
    const e = energies[y][x];
    return (e - minE) / (maxE - minE || 1);
  }

  // --- Annealing moves ---

  function proposeLocalNeighbor(): State {
    const dx = Math.floor(Math.random() * 3) - 1;
    const dy = Math.floor(Math.random() * 3) - 1;
    const nx = Math.min(GRID_SIZE - 1, Math.max(0, current.x + dx));
    const ny = Math.min(GRID_SIZE - 1, Math.max(0, current.y + dy));
    return { x: nx, y: ny };
  }

  function proposeTunnelingJump(): State {
    const NUM_CANDIDATES = 6;
    let bestCandidate: State = { x: current.x, y: current.y };
    let bestE = energy(current.x, current.y);

    for (let k = 0; k < NUM_CANDIDATES; k++) {
      const x = Math.floor(Math.random() * GRID_SIZE);
      const y = Math.floor(Math.random() * GRID_SIZE);
      const e = energy(x, y);
      if (e < bestE) {
        bestE = e;
        bestCandidate = { x, y };
      }
    }
    return bestCandidate;
  }

  function step() {
    if (!running || temperature <= MIN_T) {
      running = false;
      clearTimer();
      return;
    }

    const eCurrent = energy(current.x, current.y);
    let candidate: State;

    if (dynamicsMode === "classical") {
      candidate = proposeLocalNeighbor();
    } else {
      const tNorm = (temperature - MIN_T) / (INITIAL_T - MIN_T || 1);
      const pTunnel = 0.4 * tNorm;

      if (Math.random() < pTunnel) {
        candidate = proposeTunnelingJump();
      } else {
        candidate = proposeLocalNeighbor();
      }
    }

    const eNew = energy(candidate.x, candidate.y);
    const dE = eNew - eCurrent;

    if (dE <= 0 || Math.random() < Math.exp(-dE / temperature)) {
      current = candidate;
    }

    const eNow = energy(current.x, current.y);
    if (eNow < bestEnergy) {
      bestEnergy = eNow;
      best = { ...current };
    }

    temperature *= COOLING;
    stepCount++;
  }

  function start() {
    if (running) return;
    running = true;
    if (interval === null) {
      interval = window.setInterval(step, 80);
    }
  }

  function pause() {
    running = false;
    clearTimer();
  }

  function reset() {
    pause();
    temperature = INITIAL_T;
    current = {
      x: Math.floor(GRID_SIZE / 2),
      y: Math.floor(GRID_SIZE / 2)
    };
    best = { ...current };
    bestEnergy = energy(current.x, current.y);
    stepCount = 0;
  }

  function clearTimer() {
    if (interval !== null) {
      clearInterval(interval);
      interval = null;
    }
  }

  function setLandscapeMode(newMode: LandscapeMode) {
    if (landscapeMode === newMode) return;
    pause();
    landscapeMode = newMode;
    buildLandscape();
  }

  function setDynamicsMode(newMode: DynamicsMode) {
    if (dynamicsMode === newMode) return;
    pause();
    dynamicsMode = newMode;
    reset();
  }

  function toggleLandscape() {
    setLandscapeMode(landscapeMode === "single" ? "double" : "single");
  }

  function toggleDynamics() {
    setDynamicsMode(dynamicsMode === "classical" ? "tunneling" : "classical");
  }

  onDestroy(() => clearTimer());

  buildLandscape();

  function cellBg(x: number, y: number): string {
    const n = normEnergy(x, y);
    const r = 80 + Math.round(120 * n);
    const g = 180 - Math.round(100 * n);
    const b = 90;
    return `rgb(${r}, ${g}, ${b})`;
  }
</script>

<div class="space-y-3 text-xs text-neutral-300">
  <!-- Top controls: flip switches + buttons + stats -->
  <div class="flex flex-wrap items-center justify-between gap-4">
    <!-- Landscape toggle -->
    <div class="space-y-1">
      <div class="text-[0.65rem] uppercase tracking-[0.25em] text-neutral-400">
        Landscape
      </div>
      <button
        type="button"
        on:click={toggleLandscape}
        class="relative inline-flex h-9 w-64 items-center rounded-full border border-neutral-700 bg-neutral-900/80 shadow-inner shadow-black/60 overflow-hidden"
      >
        <!-- sliding knob -->
        <div
          class={`absolute inset-y-1 left-1 w-1/2 rounded-full bg-amber-400/90 shadow-md shadow-black/60 transition-transform duration-300 ease-out ${
            landscapeMode === "single" ? "translate-x-0" : "translate-x-30"
          }`}
        ></div>

        <!-- labels -->
        <div class="relative z-10 flex w-full px-3 text-[0.65rem] font-semibold">
          <span
            class={`flex-1 text-center transition-colors ${
              landscapeMode === "single" ? "text-neutral-900" : "text-neutral-400"
            }`}
          >
            Single basin
          </span>
          <span
            class={`flex-1 text-center transition-colors ${
              landscapeMode === "double" ? "text-neutral-900" : "text-neutral-400"
            }`}
          >
            Two wells + barrier
          </span>
        </div>
      </button>
    </div>


    <!-- Dynamics toggle -->
    <div class="space-y-1">
      <div class="text-[0.65rem] uppercase tracking-[0.25em] text-neutral-400">
        Dynamics
      </div>
      <button
        type="button"
        on:click={toggleDynamics}
        class="relative inline-flex h-9 w-64 items-center rounded-full border border-neutral-700 bg-neutral-900/80 shadow-inner shadow-black/60 overflow-hidden"
      >
        <!-- sliding knob -->
        <div
          class={`absolute inset-y-1 left-1 w-1/2 rounded-full bg-amber-400/90 shadow-md shadow-black/60 transition-transform duration-300 ease-out ${
            dynamicsMode === "classical" ? "translate-x-0" : "translate-x-30"
          }`}
        ></div>

        <!-- labels -->
        <div class="relative z-10 flex w-full px-3 text-[0.65rem] font-semibold">
          <span
            class={`flex-1 text-center transition-colors ${
              dynamicsMode === "classical" ? "text-neutral-900" : "text-neutral-400"
            }`}
          >
            Thermal
          </span>
          <span
            class={`flex-1 text-center transition-colors ${
              dynamicsMode === "tunneling" ? "text-neutral-900" : "text-neutral-400"
            }`}
          >
            Tunneling
          </span>
        </div>
      </button>
    </div>

    <!-- Start / Pause / Reset -->
    <div class="flex flex-wrap items-center gap-2">
      <button
        type="button"
        class="rounded-full bg-amber-400/80 px-3 py-1 text-[0.7rem] font-semibold text-neutral-900 hover:bg-amber-300"
        on:click={start}
      >
        Start
      </button>
      <button
        type="button"
        class="rounded-full border border-amber-400/60 px-3 py-1 text-[0.7rem] font-semibold text-amber-100 hover:bg-amber-400/10"
        on:click={pause}
      >
        Pause
      </button>
      <button
        type="button"
        class="rounded-full border border-neutral-600 px-3 py-1 text-[0.7rem] font-semibold text-neutral-200 hover:bg-neutral-700/80"
        on:click={reset}
      >
        Reset
      </button>
    </div>

    <!-- Stats -->
     <div class="ml-auto text-right leading-tight min-w-[140px]">
      <div>
        Landscape:
        {landscapeMode === "single" ? "Single basin" : "Two wells + barrier"}
      </div>
      <div>
        Dynamics:
        {dynamicsMode === "classical" ? "Classical (thermal)" : "Quantum-style (tunneling)"}
      </div>
      <div>Temp: {temperature.toFixed(3)}</div>
      <div>Steps: {stepCount}</div>
      <div>Best E: {bestEnergy.toFixed(3)}</div>
    </div>
  </div>

  <!-- Grid -->
  <div
    class="mt-2 grid aspect-square w-full max-w-sm gap-[2px] rounded-xl bg-neutral-900 p-2 mx-auto"
    style={`grid-template-columns: repeat(${GRID_SIZE}, minmax(0, 1fr));`}
  >
    {#each Array(GRID_SIZE) as _, y}
      {#each Array(GRID_SIZE) as __, x}
        {#key `${x}-${y}-${landscapeMode}`}
          <div
            class="relative flex items-center justify-center rounded-sm"
            style={`background:${cellBg(x, y)};`}
          >
            {#if current.x === x && current.y === y}
              <div class="h-3 w-3 rounded-full border border-black/70 bg-amber-200 shadow-md shadow-black/60"></div>
            {:else if best.x === x && best.y === y}
              <div class="h-2.5 w-2.5 rounded-full border border-black/70 bg-sky-200/90 shadow shadow-black/50"></div>
            {/if}
          </div>
        {/key}
      {/each}
    {/each}
  </div>

  <p class="text-[0.7rem] text-neutral-400">
    In <span class="text-amber-300 font-semibold">Classical (thermal)</span> mode, the dot performs local
    simulated annealing on the chosen landscape. In
    <span class="text-amber-300 font-semibold">Quantum-style (tunneling)</span> mode, it occasionally makes
    non-local jumps biased toward low-energy regions, mimicking quantum tunneling through large barriers.
  </p>
</div>
