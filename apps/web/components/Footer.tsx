"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Github, Instagram, Linkedin, Users } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const Footer: React.FC = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);
  const [showContributions, setShowContributions] = useState(false);
  
  const isAboutPage = pathname === '/about';
  const shouldShowContributions = isAboutPage || showContributions;

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/acmmjcet/main-codebase/contributors');
        const data = await response.json();
        setContributors(Array.isArray(data) ? data : []);
        const total = Array.isArray(data) ? data.reduce((sum: number, c: Contributor) => sum + c.contributions, 0) : 0;
        setTotalContributions(total);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContributors();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true);
    setMessage('');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setMessage('SUBSCRIBED_SUCCESSFULLY');
    setEmail('');
    setIsSubmitting(false);
    setTimeout(() => setMessage(''), 3000);
  };

  const quickLinks: FooterLink[] = [
    { label: 'ABOUT_US', href: '/about' },
    { label: 'ENGINEERING_TEAMS', href: '/team' },
    { label: 'EVENT_REGISTRY', href: '/events' },
    { label: 'TECHNICAL_BLOGS', href: '/blogs' },
    { label: 'CONTACT_POINT', href: '/contact' },
  ];

  const socialLinks: SocialLink[] = [
    { icon: <FaXTwitter className="h-5 w-5" />, href: 'https://x.com/AcmMjcet', label: 'X' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/mjcet_acm', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/acmmjcet', label: 'LinkedIn' },
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/acmmjcet', label: 'GitHub' },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#0B0B0B] text-white pb-20 pt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-left">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 text-left">
            <Link href="/" className="mb-10 inline-block group focus-ring rounded-lg">
              <div className="flex items-center gap-5">
                 <Image src="/logo_without_bg.png" alt="ACM MJCET Student Chapter Logo" width={60} height={60} className="transition-transform group-hover:scale-110" />
                 <div className="flex flex-col text-left">
                    <span className="font-manrope text-lg font-extrabold tracking-tight leading-none text-white text-left">ACM MJCET</span>
                    <span className="font-mono text-[10px] text-white/60 font-bold uppercase leading-none mt-2 text-left">Student Chapter</span>
                 </div>
              </div>
            </Link>
            <p className="mb-12 max-w-md font-sans text-base font-normal leading-relaxed text-zinc-300 text-left text-left">
              Advancing technical excellence and research impact at MJCET through 
              collaborative engineering and open-source contributions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-tech-blue/50 hover:bg-tech-blue/10 hover:text-tech-blue focus-ring active:scale-95"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 text-left">
            <h3 className="mb-10 font-mono text-[11px] font-black tracking-[0.4em] text-tech-blue uppercase text-left">Registry_Index</h3>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="font-mono text-xs font-bold text-white/60 transition-colors hover:text-white hover:text-glow-violet focus-ring rounded-md py-2 px-1 -ml-1 text-left"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="lg:col-span-4 text-left">
            <h3 className="mb-10 font-mono text-[11px] font-black tracking-[0.4em] text-neon-violet uppercase text-left">Chapter Briefings</h3>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm text-left">
              <form onSubmit={handleNewsletterSubmit} className="space-y-6 text-left">
                <div className="text-left">
                  <label htmlFor="email-input" className="block font-manrope text-xs font-bold text-white/70 mb-3 text-left">Email Address</label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="name@domain.tech"
                    aria-label="Email Address"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-mono text-sm text-white placeholder:text-white/20 focus:border-neon-violet/50 focus:outline-none transition-colors focus-ring text-left"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-white px-8 py-4 font-manrope text-xs font-black text-black transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 focus-ring text-center"
                >
                  {isSubmitting ? 'PROCESSING...' : 'SUBSCRIBE_NOW'}
                </button>
              </form>
              {message && <p className="mt-6 font-mono text-[10px] text-green-400 font-black tracking-widest text-left">{message}</p>}
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-white/10">
           <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
              <div className="flex flex-col gap-3 text-center md:text-left">
                 <p className="font-mono text-xs font-bold text-white/40 uppercase tracking-[0.2em] text-left md:text-left">© 2026 ACM MJCET CHAPTER // ALL_SYSTEMS_GO</p>
                 <div className="flex items-center justify-center gap-6 md:justify-start">
                    <Link href="#privacy" className="font-mono text-[10px] font-black text-white/30 hover:text-white transition-colors uppercase focus-ring rounded-md text-left">Privacy_Policy</Link>
                    <span className="text-white/10">|</span>
                    <Link href="#terms" className="font-mono text-[10px] font-black text-white/30 hover:text-white transition-colors uppercase focus-ring rounded-md text-left">Terms_of_Service</Link>
                 </div>
              </div>

              {!isAboutPage && (
                <button 
                  onClick={() => setShowContributions(!showContributions)}
                  className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-3 font-mono text-[11px] font-black tracking-[0.2em] text-white/60 transition-all hover:border-tech-blue/50 hover:text-tech-blue focus-ring"
                >
                  <Users className="h-4 w-4" />
                  {showContributions ? "HIDE_CONTRIBUTORS" : "SHOW_CONTRIBUTORS"}
                </button>
              )}
           </div>

           {shouldShowContributions && (
             <div className="mt-20 animate-in fade-in slide-in-from-bottom-2 duration-700">
               <div className="mb-16 flex items-center justify-center gap-16">
                  <div className="flex flex-col items-center gap-2">
                     <span className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest leading-none text-center">Total_Contributors</span>
                     <span className="font-manrope text-3xl font-black mt-2 text-center">{contributors.length}</span>
                  </div>
                  <div className="h-12 w-px bg-white/10" />
                  <div className="flex flex-col items-center gap-2">
                     <span className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest leading-none text-center">Total_Commits</span>
                     <span className="font-manrope text-3xl font-black mt-2 text-center">{totalContributions}</span>
                  </div>
               </div>
               
               <div className="flex flex-wrap justify-center gap-10">
                  {isLoading ? (
                    <div className="h-12 w-12 animate-spin rounded-full border-2 border-tech-blue/20 border-t-tech-blue" />
                  ) : (
                    contributors.map((c) => (
                      <a key={c.login} href={c.html_url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 focus-ring rounded-xl p-2">
                         <div className="relative">
                            <div className="absolute -inset-2 rounded-full bg-tech-blue/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                            <img src={c.avatar_url} alt={`${c.login}'s Github Profile`} className="relative h-16 w-16 rounded-full border border-white/10 transition-all group-hover:border-tech-blue/50 group-hover:scale-110" />
                         </div>
                         <span className="font-mono text-xs font-bold text-white/50 transition-colors group-hover:text-white uppercase tracking-tighter text-center">{c.login}</span>
                      </a>
                    ))
                  )}
               </div>
             </div>
           )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
