import { motion } from 'framer-motion';
import { Shield, Users, Award, Globe, Headphones, BookOpen, TrendingUp, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '8+ Years Experience',
    description: 'Established in 2016 with a proven track record of success in overseas education counseling.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Expert Counselors',
    description: 'Team of experienced and certified counselors dedicated to your academic success.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Globe,
    title: '50+ University Partners',
    description: 'Direct partnerships with top universities across USA, Australia, UK, Germany & more.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Shield,
    title: '95% Visa Success',
    description: 'Industry-leading visa approval rate with expert documentation and interview preparation.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Prep',
    description: 'Complete test preparation for IELTS, TOEFL, PTE, SAT, GRE & GMAT with proven methods.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock support for students through online portal and direct counselor access.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Scholarship Assistance',
    description: 'Help identifying and applying for scholarships to reduce your education costs abroad.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: HeartHandshake,
    title: 'End-to-End Service',
    description: 'From counseling to visa, flight to accommodation — complete support throughout your journey.',
    color: 'from-violet-500 to-purple-600',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            <span className="text-purple-700 text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Students{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Trust Us
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Entrust your education development in us. We provide the best counseling and guidance 
            to help you make the right decision for your future.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/4 translate-y-1/4"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey Abroad?
            </h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Book a free counseling session with our expert team today. Let us help you find the perfect university and program for your future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Book Free Session
              </a>
              <a href="tel:+977-1-4537632" className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Call: +977-1-4537632
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
