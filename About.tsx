import { CheckCircle, Shield, Zap } from 'lucide-react';

/* Design: Industrial Minimalism
   - Asymmetric layout with image on left, text on right
   - Monochromatic base with cyan accents
   - Geometric precision in design elements */

const features = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'All equipment undergoes rigorous testing with 99.9% quality guarantee',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: '24-hour rapid response with delivery completed within 7 days',
  },
  {
    icon: CheckCircle,
    title: 'Professional Support',
    description: 'Technical consultation and after-sales support services',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#f5f5f5]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-2xl order-2 md:order-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663415235201/KdabF8EABvRTdm8hpqWwbi/hero-hardware-components-PkPUzwgsdCfUYSvgZQnwuv.webp"
              alt="Premium computer hardware components"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>

          {/* Right: Content */}
          <div className="animate-fade-in-up space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <div className="inline-block bg-white px-4 py-2 rounded-sm">
                <span className="text-[#00d9ff] font-mono text-sm font-bold">03</span>
                <span className="text-[#4a4a4a] text-sm ml-2">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
                Cerdar Cloud Tech LLC - Your Trusted Partner
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Cerdar Cloud Tech LLC has years of experience in electronics trading, dedicated to providing high-quality servers, switches, and storage devices to customers worldwide.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-sm bg-white border border-[#e0e0e0] hover:border-[#00d9ff] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#00d9ff]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a] mb-1">{feature.title}</h3>
                      <p className="text-sm text-[#4a4a4a]">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-sm border border-[#e0e0e0]">
                <div className="text-3xl font-bold text-[#00d9ff] mb-2">15+</div>
                <p className="text-sm text-[#4a4a4a]">Years of Experience</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-[#e0e0e0]">
                <div className="text-3xl font-bold text-[#00d9ff] mb-2">1000+</div>
                <p className="text-sm text-[#4a4a4a]">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
