'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RealMadridInternational() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Using Web3Forms for free form submission
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // User needs to replace with real key from web3forms.com
        subject: 'New Inquiry from Website',
      }),
    });

    if (response.ok) {
      alert('Thank you! Your message has been sent. We will contact you soon.');
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    } else {
      alert('Failed to send message. Please try again or contact directly.');
    }
    setIsSubmitting(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">RMI</span>
            </div>
            <div>
              <div className="font-bold text-xl tracking-tight text-[#C8102E]">Real Madrid International</div>
              <div className="text-xs text-zinc-500 -mt-1">RL-2113</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#C8102E] transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#C8102E] transition-colors">Services</button>
            <button onClick={() => scrollToSection('why-us')} className="hover:text-[#C8102E] transition-colors">Why Us</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-[#C8102E] transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#C8102E] transition-colors">Contact</button>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+8801819989710" className="hidden md:block text-sm bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-[#C8102E] transition-colors">
              Call Now
            </a>
            <a 
              href="https://wa.me/8801819989710" 
              target="_blank" 
              className="bg-green-500 text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-green-600 transition-colors"
            >
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-[#C8102E] via-black to-zinc-900 text-white min-h-[100dvh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-sm">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Govt. Approved - RL-2113
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none">
                REAL MADRID<br />INTERNATIONAL
              </h1>
              
              <p className="text-2xl text-white/90 max-w-lg">
                Your Trusted Partner for Recruitment &amp; Travel Services in Bangladesh
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-[#C8102E] px-10 py-4 rounded-xl font-semibold text-lg hover:bg-zinc-100 transition-all active:scale-[0.985]"
                >
                  Get In Touch
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="border border-white/70 hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  Our Services
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-4xl font-mono font-bold">+88</div>
                  <div className="text-sm text-white/70">Call Us</div>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div>
                  <a href="mailto:realmadridintbd@gmail.com" className="hover:underline">realmadridintbd@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <Image 
                src="/business-card.jpg" 
                alt="Business Card" 
                width={500} 
                height={300}
                className="rounded-3xl shadow-2xl border-8 border-white/20 rotate-[-3deg] object-contain"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-black px-6 py-3 rounded-2xl shadow-xl text-sm font-medium flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                Md. Omar Faruq, Proprietor
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="text-xs tracking-[3px] mb-2 opacity-70">SCROLL TO EXPLORE</div>
          <div className="w-px h-12 bg-white/50"></div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#C8102E] font-semibold tracking-widest text-sm mb-3">EST. IN DHAKA</div>
            <h2 className="text-5xl font-bold tracking-tighter">About Real Madrid International</h2>
          </div>
          
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-8 text-lg text-zinc-600">
              <p>
                Real Madrid International is a government-approved recruiting and travel agency (License No. RL-2113) based in Nayapaltan, Dhaka. 
                With years of dedicated service, we specialize in connecting talented professionals with opportunities abroad and providing comprehensive travel solutions.
              </p>
              <p>
                Under the leadership of Proprietor Md. Omar Faruq, we are committed to transparency, professionalism, and client satisfaction.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#C8102E] flex items-center justify-center text-white text-2xl">🇧🇩</div>
                  <div>
                    <div className="font-semibold">Dhaka, Bangladesh</div>
                    <div className="text-sm text-zinc-500">64/4, Nayapaltan</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-5">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="font-semibold text-xl mb-6 flex items-center gap-3">
                  <span className="text-[#C8102E]">Proprietor</span>
                </h3>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-zinc-200 rounded-2xl flex-shrink-0"></div>
                  <div>
                    <div className="text-3xl font-bold text-black">Md. Omar Faruq</div>
                    <div className="text-[#C8102E] mt-1">Proprietor</div>
                    <p className="mt-4 text-zinc-600 text-sm leading-relaxed">
                      Experienced professional dedicated to providing ethical and reliable overseas employment and travel services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline px-4 py-1 bg-[#C8102E]/10 text-[#C8102E] rounded-full text-sm font-medium mb-4">OUR EXPERTISE</div>
            <h2 className="text-5xl font-bold tracking-tighter">Services We Offer</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Recruitment */}
            <div className="group bg-zinc-50 hover:bg-white border border-transparent hover:border-zinc-200 p-10 rounded-3xl transition-all duration-300">
              <div className="h-16 w-16 bg-[#C8102E] text-white rounded-2xl flex items-center justify-center mb-8 text-4xl">👔</div>
              <h3 className="text-4xl font-bold tracking-tight mb-4">Recruitment Services</h3>
              <p className="text-zinc-600 text-lg mb-8">We assist with manpower recruitment for various sectors including hospitality, construction, healthcare, and more. Complete visa processing support.</p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><span className="text-[#C8102E] mt-1">•</span> Overseas Job Placement</li>
                <li className="flex items-start gap-3"><span className="text-[#C8102E] mt-1">•</span> Document Verification</li>
                <li className="flex items-start gap-3"><span className="text-[#C8102E] mt-1">•</span> Interview Preparation</li>
              </ul>
            </div>

            {/* Travel & Tourism */}
            <div className="group bg-zinc-50 hover:bg-white border border-transparent hover:border-zinc-200 p-10 rounded-3xl transition-all duration-300">
              <div className="h-16 w-16 bg-[#C8102E] text-white rounded-2xl flex items-center justify-center mb-8 text-4xl">✈️</div>
              <h3 className="text-4xl font-bold tracking-tight mb-4">Travel &amp; Tourism</h3>
              <p className="text-zinc-600 text-lg mb-8">Comprehensive travel solutions including flight ticketing, hotel bookings, tour packages, and Umrah/Hajj services.</p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><span className="text-[#C8102E] mt-1">•</span> International &amp; Domestic Flights</li>
                <li className="flex items-start gap-3"><span className="text-[#C8102E] mt-1">•</span> Visa Assistance</li>
                <li className="flex items-start gap-3"><span className="text-[#C8102E] mt-1">•</span> Tour Packages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-[#C8102E] uppercase tracking-widest text-sm mb-4">TRUSTED BY MANY</div>
              <h2 className="text-5xl font-bold tracking-tighter leading-none">Why Clients Choose Us</h2>
              <p className="mt-8 text-xl text-zinc-400 max-w-md">We deliver excellence with integrity and transparency.</p>
            </div>
            
            <div className="space-y-12">
              {[
                { title: "Licensed & Regulated", desc: "Government of Bangladesh approved recruiting agency with RL-2113 license." },
                { title: "Experienced Team", desc: "Seasoned professionals handling end-to-end recruitment and travel processes." },
                { title: "Transparent Process", desc: "No hidden fees. Clear communication throughout your journey." },
                { title: "Client First", desc: "Your success and satisfaction is our top priority." }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl font-mono">0{index+1}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#C8102E]">VISUAL JOURNEY</div>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Moments from Our Work</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="aspect-[4/3] bg-zinc-200 rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-sm">Project {i}</div>
                </div>
                <Image 
                  src={`https://picsum.photos/id/${60+i}/600/450`} 
                  alt={`Gallery image ${i}`} 
                  fill 
                  className="object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter">Get In Touch</h2>
              <p className="mt-6 text-xl text-zinc-600 max-w-md">
                Ready to start your journey? Reach out to us today for personalized assistance.
              </p>
              
              <div className="mt-12 space-y-8">
                <div className="flex gap-6">
                  <div className="text-4xl">📍</div>
                  <div>
                    <div className="font-medium">Office Address</div>
                    <div className="text-zinc-600 mt-1">64/4, Nayapaltan (Saba Complex, 1st Floor), Dhaka-1000, Bangladesh</div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="text-4xl">📞</div>
                  <div>
                    <div className="font-medium">Phone Numbers</div>
                    <div className="mt-2 space-y-1">
                      <a href="tel:+8801819989710" className="block hover:text-[#C8102E]">+88 01819-989710</a>
                      <a href="tel:+8801842450465" className="block hover:text-[#C8102E]">+88 01842-450465</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="text-4xl">✉️</div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:realmadridintbd@gmail.com" className="text-zinc-600 hover:text-[#C8102E] mt-1 block">realmadridintbd@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#C8102E]"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select 
                    name="service" 
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#C8102E] bg-white"
                  >
                    <option value="">Select Service</option>
                    <option value="recruitment">Recruitment Services</option>
                    <option value="travel">Travel & Tourism</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message / Requirements</label>
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-5 py-4 border border-zinc-200 rounded-3xl focus:outline-none focus:border-[#C8102E] resize-y"
                    placeholder="Please describe your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#C8102E] hover:bg-black text-white py-5 rounded-2xl font-semibold text-lg transition-all disabled:opacity-70"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
              
              <p className="text-center text-xs text-zinc-500 mt-8">
                Or email us directly at realmadridintbd@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#C8102E] font-bold">R</div>
              <div className="font-semibold text-white text-xl">Real Madrid International</div>
            </div>
            <p className="text-sm">Government Approved Recruiting Agency<br />License: RL-2113</p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-y-12">
            <div>
              <div className="font-mono uppercase text-xs tracking-widest mb-4 text-white">Quick Links</div>
              <div className="space-y-3 text-sm">
                <button onClick={() => scrollToSection('about')} className="block hover:text-white">About Us</button>
                <button onClick={() => scrollToSection('services')} className="block hover:text-white">Services</button>
                <button onClick={() => scrollToSection('contact')} className="block hover:text-white">Contact</button>
              </div>
            </div>
            
            <div>
              <div className="font-mono uppercase text-xs tracking-widest mb-4 text-white">Contact Info</div>
              <div className="space-y-3 text-sm">
                <div>64/4, Nayapaltan (Saba Complex, 1st Floor)</div>
                <div>Dhaka-1000, Bangladesh</div>
                <a href="tel:+8801819989710" className="hover:text-white">+88 01819-989710</a>
                <a href="tel:+8801842450465" className="hover:text-white">+88 01842-450465</a>
              </div>
            </div>
            
            <div>
              <div className="font-mono uppercase text-xs tracking-widest mb-4 text-white">Follow Us</div>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="hover:text-white">📘</a>
                <a href="#" className="hover:text-white">📸</a>
              </div>
              <div className="mt-8 text-xs">
                © {new Date().getFullYear()} Real Madrid International. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a 
          href="https://wa.me/8801819989710" 
          target="_blank" 
          className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-2xl"
          title="Chat on WhatsApp"
        >
          💬
        </a>
        <a 
          href="https://wa.me/8801842450465" 
          target="_blank" 
          className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-2xl"
          title="Chat on WhatsApp"
        >
          💬
        </a>
      </div>
    </div>
  );
}
