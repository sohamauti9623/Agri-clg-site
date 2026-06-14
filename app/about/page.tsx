import type { Metadata } from 'next';
import Link from 'next/link';
import { MotionSection } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Shri Vitthal College of Agriculture: vision, mission, affiliation, infrastructure, and leadership commitment.',
  alternates: { canonical: '/about' },
};

const pillars = [
  {
    title: 'Vision',
    body: 'To be a respected agricultural institution that develops knowledgeable, ethical, and innovation-oriented graduates for sustainable farming and rural prosperity.',
  },
  {
    title: 'Mission',
    body: 'To deliver strong academic foundations, practical farm exposure, research attitude, entrepreneurship skills, and community responsibility through student-centric education.',
  },
  {
    title: 'Affiliation',
    body: 'The college is presented as an agriculture-focused higher education campus aligned with statutory academic norms, curriculum expectations, and quality-driven institutional development.',
  },
];

const infrastructure = [
  'Lecture halls with smart learning support',
  'Soil, crop, seed, and plant science laboratories',
  'Instructional farm and demonstration plots',
  'Library, reading room, and digital learning resources',
  'Student mentoring, counselling, and placement guidance',
  'Campus amenities that support safe and disciplined learning',
];

const leaders = [
  { role: 'Chairman', focus: 'Strategic direction, values-based governance, and long-term institutional growth.' },
  { role: 'Principal', focus: 'Academic excellence, faculty coordination, curriculum delivery, and student progress.' },
  { role: 'Faculty Mentors', focus: 'Practical guidance, field learning, research mindset, and career preparation.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(27,94,32,0.11),transparent_34%)]" />
        <div className="container-shell grid gap-10 pb-20 pt-10 lg:grid-cols-[1fr_0.76fr] lg:items-center lg:pb-24">
          <div>
            <span className="eyebrow">About SVCA</span>
            <h1 className="mt-7 max-w-5xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-[#191d17] sm:text-6xl">
              A college committed to agricultural knowledge, practical skills, and rural leadership.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#41493e] sm:text-xl">
              Shri Vitthal College of Agriculture creates a premium, disciplined, and student-friendly academic environment where classroom learning is strengthened by field work, laboratory exposure, and mentoring.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Modern infrastructure', 'Practical learning', 'Guided admissions'].map((item) => (
                <span key={item} className="soft-chip">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#contact" className="primary-button">
                Enquire Now
              </Link>
              <Link href="/#facilities" className="secondary-button">
                View Facilities
              </Link>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { value: '3', label: 'core academic pillars' },
                { value: '6', label: 'infrastructure areas' },
                { value: '1', label: 'student-first experience' },
                { value: '24/7', label: 'premium visual clarity' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5">
                  <p className="font-display text-3xl font-extrabold text-[#1b5e20]">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-[#41493e]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="py-20 sm:py-24">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="glass-card rounded-[1.75rem] p-8">
              <h2 className="font-display text-3xl font-extrabold text-[#191d17]">{pillar.title}</h2>
              <p className="mt-5 leading-8 text-[#41493e]">{pillar.body}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="py-20 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="eyebrow">Infrastructure</span>
            <h2 className="section-title mt-5">Campus resources designed for academic depth and employability.</h2>
            <p className="section-copy mt-5">
              The college experience combines institutional discipline with accessible learning spaces, practical exposure, and student support systems.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {infrastructure.map((item) => (
              <div key={item} className="glass-card rounded-[1.5rem] p-5 font-semibold text-[#191d17]">
                <span className="block text-sm leading-7 text-[#41493e]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title mt-5">Guided by governance, academic planning, and faculty mentorship.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {leaders.map((leader) => (
              <article key={leader.role} className="glass-card rounded-[1.75rem] p-8 text-center">
                <div className="mx-auto grid size-20 place-items-center rounded-full bg-[#1b5e20]/10 text-sm font-semibold tracking-[0.22em] text-[#1b5e20]">
                  SV
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-[#191d17]">{leader.role}</h3>
                <p className="mt-4 leading-7 text-[#41493e]">{leader.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
