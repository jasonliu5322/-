import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

/* Design: Industrial Minimalism
   - Centered layout with asymmetric form
   - Monochromatic typography with cyan accents
   - Geometric precision in form elements */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@cerdarcloudtech.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'United States',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-[#f5f5f5] px-4 py-2 rounded-sm mb-6">
            <span className="text-[#00d9ff] font-mono text-sm font-bold">04</span>
            <span className="text-[#4a4a4a] text-sm ml-2">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
            Get Your Electronics Solutions
          </h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            Fill out the form below and our professional team will contact you within 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-[#f5f5f5] rounded-sm">
                      <Icon className="w-6 h-6 text-[#00d9ff]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a] mb-1">{info.label}</h3>
                      <p className="text-[#4a4a4a] text-sm">{info.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Business Hours */}
            <div className="bg-[#f5f5f5] p-6 rounded-sm border border-[#e0e0e0]">
              <h3 className="font-bold text-[#1a1a1a] mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm text-[#4a4a4a]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="bg-white border border-[#e0e0e0] rounded-sm p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#00d9ff] rounded-sm mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Thank You</h3>
                  <p className="text-[#4a4a4a]">We've received your information and will contact you within 24 hours</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                    <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                      Name <span className="text-[#00d9ff]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#e0e0e0] rounded-sm focus:outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] transition-colors"
                      placeholder="Your name"
                    />
                    </div>

                    {/* Email */}
                    <div>
                    <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                      Email <span className="text-[#00d9ff]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#e0e0e0] rounded-sm focus:outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] transition-colors"
                      placeholder="Your email"
                    />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                    <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                      Phone <span className="text-[#00d9ff]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#e0e0e0] rounded-sm focus:outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] transition-colors"
                      placeholder="Your phone number"
                    />
                    </div>

                    {/* Company */}
                    <div>
                    <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e0e0e0] rounded-sm focus:outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] transition-colors"
                      placeholder="Your company name"
                    />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                      Message <span className="text-[#00d9ff]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-[#e0e0e0] rounded-sm focus:outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] transition-colors resize-none"
                      placeholder="Please describe your requirements in detail..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-cyan py-3 rounded-sm font-bold hover:shadow-lg transition-shadow"
                  >
                    Submit Inquiry
                  </button>

                  <p className="text-xs text-[#4a4a4a] text-center">
                    We respect your privacy and your information will be kept confidential
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
