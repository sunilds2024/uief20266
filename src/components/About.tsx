import { motion } from 'framer-motion';
import { CheckCircle, Target, Heart, Shield } from 'lucide-react';

export default function About() {
  const features = [
    { icon: Target, title: 'Expert Counseling', desc: 'Personalized guidance from experienced counselors' },
    { icon: Heart, title: 'Student-First Approach', desc: 'Your success is our primary mission and priority' },
    { icon: Shield, title: 'Trusted & Transparent', desc: 'Ethical practices with full transparency in all processes' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">UIEF</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">USHASHREE Foundation</h4>
                        <p className="text-sm text-gray-500">Est. 2016 • Kathmandu, Nepal</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Professional overseas education consultancy providing comprehensive counseling for students seeking higher education abroad.
                    </p>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center shadow-md">
                      <div className="text-2xl font-bold text-blue-600">8+</div>
                      <div className="text-xs text-gray-500 mt-1">Years</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md">
                      <div className="text-2xl font-bold text-indigo-600">5K+</div>
                      <div className="text-xs text-gray-500 mt-1">Students</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md">
                      <div className="text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-xs text-gray-500 mt-1">Universities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-blue-700 text-sm font-semibold">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              One-Stop Destination for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Studying Abroad
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              USHASHREE International Education Foundation (USHASHREE Foundation) is a professional Overseas Education Consultancy firm based in Kathmandu, Nepal. Established in 2016, we provide counseling services for high school-leavers and young adults seeking advice on further education.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              We provide comprehensive educational counseling to parents and students, assisting them in selecting the right course of study and university based on market trends, prospects, and financial capacity. We represent several colleges and universities in the USA, Australia, New Zealand, UK, and Germany.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon size={22} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500 mt-0.5">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                <CheckCircle size={18} />
                Get Free Consultation
              </a>
              <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-blue-300 hover:text-blue-600 transition-all duration-300">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
