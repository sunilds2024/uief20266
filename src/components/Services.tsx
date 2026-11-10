import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Star, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'IELTS Preparation',
    description: 'Complete IELTS preparation with expert guidance for all four modules: Listening, Reading, Writing & Speaking.',
    features: ['Paper & Computer-based', 'Mock Tests Weekly', 'Band 7+ Strategies', 'Small Batch Size'],
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-50',
    icon: '📝',
    popular: true,
  },
  {
    title: 'TOEFL Preparation',
    description: 'Comprehensive TOEFL iBT preparation covering Reading, Listening, Speaking & Writing sections.',
    features: ['iBT Format Training', 'Practice Tests', 'Score Improvement Tips', 'Flexible Schedule'],
    color: 'from-indigo-500 to-indigo-700',
    bgColor: 'bg-indigo-50',
    icon: '🎯',
    popular: false,
  },
  {
    title: 'PTE Academic',
    description: 'Pearson Test of English preparation with AI-based practice and expert feedback on your performance.',
    features: ['AI Practice Tools', 'Real Exam Simulation', 'Quick Results', 'Score 79+ Guarantee'],
    color: 'from-purple-500 to-purple-700',
    bgColor: 'bg-purple-50',
    icon: '💡',
    popular: false,
  },
  {
    title: 'SAT Preparation',
    description: 'SAT preparation course designed to help students achieve competitive scores for US university admissions.',
    features: ['Math & English Prep', 'Strategy Sessions', 'Full-Length Tests', 'College Planning'],
    color: 'from-emerald-500 to-emerald-700',
    bgColor: 'bg-emerald-50',
    icon: '📚',
    popular: false,
  },
  {
    title: 'GRE Preparation',
    description: 'GRE preparation covering Verbal Reasoning, Quantitative Reasoning & Analytical Writing.',
    features: ['Vocabulary Building', 'Quant Strategies', 'Practice Problems', 'Grad School Guidance'],
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    icon: '🧠',
    popular: false,
  },
  {
    title: 'GMAT Preparation',
    description: 'GMAT preparation for business school aspirants with focus on quantitative and verbal skills.',
    features: ['Business Math', 'Critical Reasoning', 'Data Sufficiency', 'MBA Admissions Help'],
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
    icon: '📊',
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="text-blue-700 text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Test Preparation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Courses
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Expert-led online & physical classes to help you achieve your target scores. 
            Join IELTS, TOEFL, PTE, SAT, GRE & GMAT preparation courses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className={`w-5 h-5 rounded-full ${service.bgColor} flex items-center justify-center`}>
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-5 pb-5 border-b border-gray-100">
                  <span className="flex items-center gap-1"><Clock size={12} /> 6-8 Weeks</span>
                  <span className="flex items-center gap-1"><Users size={12} /> Small Batches</span>
                  <span className="flex items-center gap-1"><Star size={12} /> Expert Tutors</span>
                </div>

                {/* CTA */}
                <a 
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} text-white px-5 py-2.5 rounded-full group-hover:shadow-lg transition-all duration-300`}
                >
                  Enroll Now
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen size={24} className="text-blue-200" />
                <h3 className="text-2xl font-bold text-white">Online & Physical Classes Available</h3>
              </div>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Conducting Online IELTS, TOEFL & PTE Classes internationally every day from Sunday to Friday with online learning portal support.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Register Now
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
