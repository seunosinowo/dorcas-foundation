import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-lg p-2">
                <Image
                  src="/image/logo.png"
                  alt="Dorcas Scholars Fund logo"
                  width={120}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed max-w-md">
              Finacially Empowering African youth with trade skills scholarships. Continuing the legacy of love and compassion that Dorcas Igbokwe lived every day.
            </p>
            <p className="mt-4 text-sm text-secondary-foreground/60 flex items-center gap-1">
              Made with <Heart size={14} className="text-accent fill-accent" /> in her memory
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/give", label: "Donate" },
                { href: "/partner", label: "Become a Partner" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@dorcasigbokwe.org" className="hover:text-secondary-foreground transition-colors">
                  info@dorcasigbokwe.org
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+2348056679806" className="hover:text-secondary-foreground transition-colors">
                  +234 805 667 9806
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <p className="text-center text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} Dorcas Scholars Fund. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
