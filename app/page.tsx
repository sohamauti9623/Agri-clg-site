import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv, MotionSection, riseUp } from '@/components/Motion';

const highlights = [
  'Admission guidance with clear next steps',
  'Field-first learning with practical exposure',
  'Modern labs, digital resources, and mentorship',
];

const stats = [
  { value: 'Career-ready', label: 'agricultural education' },
  { value: 'Field-first', label: 'practical learning model' },
  { value: 'Mentored', label: 'student development' },
];

const facilities = [
  { title: 'Smart Classrooms', text: 'Technology-enabled rooms for visual learning, seminars, and interactive academic sessions.', icon: 'SC' },
  { title: 'Agri Science Labs', text: 'Dedicated soil science, agronomy, horticulture, pathology, seed, and crop practice spaces.', icon: 'AL' },
  { title: 'Instructional Farm', text: 'Hands-on plots for seasonal crop demonstrations, irrigation practice, and field experiments.', icon: 'IF' },
  { title: 'Digital Library', text: 'Reference books, journals, competitive exam resources, and quiet study zones.', icon: 'DL' },
  { title: 'Student Support', text: 'Admission counselling, mentoring, placement guidance, and scholarship assistance.', icon: 'SS' },
  { title: 'Campus Life', text: 'Hostel guidance, sports, cultural activities, community engagement, and leadership clubs.', icon: 'CL' },
];

const valuePoints = [
  'Airy, premium campus presentation',
  'Practical agricultural learning model',
  'Clear pathways to counselling and admission',
];

