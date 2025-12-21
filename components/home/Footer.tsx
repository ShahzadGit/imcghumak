// Footer.jsx
import Image from "next/image";
import { Facebook, Youtube, Instagram } from "lucide-react"; // or Heroicons if preferred

export default function Footer() {
  return (
    <footer className="bg-gradient-brand text-[rgb(var(--color-text-white))]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* College Branding Column */}
        <div>
          {/* Replace with actual logo */}
          <Image
            src="/logo.png"
            alt="College Logo"
            width={100}
            height={100}
            className="mb-4"
          />

          <h2 className="text-xl font-semibold">
            Islamabad Model College, Humak
          </h2>

          <address className="not-italic mt-3 leading-relaxed opacity-90">
            Near DHA Phase 2, Islamabad, Pakistan
            <span>
              <br />
              Tel: 051-4493301
            </span>
          </address>
        </div>

        {/* External Links Column */}
        <nav>
          <h3 className="text-lg font-semibold mb-4">External Links</h3>

          <ul className="space-y-3">
            <li>
              <a
                href="https://fde.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(var(--color-primary-hover))] transition"
              >
                Federal Directorate of Education
              </a>
            </li>

            <li>
              <a
                href="https://qau.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(var(--color-secondary-hover))] transition"
              >
                Quaid-i-Azam University, Islamabad
              </a>
            </li>

            <li>
              <a
                href="https://fbise.edu.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(var(--color-primary-hover))] transition"
              >
                Federal Board of Intermediate and Secondary Education
              </a>
            </li>
          </ul>
        </nav>

        {/* Find Us on Map Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Find Us on Map</h3>

          <div className="w-full h-48 rounded-xl overflow-hidden">
            <iframe
              title="College Location"
              src="https://www.google.com/maps?q=33.542446780136096,73.16064662306793&hl=es;z=14&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Social Links Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[rgb(var(--color-primary-hover))] transition"
            >
              <Facebook size={35} />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-[rgb(var(--color-secondary-hover))] transition"
            >
              <Youtube size={35} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[rgb(var(--color-primary-hover))] transition"
            >
              <Instagram size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-6" />

      {/* Bottom Copyright */}
      <div className="text-center py-4 text-sm bg-blue-950">
        © {new Date().getFullYear()} Islamabad Model College, Humak — All Rights
        Reserved.
      </div>
    </footer>
  );
}
