import { Server, Cpu, HardDrive, Zap, Wifi, MemoryStick } from 'lucide-react';

/* Design: Industrial Minimalism
   - Asymmetric grid layout with staggered cards
   - Monoline icons with cyan accents
   - Geometric precision with hover effects */

const productCategories = [
  {
    id: 1,
    name: 'Servers',
    description: 'New and used enterprise-grade servers with multiple configurations',
    icon: Server,
    color: '#00d9ff',
  },
  {
    id: 2,
    name: 'Network Switches',
    description: 'High-performance network switches supporting multiple protocols',
    icon: Wifi,
    color: '#00d9ff',
  },
  {
    id: 3,
    name: 'CPU Processors',
    description: 'Intel, AMD and other high-performance processors',
    icon: Cpu,
    color: '#00d9ff',
  },
  {
    id: 4,
    name: 'Memory Modules',
    description: 'DDR3, DDR4, DDR5 and other memory types',
    icon: MemoryStick,
    color: '#00d9ff',
  },
  {
    id: 5,
    name: 'SSD Storage',
    description: 'Enterprise-grade SSDs with high speed and stability',
    icon: HardDrive,
    color: '#00d9ff',
  },
  {
    id: 6,
    name: 'Hard Drives',
    description: 'Large capacity storage with excellent cost performance',
    icon: Zap,
    color: '#00d9ff',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 animate-fade-in-up">
          <div className="inline-block bg-[#f5f5f5] px-4 py-2 rounded-sm mb-6">
            <span className="text-[#00d9ff] font-mono text-sm font-bold">02</span>
            <span className="text-[#4a4a4a] text-sm ml-2">Product Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
            Complete Electronics Solutions
          </h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            We provide a complete range of enterprise-grade electronics, from servers to storage components, meeting all your business needs.
          </p>
        </div>

        {/* Products Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
          {productCategories.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group relative bg-white border border-[#e0e0e0] rounded-sm p-8 hover:border-[#00d9ff] hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Geometric accent corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#f5f5f5] group-hover:bg-[#00d9ff] transition-colors duration-300 opacity-0 group-hover:opacity-100"></div>

                {/* Icon */}
                <div className="mb-6 inline-block p-3 bg-[#f5f5f5] rounded-sm group-hover:bg-[#00d9ff] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#00d9ff] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-[#00d9ff] font-bold text-sm hover:gap-2 transition-all duration-300 gap-1"
                >
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-[#e0e0e0] text-center">
          <p className="text-[#4a4a4a] mb-6">Need a custom solution?</p>
          <a
            href="#contact"
            className="btn-cyan px-8 py-3 rounded-sm font-bold inline-block hover:shadow-lg transition-shadow"
          >
            Contact Us for a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
