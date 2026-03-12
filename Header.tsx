import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

/* Design: Industrial Minimalism
   - Monochromatic base with cyan accents
   - Asymmetric layout with generous spacing
   - Geometric precision in typography */

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e0e0e0]">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#00d9ff] rounded-sm flex items-center justify-center group-hover:bg-[#00a8b8] transition-colors">
              <span className="font-mono font-bold text-[#1a1a1a] text-lg">ET</span>
            </div>
            <span className="font-mono font-bold text-[#1a1a1a] text-lg hidden sm:inline">Cerdar Cloud Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#4a4a4a] hover:text-[#00d9ff] transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-cyan px-6 py-2.5 rounded-sm font-medium text-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[#f5f5f5] rounded-sm transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1a1a1a]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1a1a1a]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-[#e0e0e0] pt-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-[#4a4a4a] hover:text-[#00d9ff] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block btn-cyan px-6 py-2.5 rounded-sm font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
