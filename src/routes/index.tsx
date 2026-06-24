import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Menu, X, Phone, Mail, MapPin, Instagram, Youtube, Twitter, Facebook, ArrowRight, Trophy, Zap, Users, Target, Calendar, Star, Quote } from "lucide-react";

import heroDunk from "@/assets/hero-dunk.jpg";
import trainerImg from "@/assets/trainer.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Hoops Academy — Elite Basketball Training" },
      { name: "description", content: "Elite basketball training focused on skill development, vertical jump, speed and game performance." },
      { property: "og:title", content: "Elite Hoops Academy" },
      { property: "og:description", content: "Elite basketball training focused on skill development, vertical jump, speed and game performance." },
    ],
  }),
  component: Home,
});

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold tracking-wide">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">EH</span>
          <span className="hidden sm:inline">ELITE HOOPS<span className="text-primary">.</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden lg:inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
          Book a Session <ArrowRight className="h-4 w-4" />
        </a>
        <button
          aria-label="Toggle menu"
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-up">
          <div className="container-x py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-base font-medium text-foreground/90 hover:text-primary">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
              Book a Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroDunk} alt="Basketball player dunking" width={1600} height={1200} className="h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container-x relative z-10 pt-28 pb-24 md:pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Now Enrolling — Spring Season
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] uppercase animate-fade-up" style={{ animationDelay: "0.1s" }}>
            ELITE BASKETBALL TRAINING <br />
            FROM THE BEST OF THE BEST
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Elite basketball training focused on skill development, vertical jump, speed and game performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]">
              Book a Session <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#programs" className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 backdrop-blur px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition">
              View Programs
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-4 max-w-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { k: "500+", v: "Athletes Trained" },
              { k: "12\"", v: "Avg Vertical Gain" },
              { k: "15+", v: "Years Experience" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-primary pl-3">
                <dt className="font-display text-2xl md:text-3xl font-bold">{s.k}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-y border-border bg-background/70 backdrop-blur overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-3 w-max">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 px-6 font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
              <span>Skill Development</span><span className="text-primary">●</span>
              <span>Vertical Jump</span><span className="text-primary">●</span>
              <span>Speed & Agility</span><span className="text-primary">●</span>
              <span>Game IQ</span><span className="text-primary">●</span>
              <span>Strength Training</span><span className="text-primary">●</span>
              <span>Recovery</span><span className="text-primary">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 border border-primary/30 rounded-md -z-10" />
          <img src={trainerImg} alt="Coach Marcus Reed" width={1024} height={1280} loading="lazy" className="w-full h-[500px] md:h-[640px] object-cover rounded-md" />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-5 rounded-md max-w-[220px]">
            <div className="font-display text-3xl font-bold leading-none">15+</div>
            <div className="text-xs uppercase tracking-wider mt-1 font-semibold">Years coaching elite athletes</div>
          </div>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">About the Coach</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
            Built by a player. <br /> Forged for the <span className="text-primary">game.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Coach Marcus Reed is a former Division I guard turned performance specialist. After playing professionally overseas, he returned home to build a program that develops complete athletes — not just scorers. His method blends biomechanics, sport science, and old-school grit.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Trophy, t: "D1 Player", d: "4-year scholarship athlete" },
              { icon: Star, t: "Pro Experience", d: "5 seasons overseas" },
              { icon: Users, t: "Certified Trainer", d: "NSCA & USA Basketball" },
              { icon: Target, t: "Results Driven", d: "500+ athletes developed" },
            ].map((x) => (
              <div key={x.t} className="flex gap-3 border border-border rounded-md p-4 hover:border-primary/60 transition">
                <x.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{x.t}</div>
                  <div className="text-sm text-muted-foreground">{x.d}</div>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 border-l-4 border-primary pl-5 italic text-foreground/90">
            "Our mission is simple — outwork yesterday. Every rep, every drill, every athlete walks out stronger than they walked in."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

const PROGRAMS = [
  { icon: Target, title: "Individual Training", desc: "1-on-1 sessions tailored to your position, level, and goals. Skill work, shooting mechanics, and film breakdown.", price: "From $85/session", tag: "Most Popular" },
  { icon: Users, title: "Small Group Training", desc: "High-intensity 3–6 player sessions. Compete, learn, and grow with athletes pushing your level.", price: "From $45/session" },
  { icon: Zap, title: "Vertical Jump Program", desc: "8-week explosive performance system. Avg gain of 8–12 inches through plyometrics, strength, and reactive training.", price: "8-week block · $599", tag: "Results Guaranteed" },
  { icon: Calendar, title: "Holiday Camps", desc: "Multi-day intensive camps during school breaks. Full-day immersion in skills, scrimmages, and recovery.", price: "From $299/camp" },
];

function Programs() {
  return (
    <section id="programs" className="relative py-24 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What We Offer</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
              Training <span className="text-primary">Programs</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Every program is structured around measurable progress — track your stats from day one to game day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRAMS.map((p, i) => (
            <article key={p.title} className="group relative flex flex-col bg-card border border-border rounded-md p-6 hover:border-primary transition-all duration-300 hover:-translate-y-1">
              {p.tag && (
                <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {p.tag}
                </span>
              )}
              <div className="grid h-12 w-12 place-items-center rounded-md bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
              <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{p.price}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">0{i + 1}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition">
            Find Your Program <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Jordan M.", role: "HS Senior · D1 Commit", quote: "Added 11 inches to my vertical in one off-season. Coach Reed's program got me looks from schools I never thought possible.", stat: "+11\" Vertical" },
  { name: "Sarah K.", role: "Club Captain · 16U", quote: "My handle and confidence transformed. Went from bench to starting point guard in one season. Best decision my family made.", stat: "Starter PG" },
  { name: "Tyrese B.", role: "Middle School", quote: "I came in barely making layups. Now I'm dropping 20+ a game and our team made playoffs for the first time in 5 years.", stat: "20+ PPG" },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Real Results</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            Hear from <span className="text-primary">our athletes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="relative flex flex-col bg-card border border-border rounded-md p-7 hover:border-primary/60 transition">
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <blockquote className="text-foreground/90 leading-relaxed flex-1">"{t.quote}"</blockquote>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <figcaption>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{t.role}</div>
                </figcaption>
                <div className="text-right">
                  <div className="font-display text-lg font-bold text-primary">{t.stat}</div>
                </div>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { l: "Avg Vertical Gain", b: "22\"", a: "33\"" },
            { l: "40-Yard Sprint", b: "5.2s", a: "4.6s" },
            { l: "3PT %", b: "28%", a: "41%" },
            { l: "Free Throw %", b: "62%", a: "84%" },
          ].map((m) => (
            <div key={m.l} className="bg-card border border-border rounded-md p-5 text-center">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{m.l}</div>
              <div className="mt-3 flex items-baseline justify-center gap-2">
                <span className="font-display text-xl text-muted-foreground line-through">{m.b}</span>
                <ArrowRight className="h-4 w-4 text-primary" />
                <span className="font-display text-2xl md:text-3xl font-bold text-primary">{m.a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: g3, label: "Team Training", span: "md:col-span-2 md:row-span-2" },
    { src: g1, label: "Skill Work" },
    { src: g2, label: "Game Highlights" },
    { src: g4, label: "Vertical Training", span: "md:col-span-2" },
  ];
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-card/30">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">In The Gym</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
              The <span className="text-primary">Grind</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">A look inside our facility — training sessions, player highlights, and moments that define the program.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[240px] gap-3">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-md group ${img.span || ""}`}>
              <img src={img.src} alt={img.label} width={1024} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-60 transition" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-display text-lg uppercase font-bold">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Get Started</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
            Book your <br /><span className="text-primary">first session.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">Reach out to schedule a free assessment. We'll build a custom training plan for your goals.</p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "Call", value: "(555) 234-8821" },
              { icon: Mail, label: "Email", value: "train@elitehoopsacademy.com" },
              { icon: MapPin, label: "Facility", value: "2840 Court Street, Building B\nAustin, TX 78704" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.label}</div>
                  <div className="font-medium whitespace-pre-line">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 bg-card border border-border rounded-md p-6 md:p-10">
          {submitted ? (
            <div className="text-center py-16">
              <div className="grid h-16 w-16 mx-auto place-items-center rounded-full bg-primary/10 text-primary mb-5">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase">You're In.</h3>
              <p className="mt-2 text-muted-foreground">We'll be in touch within 24 hours to schedule your assessment.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="First Name" name="first" />
              <Field label="Last Name" name="last" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Program of Interest</label>
                <select name="program" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:border-primary focus:outline-none">
                  <option>Individual Training</option>
                  <option>Small Group Training</option>
                  <option>Vertical Jump Program</option>
                  <option>Holiday Camp</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Tell us about your goals</label>
                <textarea name="message" rows={4} className="w-full bg-background border border-border rounded-md px-4 py-3 focus:border-primary focus:outline-none resize-none" />
              </div>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition">
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider font-semibold mb-2">{label}</label>
      <input required name={name} type={type} className="w-full bg-background border border-border rounded-md px-4 py-3 focus:border-primary focus:outline-none" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="container-x py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">EH</span>
            ELITE HOOPS<span className="text-primary">.</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">Building elite basketball athletes through skill, strength, and relentless work.</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Youtube, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-md border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider font-bold text-primary mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => <li key={n.href}><a className="hover:text-foreground" href={n.href}>{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider font-bold text-primary mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>(555) 234-8821</li>
            <li>train@elitehoopsacademy.com</li>
            <li>2840 Court Street, Austin TX</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Elite Hoops Academy. All rights reserved.</span>
          <span>Train Hard. Train Smart.</span>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Programs />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
