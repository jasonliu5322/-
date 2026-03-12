import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/* Design: Industrial Minimalism with Tech Precision
   - Monochromatic base (#1a1a1a, #ffffff) with electric cyan (#00d9ff) accents
   - Asymmetric layouts with generous whitespace
   - Geometric precision and smooth animations
   - IBM Plex Mono for headings, IBM Plex Sans for body */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
