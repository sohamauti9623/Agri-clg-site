import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv, MotionSection } from '@/components/Motion';

const facilities = [
  { title: 'Smart Classrooms', text: 'Technology-enabled rooms for visual learning, seminars, and interactive academic sessions.', icon: '🎓' },
  { title: 'Agri Science Labs', text: 'Dedicated soil science, agronomy, horticulture, pathology, seed, and crop practice spaces.', icon: '🔬' },
  { title: 'Instructional Farm', text: 'Hands-on plots for seasonal crop demonstrations, irrigation practice, and field experiments.', icon: '🌾' },
  { title: 'Digital Library', text: 'Reference books, journals, competitive exam resources, and quiet study zones.', icon: '📚' },
  { title: 'Student Support', text: 'Admission counselling, mentoring, placement guidance, and scholarship assistance.', icon: '🤝' },
  { title: 'Campus Life', text: 'Hostel guidance, sports, cultural activities, NSS-style community engagement, and leadership clubs.', icon: '🏛️' },
];

const stats = [
  ['Career-ready', 'agricultural education'],
  ['Field-first', 'practical learning model'],
  ['Mentored', 'student development'],
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#102418] pt-24 text-white">
        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-grain-radial" />
        <div className="container-shell relative grid min-h-[calc(100vh-6rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_0.82fr]">
          <MotionDiv initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-gold backdrop-blur">Admissions Open 2026</span>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Premium agricultural education for the next generation of farm leaders.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              Shri Vitthal College of Agriculture blends rigorous academics, field practice, modern infrastructure, and mentorship to prepare students for agriculture, research, agribusiness, and rural development careers.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/#contact" className="rounded-full bg-gold px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-[#102418] shadow-2xl shadow-gold/20 transition hover:-translate-y-1">Apply for Admission</Link>
              <Link href="/about" className="rounded-full border border-white/25 bg-white/10 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20">Explore College</Link>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={value} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <p className="font-display text-2xl font-black text-gold">{value}</p>
                  <p className="mt-1 text-sm text-white/68">{label}</p>
                </div>
              ))}
            </div>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-8 rounded-[3rem] bg-gold/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur-2xl">
              <Image src="/admission-poster.svg" alt="Admission poster for Shri Vitthal College of Agriculture" width={900} height={1200} priority className="poster-mask h-[68vh] min-h-[540px] w-full rounded-[1.75rem] object-cover" />
            </div>
          </MotionDiv>
        </div>
      </section>

      <MotionSection className="relative -mt-16 z-10">
        <div className="container-shell">
          <div className="glass-card grid gap-8 rounded-[2rem] p-6 md:grid-cols-3 md:p-10">
            <div>
              <span className="eyebrow">Why SVCA</span>
              <h2 className="mt-4 font-display text-3xl font-black text-[#173322]">Built like a modern university, rooted in agriculture.</h2>
            </div>
            <p className="section-copy md:col-span-2">From first-year fundamentals to field demonstrations and career mentoring, the campus experience is designed to make learning practical, confident, and industry-aware.</p>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="facilities" className="py-24 sm:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Facilities</span>
            <h2 className="section-title mt-5">Infrastructure that supports serious learning.</h2>
            <p className="section-copy mt-5">Glassmorphism cards, responsive layouts, and clear calls-to-action create a premium digital presence while highlighting the student experience.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <article key={facility.title} className="glass-card rounded-[2rem] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white/85">
                <div className="grid size-14 place-items-center rounded-2xl bg-leaf/10 text-3xl">{facility.icon}</div>
                <h3 className="mt-6 font-display text-2xl font-black text-[#173322]">{facility.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{facility.text}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#f3ead2] py-24 sm:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="glass-card rounded-[2rem] p-8">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-leaf via-[#2d8b59] to-soil p-8 text-white shadow-glow">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Chairman</p>
              <p className="mt-8 font-display text-4xl font-black leading-tight">Guiding students toward purposeful agricultural service.</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">Chairman Message</span>
            <h2 className="section-title mt-5">Education must connect classrooms with the soil, society, and sustainable progress.</h2>
            <p className="section-copy mt-6">Our vision is to create confident graduates who understand science, respect farmers, use technology responsibly, and lead rural transformation. Shri Vitthal College of Agriculture is committed to disciplined academics, practical exposure, and values-based leadership.</p>
            <p className="mt-8 font-display text-2xl font-black text-soil">— Chairman, Shri Vitthal College of Agriculture</p>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="contact" className="relative overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-grain-radial" />
        <div className="container-shell relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Contact & Admissions</span>
            <h2 className="section-title mt-5">Start your admission journey today.</h2>
            <p className="section-copy mt-5">Reach the admissions team for eligibility, documents, fee guidance, scholarship assistance, campus visits, and counselling.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href="tel:+919999999999" className="glass-card rounded-3xl p-6 font-bold text-[#173322] transition hover:-translate-y-1">Call Admissions<br /><span className="text-leaf">+91 99999 99999</span></a>
              <a href="mailto:admissions@shrivitthalagri.edu.in" className="glass-card rounded-3xl p-6 font-bold text-[#173322] transition hover:-translate-y-1">Email Us<br /><span className="text-leaf">admissions@shrivitthalagri.edu.in</span></a>
            </div>
          </div>
          <form className="glass-card rounded-[2rem] p-6 sm:p-8" aria-label="Admission enquiry form">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-slate-700">Full name<input className="rounded-2xl border-leaf/15 bg-white/80 px-4 py-3" placeholder="Your name" /></label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">Mobile number<input className="rounded-2xl border-leaf/15 bg-white/80 px-4 py-3" placeholder="+91" /></label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">Message<textarea className="min-h-28 rounded-2xl border-leaf/15 bg-white/80 px-4 py-3" placeholder="I want admission details" /></label>
              <button type="button" className="rounded-full bg-leaf px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-leaf/20 transition hover:-translate-y-1 hover:bg-soil">Request Callback</button>
            </div>
          </form>
        </div>
      </MotionSection>
    </>
  );
}
