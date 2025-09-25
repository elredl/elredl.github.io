import React, { useState } from "react";

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-24">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-10 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"/>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="text-sm md:text-base text-zinc-300 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

function Chip({ children }) {
  return (
    <span className="px-2 py-1 rounded-full bg-zinc-900/70 ring-1 ring-zinc-800 text-xs mr-2 mb-2 inline-block">
      {children}
    </span>
  );
}

function LinkArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-60 group-hover:opacity-100">
      <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14zM5 5h5V3H3v7h2z"/>
    </svg>
  );
}

function Card({ title, children, link, tags=[] }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="block group">
      <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800">
        <div className="rounded-2xl h-full bg-zinc-950/70 ring-1 ring-zinc-800 p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">{title}</h3>
            <LinkArrow/>
          </div>
          <div className="mb-3 text-zinc-300">{children}</div>
          <div>{tags.map((t,i)=><Chip key={i}>{t}</Chip>)}</div>
        </div>
      </div>
    </a>
  );
}

function Stat({ k, v }){
  return (
    <div className="px-4 py-3 rounded-xl bg-zinc-900/70 ring-1 ring-zinc-800">
      <div className="text-xs text-zinc-400 mb-1">{k}</div>
      <div className="text-xl font-semibold">{v}</div>
    </div>
  );
}

function Nav(){
  const [open,setOpen]=useState(false);
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-20">
      <div className="backdrop-blur supports-backdrop-blur:bg-zinc-900/50 bg-zinc-950/70 border border-zinc-800 rounded-full px-3 py-2 flex items-center gap-2">
        <button onClick={()=>setOpen(!open)} className="md:hidden px-2 py-1 rounded-lg hover:bg-zinc-900">☰</button>
        <nav className={(open?"flex":"hidden")+" md:flex items-center gap-2"}>
          {[["#about","About"],["#projects","Projects"],["#research","Research"],["#skills","Skills"],["#contact","Contact"]].map(([href,label])=> (
            <a key={href} className="px-3 py-1 text-sm hover:text-white text-zinc-300" href={href}>{label}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function TimelineItem({ year, title, children }){
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-cyan-400/90 shadow-[0_0_25px_2px_rgba(34,211,238,0.45)]"/>
      <div className="text-xs text-zinc-400">{year}</div>
      <div className="text-sm md:text-base text-zinc-200 font-medium">{title}</div>
      <div className="text-sm text-zinc-400">{children}</div>
    </div>
  );
}

export default function FuturisticSite(){
  return (
    <div className="min-h-screen text-zinc-100 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 relative">
      <div className="pointer-events-none fixed inset-0 opacity-30" aria-hidden>
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-cyan-500 blur-3xl"/>
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-fuchsia-500 blur-3xl"/>
        <div className="absolute bottom-0 left-1/3 h-64 w-96 rounded-full bg-indigo-500 blur-3xl"/>
      </div>

      <Nav/>

      {/* Hero */}
      <header className="max-w-5xl mx-auto px-5 pt-28 md:pt-36 pb-10">
        <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-400">Quantum • Machine Learning</p>
        <h1 className="text-4xl md:text-6xl font-semibold mt-3 leading-tight">
          Leo Rodolico
        </h1>
        <p className="mt-5 text-zinc-300 max-w-2xl">
          Building sleek, measurable systems at the edge of <span className="text-white">quantum optimization</span> and <span className="text-white">modern ML</span>. Focused on QUBO/Ising design, annealing vs. variational tradeoffs, and evaluation you can trust.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#projects" className="px-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            <span className="block px-4 py-2 rounded-[10px] bg-black text-sm font-medium">View Projects</span>
          </a>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 text-sm hover:ring-zinc-500">Contact</a>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat k="Focus" v="Quantum × ML"/>
          <Stat k="Specialty" v="QUBO & Ising"/>
          <Stat k="Tooling" v="PyTorch, React"/>
          <Stat k="Stack" v="Vite + Tailwind"/>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5">
        <Section id="about" title="About">
          <p>
            I design algorithms and small, precise tools that scale—from annealing baselines to hybrid pipelines. I like tight specs, crisp benchmarks, and clean UI layers that communicate results clearly.
          </p>
          <p>
            Interests: adiabatic schedules, constraint calibration for QUBO, graph ML, embeddings, and end-to-end evaluation methodology.
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 gap-5">
            <Card title="AnnealBench" link="#" tags={["QUBO","Schedules","Benchmarks"]}>
              Reproducible annealing benchmarks: gap-aware schedules, pause/etch variants, time‑to‑target, and cost‑normalized scores.
            </Card>
            <Card title="QUBO Kit" link="#" tags={["Ising","Penalty","Mappings"]}>
              Utilities to map SAT/MaxCut/routing into compact QUBO/Ising forms with principled penalty scaling.
            </Card>
            <Card title="Q-Embed" link="#" tags={["Embeddings","VQA","Hybrid"]}>
              Lightweight pipeline: classical encoders → variational layer → linear probe. Fast ablations built‑in.
            </Card>
            <Card title="GraphCuts++" link="#" tags={["MaxCut","Heuristics","A/B"]}>
              Compare annealing, QAOA, and classical heuristics across curated graph families with tight baselines.
            </Card>
          </div>
        </Section>

        <Section id="research" title="Research & Notes">
          <div className="relative pl-6">
            <div className="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-zinc-700 to-fuchsia-500/40"/>
            <div className="space-y-6">
              <TimelineItem year="2025" title="Annealing pauses & spectra">
                On practical gaps, pause/etch strategies, and noise impacts on success probability.
              </TimelineItem>
              <TimelineItem year="2024" title="QUBO design without magic constants">
                Penalty calibration, constraint scaling, and stability across instance sizes.
              </TimelineItem>
              <TimelineItem year="2024" title="Evaluation methodology">
                Solution quality, time‑to‑target, success probability, cost‑normalized metrics.
              </TimelineItem>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="flex flex-wrap">
            {[
              "Python","TypeScript","PyTorch","NumPy","Rust","React","Tailwind","Linux",
              "OpenQASM","D‑Wave","QAOA","MaxCut","Graph ML","Data Viz"
            ].map((s,i)=>(<Chip key={i}>{s}</Chip>))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <form className="grid gap-3 max-w-xl" onSubmit={(e)=>{e.preventDefault(); alert("Thanks! I’ll get back to you soon.");}}>
            <input required placeholder="Your email" className="px-4 py-2 rounded-xl bg-zinc-950 ring-1 ring-zinc-800 focus:outline-none focus:ring-cyan-500"/>
            <textarea required placeholder="Message" rows={4} className="px-4 py-2 rounded-xl bg-zinc-950 ring-1 ring-zinc-800 focus:outline-none focus:ring-cyan-500"/>
            <button className="justify-self-start px-[1px] rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              <span className="block px-4 py-2 rounded-[10px] bg-black text-sm font-medium">Send</span>
            </button>
          </form>
        </Section>
      </main>

      <footer className="max-w-5xl mx-auto px-5 pb-16 text-xs text-zinc-400">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-8"/>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>© {new Date().getFullYear()} Leo Rodolico. Built with React & Tailwind.</p>
          <p>
            <a href="#about" className="hover:text-zinc-200">About</a>
            <span className="mx-2">·</span>
            <a href="#projects" className="hover:text-zinc-200">Projects</a>
            <span className="mx-2">·</span>
            <a href="#contact" className="hover:text-zinc-200">Contact</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
