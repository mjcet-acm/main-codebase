"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Plus, X, Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "ABOUT" },
    { href: "/team", label: "TEAMS" },
    { href: "/events", label: "EVENTS" },
    { href: "/blogs", label: "BLOGS" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-6 z-50 flex justify-center px-6">
      <div 
        className={`relative flex items-center gap-4 sm:gap-10 rounded-full bg-[#121212]/90 px-4 py-2 sm:px-10 sm:py-3.5 shadow-2xl backdrop-blur-2xl transition-all duration-500 ${
          isScrolled ? "scale-95 border border-white/10" : "scale-100"
        }`}
      >
        <Link href="/" className="flex items-center gap-4 group z-10 focus-ring rounded-lg">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/5 p-1 transition-transform group-hover:scale-110">
            <Image
              src="/logo_without_bg.png"
              alt="ACM MJCET Chapter Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-manrope text-sm font-extrabold tracking-tight text-white leading-none text-left">ACM MJCET</span>
            <span className="font-mono text-[10px] text-white/60 font-bold uppercase leading-none mt-1.5 text-left">Student Chapter</span>
          </div>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <div className="h-5 w-px bg-white/10" />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-bold tracking-widest text-white/60 transition-all hover:text-white hover:text-glow-violet focus-ring rounded-md py-2 px-1 text-left"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/join"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 sm:px-8 sm:py-3.5 font-manrope text-xs font-black text-black transition-all hover:scale-105 active:scale-95 focus-ring"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">JOIN US</span>
            <span className="sm:hidden">JOIN</span>
          </Link>

          <button 
            className="flex h-12 w-12 items-center justify-center lg:hidden text-white/70 hover:text-white transition-colors focus-ring rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>
      
      <div 
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/98 backdrop-blur-3xl transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-manrope text-5xl font-black tracking-tighter text-white hover:text-tech-blue transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-20 font-mono text-xs text-tech-blue font-bold tracking-[0.3em] uppercase opacity-80">
          ACM MJCET // CORE_HUB
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
