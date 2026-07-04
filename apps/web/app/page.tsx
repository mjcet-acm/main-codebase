"use client";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Users, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const focusAreas = [
  {
    title: "Technical Excellence",
    description: "Hands-on engineering workshops, developer-led coding sprints, and project-based learning tracks for our student members.",
    icon: Code2,
  },
  {
    title: "Research & Innovation",
    description: "Deep-dives into emerging technologies, peer-led research initiatives, and practical implementations of academic concepts.",
    icon: Cpu,
  },
  {
    title: "Community Growth",
    description: "Fostering collaboration across engineering departments and growing the next generation of technical leaders at MJCET.",
    icon: Users,
  },
];

const events = [
  { name: "HackForge 2026", type: "Hackathon", date: "AUGUST 2026", id: "EV-01" },
  { name: "AI Builders Week", type: "Technical Workshop", date: "SEPTEMBER 2026", id: "EV-02" },
  { name: "Industry Connect", type: "Technical Conference", date: "OCTOBER 2026", id: "EV-03" },
];

const stats = [
  { label: "Active Members in 2026", value: "250+", magnitude: 100 },
  { label: "Events Hosted Annually", value: "40+", magnitude: 60 },
  { label: "Projects Shipped", value: "60+", magnitude: 80 },
  { label: "Technical Mentors", value: "25+", magnitude: 40 },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <Navbar />
      
      <main className="relative">
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-44 text-center lg:pb-32 lg:pt-52">
          <div className="absolute inset-0 -z-10 bg-concentric-grid bg-grid-md opacity-[0.04] mask-radial" />
          
          <div className="relative z-10 mx-auto max-w-6xl">
            <h1 className="font-manrope text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-9xl">
              Advancing MJCET's
              <span className="block text-tech-blue">engineering culture.</span>
            </h1>

            <p className="mx-auto mt-12 max-w-3xl font-sans text-lg font-normal text-zinc-300 md:text-xl md:leading-relaxed">
              We are a technical collective dedicated to software excellence, applied research, 
              and shipping student-led engineering artifacts.
            </p>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/join"
                className="group relative inline-flex items-center gap-4 rounded-2xl bg-white px-10 py-5 font-manrope text-sm font-black text-black transition-all hover:scale-[1.02] active:scale-[0.98] focus-ring"
              >
                JOIN THE CHAPTER
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center px-6 py-4 font-mono text-xs font-bold tracking-[0.2em] text-white/70 hover:text-white transition-colors focus-ring rounded-xl"
              >
                OPEN_REGISTRY [03]
              </Link>
            </div>
          </div>

          <div className="mt-32 w-full overflow-hidden">
             <div className="mx-auto flex max-w-fit items-end gap-1.5 px-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="group flex flex-col items-center">
                    <div className="mb-6 flex flex-col items-center opacity-70 transition-opacity group-hover:opacity-100">
                       <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-left">{stat.label}</span>
                       <span className="font-manrope text-2xl font-extrabold mt-1 text-left">{stat.value}</span>
                    </div>
                    <div 
                      className="w-20 overflow-hidden rounded-t-lg bg-white/5 transition-all duration-700 hover:bg-white/10"
                      style={{ height: `${stat.magnitude}px` }}
                    >
                      <div className="h-full w-full bg-gradient-to-t from-tech-blue/40 to-transparent" />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-40">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="quantum-card md:col-span-8 p-12 group min-h-[480px] flex flex-col justify-between border border-white/5 hover:border-tech-blue/30">
                 <div>
                    <div className="flex items-center gap-5 mb-10">
                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tech-blue/10 text-tech-blue">
                          <Code2 className="h-7 w-7" />
                       </div>
                       <span className="font-mono text-[11px] font-black text-tech-blue tracking-[0.2em] uppercase">Core Mission</span>
                    </div>
                    <h2 className="font-manrope text-4xl font-extrabold text-white mb-8 lg:text-6xl text-left tracking-tight">{focusAreas[0].title}</h2>
                    <p className="font-sans text-xl text-zinc-300 max-w-2xl leading-relaxed text-left font-normal">{focusAreas[0].description}</p>
                 </div>

                 <div className="flex items-center gap-16 mt-16 pt-10 border-t border-white/10">
                    <div className="flex flex-col gap-2 text-left">
                       <span className="font-mono text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none">Chapter Status</span>
                       <span className="font-manrope text-lg font-bold text-white uppercase tracking-tight leading-none">Operational // MJCET</span>
                    </div>
                 </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-8">
                 {focusAreas.slice(1).map((area, i) => (
                   <div key={area.title} className="quantum-card flex-1 p-10 group border border-white/5 hover:border-neon-violet/30">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 mb-8 ${i === 0 ? "text-neon-violet" : "text-tech-blue"}`}>
                         <area.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-manrope text-2xl font-extrabold mb-4 text-left text-white tracking-tight">{area.title}</h3>
                      <p className="font-sans text-base text-zinc-400 leading-relaxed text-left font-normal">{area.description}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-40">
           <div className="mb-24 text-left">
              <div className="inline-flex h-1 w-16 bg-tech-blue mb-8 rounded-full" />
              <h2 className="font-manrope text-4xl font-extrabold lg:text-7xl text-white tracking-tight">Event Registry</h2>
              <p className="font-mono text-[11px] text-white/60 font-black tracking-[0.3em] mt-6 uppercase">Operational Sprints // 2026</p>
           </div>

           <div className="relative border-l-2 border-white/10 pl-10 space-y-20">
              {events.map((event) => (
                <div key={event.id} className="relative group">
                   <div className="absolute -left-[51px] top-4 h-5 w-5 rounded-full border-2 border-white/20 bg-[#0B0B0B] flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-tech-blue transition-all group-hover:scale-125" />
                   </div>
                   
                   <div className="quantum-card p-12 border border-white/5 hover:border-tech-blue/40 text-left">
                      <div className="flex items-center justify-between mb-6">
                         <span className="font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase">{event.type}</span>
                         <span className="font-manrope text-sm font-black text-tech-blue tracking-tighter uppercase">{event.date}</span>
                      </div>
                      <h3 className="font-manrope text-3xl font-extrabold text-white mb-10 tracking-tight">{event.name}</h3>
                      <Link 
                        href={`/events/${event.id}`}
                        className="inline-flex items-center gap-4 py-3 pr-4 font-mono text-[11px] font-black tracking-[0.2em] text-white/50 transition-colors hover:text-white focus-ring rounded-lg"
                       >
                         RUN_EXECUTION <ExternalLink className="h-4 w-4" />
                      </Link>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