const contactLinks = [
  {
    href: 'tel:+919999999999',
    label: 'Call Admissions',
    value: '+91 99999 99999',
    external: true,
  },
  {
    href: 'mailto:admissions@shrivitthalagri.edu.in',
    label: 'Email Us',
    value: 'admissions@shrivitthalagri.edu.in',
    external: true,
  },
  {
    href: 'https://wa.me/919999999999?text=Hello%20Shri%20Vitthal%20College%20of%20Agriculture%2C%20I%20want%20admission%20details.',
    label: 'WhatsApp',
    value: 'Chat with admissions',
    external: true,
  },
  {
    href: '/about',
    label: 'Learn More',
    value: 'Explore the college story',
    external: false,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(27,94,32,0.14),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.58)_0%,rgba(247,251,241,0.28)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(27,94,32,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(27,94,32,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

        <div className="container-shell relative grid gap-12 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-24">
          <MotionDiv
            variants={riseUp}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <span className="eyebrow">Admissions Open 2026-27</span>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-[#191d17] sm:text-6xl lg:text-7xl">
              <span className="block">Premium agricultural education</span>
              <span className="block text-[#1b5e20]">for future farm leaders.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#41493e] sm:text-xl">
              Shri Vitthal College of Agriculture blends rigorous academics, field practice, modern infrastructure, and mentorship to prepare students for agriculture, research, agribusiness, and rural development careers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item, index) => (
                <MotionDiv
                  key={item}
                  variants={riseUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.08 * index}
                  className="soft-chip"
                >
                  {item}
                </MotionDiv>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/#contact" className="primary-button">
                Apply for Admission
              </Link>
              <Link href="/about" className="secondary-button">
                Explore College
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <MotionDiv
                  key={stat.value}
                  variants={riseUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.12 * index}
                  className="glass-card rounded-[1.75rem] p-5"
                >
                  <p className="font-display text-2xl font-extrabold text-[#1b5e20]">{stat.value}</p>
                  <p className="mt-1 text-sm leading-6 text-[#5d6758]">{stat.label}</p>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="hero-scene relative mx-auto w-full max-w-[34rem] lg:max-w-[38rem]"
          >
            <MotionDiv
              animate={{ y: [0, -12, 0], rotateX: [10, 5, 10], rotateY: [-10, -5, -10] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ rotateX: 0, rotateY: 0, scale: 1.02 }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <MotionDiv animate={{ y: [0, -14, 0] }} transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }} className="hero-orb float-slow -left-8 top-10 size-40 bg-[#d4af37]/20" />
              <MotionDiv animate={{ y: [0, 12, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="hero-orb float-gentle -right-4 bottom-10 size-56 bg-[#1b5e20]/20" />

              <div className="hero-frame">
                <div className="absolute inset-3 rounded-[2rem] border border-white/50 bg-[linear-gradient(145deg,rgba(255,255,255,0.44),rgba(255,255,255,0.12))]" />
                <div className="hero-surface">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.48),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.5))]" />
                  <Image
                    src="/hero-poster.jpg"
                    alt="Admissions poster for Shri Vitthal College of Agriculture"
                    width={1200}
                    height={1600}
                    priority
                    sizes="(max-width: 1024px) 92vw, 620px"
                    className="relative z-10 h-[72vh] min-h-[640px] w-full object-contain object-center p-2 sm:p-4"
                  />

                  <div className="hero-label absolute left-5 top-5 z-20">
                    Shri Vitthal College of Agriculture
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 z-20 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="rounded-[1.5rem] border border-white/70 bg-white/80 p-4 backdrop-blur-xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">Focus</p>
                      <p className="mt-1 text-sm leading-6 text-[#41493e]">
                        Modern campus experience, guided admissions, and practical agricultural learning.
                      </p>
                    </div>
                    <div className="rounded-full border border-white/70 bg-[#1b5e20] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1b5e20]/20">
                      Apply Now
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      <MotionSection className="relative -mt-6 z-10 pb-8">
        <div className="container-shell">
          <div className="glass-card grid gap-8 rounded-[2rem] p-6 md:grid-cols-[1fr_1.15fr] md:items-center md:p-10">
            <div>
              <span className="eyebrow">Why SVCA</span>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold tracking-tight text-[#191d17] sm:text-4xl">
                Built like a modern university, rooted in agriculture.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {valuePoints.map((item, index) => (
                <MotionDiv
                  key={item}
                  variants={riseUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={0.08 * index}
                  className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5 text-sm leading-7 text-[#41493e] backdrop-blur-xl"
                >
                  {item}
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="facilities" className="py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Facilities</span>
            <h2 className="section-title mt-5">Infrastructure that supports serious learning.</h2>
            <p className="section-copy mt-5">
              Glass cards, generous spacing, and a softer visual rhythm create a premium digital presence while keeping the academic content easy to scan.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, index) => (
              <MotionDiv
                key={facility.title}
                variants={riseUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={0.06 * index}
              >
                <article className="glass-card h-full rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1.5 hover:bg-white/90">
                  <div className="grid size-14 place-items-center rounded-2xl bg-[#1b5e20]/10 text-sm font-semibold tracking-[0.2em] text-[#1b5e20]">
                    {facility.icon}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-extrabold text-[#191d17]">{facility.title}</h3>
                  <p className="mt-3 leading-7 text-[#41493e]">{facility.text}</p>
                </article>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-20 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-[2rem] p-4"
            style={{ perspective: 1800 }}
          >
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,#1b5e20_0%,#2e7d32_55%,#d4af37_100%)] p-8 text-white shadow-glow">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">Chairman</p>
              <p className="mt-8 max-w-md font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Guiding students toward purposeful agricultural service.
              </p>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/80">
                A disciplined learning environment, practical exposure, and strong mentorship create graduates who can work with farmers, industries, and communities.
              </p>
            </div>
          </MotionDiv>

          <div>
            <span className="eyebrow">Chairman Message</span>
            <h2 className="section-title mt-5">
              Education must connect classrooms with the soil, society, and sustainable progress.
            </h2>
            <p className="section-copy mt-6">
              Our vision is to create confident graduates who understand science, respect farmers, use technology responsibly, and lead rural transformation. Shri Vitthal College of Agriculture is committed to disciplined academics, practical exposure, and values-based leadership.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Academic discipline', 'Field confidence', 'Student mentoring'].map((item, index) => (
                <MotionDiv
                  key={item}
                  variants={riseUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={0.08 * index}
                  className="rounded-[1.5rem] border border-[#1b5e20]/10 bg-white/75 p-5 text-sm font-medium text-[#41493e] shadow-sm backdrop-blur-xl"
                >
                  {item}
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="contact" className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(27,94,32,0.12),transparent_28%)]" />
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.94fr] lg:items-start">
          <div>
            <span className="eyebrow">Contact & Admissions</span>
            <h2 className="section-title mt-5">Start your admission journey today.</h2>
            <p className="section-copy mt-5">
              Reach the admissions team for eligibility, documents, fee guidance, scholarship assistance, campus visits, and counselling.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactLinks.map((item, index) => (
                <MotionDiv
                  key={item.label}
                  variants={riseUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  custom={0.05 * index}
                >
                  {item.external ? (
                    <a href={item.href} className="glass-card block rounded-[1.5rem] p-6 font-semibold text-[#191d17] hover:-translate-y-1">
                      <span className="block text-xs uppercase tracking-[0.2em] text-[#1b5e20]">{item.label}</span>
                      <span className="mt-2 block text-base text-[#41493e]">{item.value}</span>
                    </a>
                  ) : (
                    <Link href={item.href} className="glass-card block rounded-[1.5rem] p-6 font-semibold text-[#191d17] hover:-translate-y-1">
                      <span className="block text-xs uppercase tracking-[0.2em] text-[#1b5e20]">{item.label}</span>
                      <span className="mt-2 block text-base text-[#41493e]">{item.value}</span>
                    </Link>
                  )}
                </MotionDiv>
              ))}
            </div>
          </div>

          <MotionDiv
            initial={{ opacity: 0, x: 20, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
            style={{ perspective: 1600 }}
          >
            <form className="grid gap-5" aria-label="Admission enquiry form">
              <label className="grid gap-2 text-sm font-semibold text-[#41493e]">
                Full name
                <input className="input-field" name="name" autoComplete="name" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#41493e]">
                Mobile number
                <input className="input-field" name="phone" autoComplete="tel" inputMode="tel" placeholder="+91" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#41493e]">
                Email address
                <input className="input-field" name="email" autoComplete="email" inputMode="email" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#41493e]">
                Message
                <textarea className="input-field min-h-32" name="message" placeholder="I want admission details" />
              </label>
              <button type="button" className="accent-button w-full py-4 uppercase tracking-[0.18em]">
                Request Callback
              </button>
              <p className="text-sm leading-7 text-[#5d6758]">
                The form is styled for enquiry capture and can later be wired to server actions or WhatsApp flow.
              </p>
            </form>
          </MotionDiv>
        </div>
      </MotionSection>
    </>
  );
}
