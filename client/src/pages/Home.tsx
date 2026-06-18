import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X, ChevronUp, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Modern Luxury Minimalism
 * - Dark charcoal background with gold accents
 * - Playfair Display for headlines, Inter for body
 * - Smooth animations and transitions
 * - Asymmetric layouts with premium imagery
 * - Masculine sophistication and refined craftsmanship
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const services = [
    { name: "Classic Haircut", price: "$35", icon: "✂️" },
    { name: "Skin Fade", price: "$40", icon: "🔪" },
    { name: "Beard Trim", price: "$25", icon: "🧔" },
    { name: "Hair Styling", price: "$30", icon: "💇" },
    { name: "Hair Wash", price: "$15", icon: "💧" },
    { name: "Traditional Shave", price: "$45", icon: "🪒" },
  ];

  const team = [
    {
      name: "Marcus Sterling",
      position: "Master Barber",
      experience: "15+ years",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/barber-portrait-1-LYowcXRC2gfRooNQXwED8J.webp",
    },
    {
      name: "James Mitchell",
      position: "Senior Stylist",
      experience: "12+ years",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/barber-portrait-2-iRW2fU5w3MAa9rfiam8pd7.webp",
    },
    {
      name: "Alex Chen",
      position: "Creative Barber",
      experience: "8+ years",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/barber-portrait-3-T3sJSz3ZtRCaKY6YckNgB3.webp",
    },
  ];

  const testimonials = [
    {
      name: "David Thompson",
      rating: 5,
      text: "The attention to detail is exceptional. Every visit feels like a premium experience.",
    },
    {
      name: "Robert Chen",
      rating: 5,
      text: "Professional, skilled, and welcoming. This is the best barbershop in the city.",
    },
    {
      name: "Michael Rodriguez",
      rating: 5,
      text: "Worth every penny. The craftsmanship and customer service are unmatched.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/logo-FuZUwaDyxV6ywuVffNXZhq.webp"
              alt="The Grooming Studio"
              className="h-8 w-8"
            />
            <span className="font-bold text-lg text-foreground">The Grooming Studio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-accent transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#gallery" className="hover:text-accent transition-colors">
              Gallery
            </a>
            <a href="#team" className="hover:text-accent transition-colors">
              Team
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Button className="hidden md:flex btn-premium">Book Now</Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="container py-4 flex flex-col gap-4">
              <a href="#home" className="hover:text-accent transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-accent transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-accent transition-colors">
                Services
              </a>
              <a href="#gallery" className="hover:text-accent transition-colors">
                Gallery
              </a>
              <a href="#team" className="hover:text-accent transition-colors">
                Team
              </a>
              <a href="#contact" className="hover:text-accent transition-colors">
                Contact
              </a>
              <Button className="btn-premium w-full">Book Now</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/hero-barber-background-LvePGQi8uGdNSAdLguRRWV.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 container text-center max-w-2xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Premium Men's <span className="text-accent">Haircuts</span> & Grooming
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Experience professional styling and exceptional grooming services tailored for modern gentlemen.
          </p>
          <Button className="btn-premium text-lg">Reserve Your Appointment</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/salon-interior-goEapxwrTkTvML9j5Z8yBK.webp"
                alt="Salon Interior"
                className="rounded-sm shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="divider-gold"></div>
              <h2 className="text-4xl font-bold mb-6">About The Grooming Studio</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded on the principles of craftsmanship and excellence, The Grooming Studio represents
                a return to the art of traditional barbering. We believe that every gentleman deserves
                more than just a haircut—they deserve an experience.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our team of master barbers brings decades of combined experience, attention to detail,
                and a passion for their craft. We use only premium products and techniques to ensure
                every client leaves looking and feeling their absolute best.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-accent">✓</span> 20+ Years of Combined Experience
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Premium Products & Techniques
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Personalized Service Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <div className="divider-gold"></div>
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our comprehensive range of professional grooming services designed to elevate your appearance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="card-premium group cursor-pointer"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-accent font-semibold text-lg">{service.price}</p>
                <p className="text-gray-400 text-sm mt-4">
                  Professional grooming tailored to your style and preferences.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="divider-gold"></div>
            <h2 className="text-4xl font-bold mb-4">Gallery</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our portfolio of premium haircuts, beard styling, and modern grooming transformations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/gallery-haircut-1-A2RBsYo8CDki2rzH9f4wY9.webp",
                title: "Modern Fade Haircut",
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/gallery-beard-1-jRYVoqGzLFxjafc5voPfPQ.webp",
                title: "Premium Beard Grooming",
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/gallery-haircut-2-Y63QZHQ7oZQ9NjyfN6r6ZE.webp",
                title: "Textured Haircut",
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/gallery-styling-1-3AJcZExCSSFedTELmgMDGD.webp",
                title: "Professional Styling",
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/gallery-beard-2-AcDHUzYd584qxJ48RZsiYp.webp",
                title: "Beard Shaping",
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/gallery-haircut-3-92RZ3qKPZRhBW6CFzoeocM.webp",
                title: "Classic Haircut",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative h-64 bg-secondary rounded-sm overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <div className="divider-gold"></div>
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional grooming services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="card-premium text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-accent"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.position}</p>
                <p className="text-gray-400 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="divider-gold"></div>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="card-premium">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-accent">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <div className="divider-gold"></div>
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-accent">Address</h3>
                <p className="text-gray-400">123 Premium Street, Downtown, City 12345</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-accent">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-accent">Email</h3>
                <p className="text-gray-400">hello@groomingstudio.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-accent">Hours</h3>
                <p className="text-gray-400">Mon - Fri: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-400">Sat: 10:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Sun: Closed</p>
              </div>
            </div>

            <div className="bg-secondary rounded-sm p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-gray-400">Map Integration Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/YisFzkbkW28PAQffAkGsUq/logo-FuZUwaDyxV6ywuVffNXZhq.webp"
                  alt="Logo"
                  className="h-6 w-6"
                />
                <span className="font-bold">The Grooming Studio</span>
              </div>
              <p className="text-gray-400 text-sm">Premium grooming for the discerning gentleman.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#team" className="hover:text-accent transition-colors">Team</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Phone: +1 (555) 123-4567</li>
                <li>Email: hello@groomingstudio.com</li>
                <li>Address: 123 Premium Street</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">Twitter</a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 The Grooming Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 z-40"
      >
        <MessageCircle size={24} />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}
