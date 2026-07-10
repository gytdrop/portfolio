import { 
  ArrowUpRight, 
  Sparkle, 
  Palette, 
  PenTool, 
  Layers, 
  Type, 
  Aperture, 
  Camera, 
  Brush, 
  Box, 
  Wand2,
  Cpu,
  Bot,
  Atom,
  Terminal,
  Database
} from 'lucide-react';

export default function App() {
  // Configured arrays for the fluid marquee scrolling rows (mapped Figma, Framer, Chrome to Cpu, Atom, Terminal, Database)
  const row1Icons = [Cpu, Terminal, Palette, PenTool, Layers, Type, Aperture, Database];
  const row2Icons = [Camera, Brush, Box, Wand2, Atom, Bot, Type, Layers];

  return (
    <div className="min-h-screen lg:h-screen w-full bg-[#0a0a0a] text-white font-sans antialiased px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 flex flex-col justify-between box-border overflow-x-hidden">
      
      {/* Top Header Row */}
      <header className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 lg:mb-6">
        <div className="max-w-3xl">
          <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-normal tracking-tight mb-4">
            Hi, I'm Shaik Akthar Ali!
          </h1>
          <p className="text-sm md:text-[15px] leading-[1.6] text-white/60 max-w-3xl">
            A Computer Science & Engineering student at the <span className="text-white font-medium">Central University of Haryana</span> and Lead at <span className="text-white font-medium">ByteCode</span>. I build scalable full-stack applications, physical robotic configurations, and high-performance routing systems.
          </p>
        </div>
        <a 
          href="https://discord.com/channels/gytdrop" // Replace with your actual LinkedIn link
          target="_blank" 
          rel="noopener noreferrer"
          className="liquid-glass text-center whitespace-nowrap px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium tracking-tight hover:bg-white/5 transition-colors self-start md:self-auto"
        >
          Let's Team Up Today
        </a>
      </header>

      {/* Grid Layout Container */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-grow h-full items-stretch">
        
        {/* Column 1 - Background & Timeline Card */}
        <section className="relative rounded-2xl bg-black overflow-hidden flex flex-col justify-between p-5 md:p-6 min-h-[380px] md:min-h-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
          
          <div className="relative z-10 w-full flex items-center justify-center gap-2">
            <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
            <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-medium">DEPLOYMENTS & ROLES</span>
            <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
          </div>

          <div className="relative z-10 w-full grid grid-cols-[auto_auto_1fr] items-center gap-x-3 gap-y-3 text-[13px] text-white/90">
            <div>2026-Now</div>
            <Sparkle className="h-3 w-3 text-cyan-400" strokeWidth={1.5} />
            <div className="font-light">Lead · <span className="text-white/60">ByteCode Club</span></div>

            <div>2026</div>
            <Sparkle className="h-3 w-3 text-cyan-400" strokeWidth={1.5} />
            <div className="font-light">Finalist · <span className="text-white/60">Odoo Hackathon</span></div>

            <div>2026</div>
            <Sparkle className="h-3 w-3 text-cyan-400" strokeWidth={1.5} />
            <div className="font-light">Workshop & Winner · <span className="text-white/60">IIT Madras Quantum</span></div>

            <div>2025-2026</div>
            <Sparkle className="h-3 w-3 text-cyan-400" strokeWidth={1.5} />
            <div className="font-light">Finalist (Team Lead) · <span className="text-white/60">SIH</span></div>

            <div>2024-Now</div>
            <Sparkle className="h-3 w-3 text-cyan-400" strokeWidth={1.5} />
            <div className="font-light">B.Tech CSE · <span className="text-white/60">Central Univ. of Haryana</span></div>
          </div>
        </section>

        {/* Column 2 - Client Voice & Metrics */}
        <section className="grid grid-rows-[auto_1fr] gap-4 md:gap-5">
          {/* Top - Hackathon History */}
          <div className="noise-overlay rounded-2xl bg-[#1e2d2d] p-5 md:p-6 flex flex-col justify-between gap-4 overflow-hidden">
            <div className="relative z-10 flex items-center justify-start gap-2">
              <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
              <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-medium">BATTLEGROUND PROOF</span>
              <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
            </div>
            <div className="relative z-10 space-y-3 text-[13px] leading-[1.5] text-white/90 font-light">
              <div className="flex items-start gap-2">
                <Cpu className="h-4 w-4 mt-0.5 text-cyan-400 flex-shrink-0" strokeWidth={1.5} />
                <div><span className="font-medium text-white">AMD Hackathon</span> — Built high-performance cloud compute pipelines inside the Bengaluru Palace.</div>
              </div>
              <div className="flex items-start gap-2">
                <Bot className="h-4 w-4 mt-0.5 text-orange-400 flex-shrink-0" strokeWidth={1.5} />
                <div><span className="font-medium text-white">Bonfiglioli</span> — Programmed and integrated physical edge robotic configurations.</div>
              </div>
              <div className="flex items-start gap-2">
                <Atom className="h-4 w-4 mt-0.5 text-yellow-400 flex-shrink-0" strokeWidth={1.5} />
                <div><span className="font-medium text-white">iQOO Hackathon</span> — Optimized mobile ecosystem on-device hardware interactions.</div>
              </div>
            </div>
          </div>

          {/* Bottom - Core Project Display */}
          <div className="relative rounded-2xl bg-black overflow-hidden flex flex-col justify-between p-5 md:p-6 min-h-[220px] md:min-h-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="relative z-10 flex items-center gap-2">
              <Database className="h-4 w-4 text-cyan-400" strokeWidth={1.5} />
              <span className="font-tech text-xs tracking-wider font-semibold">FLAGSHIP BUILD</span>
            </div>

            <div className="relative z-10 my-auto">
              <h3 className="text-2xl font-normal font-sans tracking-tight mb-1 text-white">MessMate Ecosystem</h3>
              <p className="text-xs text-white/70 font-light max-w-xs leading-relaxed">
                Full-stack PHP/MariaDB multi-role management infrastructure deployed to optimize relational operations.
              </p>
            </div>

            <div className="relative z-10 text-[11px] text-white/50 tracking-wider uppercase font-mono">
              PHP 8.x · MySQL · Relational Integrity
            </div>
          </div>
        </section>

        {/* Column 3 - Software Tiles & Contact Matrix */}
        <section className="grid grid-rows-[1fr_auto] gap-4 md:gap-5">
          {/* Top - Daily Software Stack */}
          <div className="relative rounded-2xl bg-black overflow-hidden flex flex-col justify-between py-5 md:py-6 min-h-[260px] md:min-h-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
            
            <div className="relative z-10 w-full flex items-center justify-center gap-2 px-6">
              <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
              <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-medium">ENGINEERING STACK</span>
              <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
            </div>

            {/* Marquee Elements */}
            <div className="relative z-10 w-full my-auto flex flex-col gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              {/* Row 1 */}
              <div className="flex w-max gap-3 animate-marquee-left">
                {[...row1Icons, ...row1Icons].map((Icon, idx) => (
                  <div key={`r1-${idx}`} className="liquid-glass flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-xl flex-shrink-0 text-white/80">
                    <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex w-max gap-3 animate-marquee-right">
                {[...row2Icons, ...row2Icons].map((Icon, idx) => (
                  <div key={`r2-${idx}`} className="liquid-glass flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-xl flex-shrink-0 text-white/80">
                    <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden"></div>
          </div>

          {/* Bottom - Contact Matrix */}
          <div className="noise-overlay rounded-2xl bg-[#1d2735] p-5 md:p-6 flex flex-col justify-between gap-6 overflow-hidden relative">
            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <Sparkle className="h-3 w-3 text-cyan-400" strokeWidth={1.5} />
                <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-medium">CONNECT MATRIX</span>
                <Sparkle className="h-3 w-3 text-cyan-400" strokeWidth={1.5} />
              </div>
              <a 
                href="https://linkedin.com" // Replace with your LinkedIn profile link
                target="_blank" 
                rel="noopener noreferrer"
                className="liquid-glass h-9 w-9 rounded-full flex items-center justify-center text-white/90 hover:bg-white/5 transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
            
            <div className="relative z-10 font-mono space-y-1.5 text-xs sm:text-sm">
              <div className="text-white/90 flex justify-between">
                <span className="text-white/40 uppercase font-sans tracking-wider">Email:</span>
                <span className="font-sans font-normal"><a href="mailto:your.email@gmail.com" className="hover:text-cyan-400 transition-colors">your.email@gmail.com</a></span>
              </div>
              <div className="text-white/90 flex justify-between">
                <span className="text-white/40 uppercase font-sans tracking-wider">GitHub:</span>
                <span className="font-sans font-normal"><a href="https://github.com/gytdrop" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">gytdrop</a></span>
              </div>
              <div className="text-white/90 flex justify-between">
                <span className="text-white/40 uppercase font-sans tracking-wider">LinkedIn:</span>
                <span className="font-sans font-normal">Shaik Akthar Ali</span>
              </div>
              <div className="text-white/90 flex justify-between">
                <span className="text-white/40 uppercase font-sans tracking-wider">Discord:</span>
                <span>gytdrop</span>
              </div>
              <div className="text-white/90 flex justify-between">
                <span className="text-white/40 uppercase font-sans tracking-wider">Console:</span>
                <span className="font-sans font-normal text-cyan-400">gytdrop@cuh</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
