import { Link } from 'wouter';

/* Design: Industrial Minimalism
   - Monochromatic footer with geometric precision
   - Organized information hierarchy
   - Subtle cyan accents for visual interest */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { label: 'Servers', href: '#products' },
      { label: 'Network Switches', href: '#products' },
      { label: 'CPU Processors', href: '#products' },
      { label: 'Memory Modules', href: '#products' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
    Resources: [
      { label: 'Product Brochures', href: '#' },
      { label: 'Technical Support', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-[#00d9ff] rounded-sm flex items-center justify-center group-hover:bg-[#00a8b8] transition-colors">
                <span className="font-mono font-bold text-[#1a1a1a] text-lg">ET</span>
              </div>
              <span className="font-mono font-bold text-lg">ET</span>
            </Link>
            <p className="text-[#b0b0b0] text-sm leading-relaxed">
              Cerdar Cloud Tech LLC is a professional electronics trader providing high-quality servers, switches, and storage devices.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#b0b0b0] hover:text-[#00d9ff] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#4a4a4a] my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#b0b0b0] text-sm">
            &copy; {currentYear} Cerdar Cloud Tech LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#b0b0b0] hover:text-[#00d9ff] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#b0b0b0] hover:text-[#00d9ff] transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-[#b0b0b0] hover:text-[#00d9ff] transition-colors text-sm">
              Contact Us
            </a>
          </div>
        </div>

        {/* Geometric accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d9ff] via-[#00a8b8] to-transparent opacity-30"></div>
      </div>
    </footer>
  );
}
