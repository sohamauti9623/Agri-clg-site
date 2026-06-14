import Link from 'next/link';

const quickLinks = [
  { href: '/about', label: 'About the College' },
  { href: '/#facilities', label: 'Facilities' },
  { href: '/#contact', label: 'Admissions Contact' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/60 bg-[#eff4e9] text-[#191d17]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(27,94,32,0.1),transparent_28%)]" />
      <div className="container-shell relative grid gap-10 py-14 md:grid-cols-[1.3fr_.85fr_.9fr]">
        <div>
          <p className="font-display text-2xl font-extrabold text-[#191d17]">Shri Vitthal College of Agriculture</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#41493e]">
            A premium agricultural campus focused on field learning, mentorship, practical labs, and student outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#contact" className="primary-button px-5 py-3 text-xs uppercase tracking-[0.16em]">
              Enquire Now
            </Link>
            <a href="https://wa.me/919999999999" className="secondary-button px-5 py-3 text-xs uppercase tracking-[0.16em]">
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[#41493e] hover:text-[#1b5e20]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">Admissions</p>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-[#41493e]">
            <p>
              Call:
              <a href="tel:+919999999999" className="ml-2 font-semibold text-[#1b5e20]">
                +91 99999 99999
              </a>
            </p>
            <p>
              Email:
              <a href="mailto:admissions@shrivitthalagri.edu.in" className="ml-2 font-semibold text-[#1b5e20]">
                admissions@shrivitthalagri.edu.in
              </a>
            </p>
            <p>Open for counselling, documents, and campus visit guidance.</p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/60 py-5 text-center text-xs text-[#5d6758]">
        © {new Date().getFullYear()} Shri Vitthal College of Agriculture. All rights reserved.
      </div>
    </footer>
  );
}
