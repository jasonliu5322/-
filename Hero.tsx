/* Design: Industrial Minimalism
   - Asymmetric layout with left text, right image
   - Monochromatic typography with cyan accent
   - Geometric precision and generous whitespace */

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-in-up space-y-6">
            <div className="space-y-4">
              <div className="inline-block bg-[#f5f5f5] px-4 py-2 rounded-sm">
                <span className="text-[#00d9ff] font-mono text-sm font-bold">01</span>
                <span className="text-[#4a4a4a] text-sm ml-2">Professional Electronics Trading</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
                Enterprise-Grade Electronics Solutions
              </h1>
              <p className="text-lg text-[#4a4a4a] leading-relaxed max-w-md">
                Cerdar Cloud Tech LLC specializes in buying and selling new and used servers, switches, CPUs, memory, SSDs, and hard drives. We provide reliable quality assurance and professional technical support.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#products"
                className="btn-cyan px-8 py-3 rounded-sm font-bold text-center hover:shadow-lg transition-shadow"
              >
                Browse Products
              </a>
              <a
                href="#contact"
                className="btn-dark px-8 py-3 rounded-sm font-bold text-center hover:shadow-lg transition-shadow"
              >
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#e0e0e0]">
              <div>
                <div className="text-2xl font-bold text-[#00d9ff]">500+</div>
                <div className="text-sm text-[#4a4a4a] mt-1">Equipment Stock</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#00d9ff]">99.9%</div>
                <div className="text-sm text-[#4a4a4a] mt-1">Quality Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#00d9ff]">24h</div>
                <div className="text-sm text-[#4a4a4a] mt-1">Fast Response</div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663415235201/KdabF8EABvRTdm8hpqWwbi/hero-server-room-BiGS33mSfA3WPfsPVejvZy.webp"
              alt="Professional data center with server equipment"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Geometric accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d9ff] via-[#00a8b8] to-transparent opacity-30"></div>
    </section>
  );
}
