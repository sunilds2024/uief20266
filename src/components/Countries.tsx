import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Building2, GraduationCap } from 'lucide-react';

const countries = [
  {
    name: 'United States',
    flag: '🇺🇸',
    description: 'World-class universities with diverse programs and research opportunities.',
    universities: '500+ Partner Universities',
    popular: ['Harvard', 'MIT', 'Stanford', 'Columbia'],
    color: 'from-blue-500 to-red-500',
    bgLight: 'bg-blue-50',
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    description: 'High-quality education with excellent post-study work opportunities.',
    universities: '100+ Partner Universities',
    popular: ['Melbourne', 'Sydney', 'Monash', 'ANU'],
    color: 'from-blue-600 to-yellow-500',
    bgLight: 'bg-yellow-50',
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    description: 'Prestigious institutions with rich academic heritage and global recognition.',
    universities: '150+ Partner Universities',
    popular: ['Oxford', 'Cambridge', 'Imperial', 'UCL'],
    color: 'from-red-600 to-blue-800',
    bgLight: 'bg-red-50',
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    description: 'Tuition-free education at world-renowned technical universities.',
    universities: '80+ Partner Universities',
    popular: ['TU Munich', 'RWTH Aachen', 'Heidelberg', 'LMU'],
    color: 'from-black to-yellow-500',
    bgLight: 'bg-gray-50',
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    description: 'Safe, welcoming environment with quality education and work rights.',
    universities: '50+ Partner Universities',
    popular: ['Auckland', 'Otago', 'Victoria', 'Canterbury'],
    color: 'from-blue-500 to-green-600',
    bgLight: 'bg-green-50',
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    description: 'Affordable education with excellent immigration pathways after graduation.',
    universities: '120+ Partner Universities',
    popular: ['Toronto', 'UBC', 'McGill', 'Waterloo'],
    color: 'from-red-500 to-red-700',
    bgLight: 'bg-red-50',
  },
];

export default function Countries() {
  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span className="text-indigo-700 text-sm font-semibold">Study Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Study{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Abroad
            </span>{' '}
            in Top Countries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We represent several colleges and universities across the globe. 
            Choose your dream destination and let us guide you through the entire process.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top Gradient Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${country.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{country.name}</h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Building2 size={10} /> {country.universities}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{country.description}</p>

                {/* Popular Universities */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1">
                    <GraduationCap size={12} /> Top Universities
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {country.popular.map((uni) => (
                      <span key={uni} className={`px-2.5 py-1 ${country.bgLight} text-gray-700 text-xs rounded-md font-medium`}>
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-indigo-600 transition-colors"
                >
                  <MapPin size={14} />
                  Learn More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Process</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Counseling', desc: 'Free consultation to understand your goals and profile' },
              { step: '02', title: 'Test Preparation', desc: 'Expert-led coaching for IELTS, TOEFL, PTE, SAT, GRE' },
              { step: '03', title: 'University Selection', desc: 'Shortlist best universities based on your profile' },
              { step: '04', title: 'Visa Processing', desc: 'Complete assistance with documentation and visa application' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-100 mb-3">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
