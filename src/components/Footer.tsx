import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">UIEF</span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">USHASHREE</h3>
                <p className="text-xs text-gray-400">International Education Foundation</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Professional overseas education consultancy providing comprehensive counseling for students seeking higher education abroad since 2016.
            </p>
            <div className="flex gap-3">
              {['F', 'I', 'L', 'Y'].map((letter) => (
                <a key={letter} href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors text-sm font-bold">
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Study Abroad', 'Testimonials', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5">Our Services</h4>
            <ul className="space-y-3">
              {['IELTS Preparation', 'TOEFL Preparation', 'PTE Academic', 'SAT Preparation', 'GRE & GMAT', 'Visa Processing', 'University Admission'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">Dillibazar, Kathmandu, Nepal<br />Box: 20482</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+977-1-4537632</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">info@uief.com.np</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Subscribe to Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-r-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 USHASHREE International Education Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 z-50"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
