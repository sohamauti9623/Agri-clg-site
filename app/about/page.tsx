import type { Metadata } from 'next';
import { MotionSection } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Shri Vitthal College of Agriculture: vision, mission, affiliation, infrastructure, and leadership commitment.',
  alternates: { canonical: '/about' },
};

const pillars = [
  { title: 'Vision', body: 'To be a respected agricultural institution that develops knowledgeable, ethical, and innovation-oriented graduates for sustainable farming and rural prosperity.' },
  { title: 'Mission', body: 'To deliver strong academic foundations, practical farm exposure, research attitude, entrepreneurship skills, and community responsibility through student-centric education.' },
  { title: 'Affiliation', body: 'The college is presented as an agriculture-focused higher education campus aligned with statutory academic norms, curriculum expectations, and quality-driven institutional development.' },
];

const infrastructure = ['Lecture halls with smart learning support', 'Soil, crop, seed, and plant science laboratories', 'Instructional farm and demonstration plots', 'Library, reading room, and digital learning resources', 'Student mentoring, counselling, and placement guidance', 'Campus amenities that support safe and disciplined learning'];

const leaders = [
  { role: 'Chairman', focus: 'Strategic direction, values-based governance, and long-term institutional growth.' },
  { role: 'Principal', focus: 'Academic excellence, faculty coordination, curriculum delivery, and student progress.' },
  { role: 'Faculty Mentors', focus: 'Practical guidance, field learning, research mindset, and career preparation.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#102418] pb-24 pt-36 text-white sm:pt-40">
        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-grain-radial" />
        <div className="container-shell relative">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-gold backdrop-blur">About SVCA</span>
          <h1 className="mt-7 max-w-5xl font-display text-5xl font-black leading-tight tracking-tight sm:text-6xl">A college committed to agricultural knowledge, practical skills, and rural leadership.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">Shri Vitthal College of Agriculture creates a premium, disciplined, and student-friendly academic environment where classroom learning is strengthened by field work, laboratory exposure, and mentoring.</p>
        </div>
      </section>

      <MotionSection className="py-24">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="glass-card rounded-[2rem] p-8">
              <h2 className="font-display text-3xl font-black text-[#173322]">{pillar.title}</h2>
              <p className="mt-5 leading-8 text-slate-700">{pillar.body}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-[#f3ead2] py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">Infrastructure</span>
            <h2 className="section-title mt-5">Campus resources designed for academic depth and employability.</h2>
            <p className="section-copy mt-5">The college experience combines institutional discipline with accessible learning spaces, practical exposure, and student support systems.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {infrastructure.map((item) => (
              <div key={item} className="rounded-3xl border border-white/60 bg-white/70 p-5 font-bold text-slate-800 shadow-lg shadow-leaf/5 backdrop-blur">{item}</div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title mt-5">Guided by governance, academic planning, and faculty mentorship.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {leaders.map((leader) => (
              <article key={leader.role} className="glass-card rounded-[2rem] p-8 text-center">
                <div className="mx-auto grid size-20 place-items-center rounded-full bg-leaf/10 text-3xl">🌿</div>
                <h3 className="mt-6 font-display text-2xl font-black text-[#173322]">{leader.role}</h3>
                <p className="mt-4 leading-7 text-slate-700">{leader.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
