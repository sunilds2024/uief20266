import { motion } from 'framer-motion';
import { ArrowRight, Play, GraduationCap, Globe, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Since 2016 — Trusted by 5000+ Students</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Gateway to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Global Education
              </span>
            </h1>

            <p className="text-lg text-blue-100/80 mb-8 max-w-lg leading-relaxed">
              Professional overseas education consultancy providing expert guidance for test preparation, 
              university admissions, and visa processing. Study in USA, Australia, UK, Germany & more.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                Start Your Journey
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Play size={18} className="group-hover:scale-110 transition-transform" />
                Explore Courses
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Users, value: '5000+', label: 'Students Placed' },
                { icon: Globe, value: '50+', label: 'Partner Universities' },
                { icon: Award, value: '8+', label: 'Years Experience' },
                { icon: GraduationCap, value: '95%', label: 'Success Rate' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <stat.icon size={20} className="mx-auto mb-1 text-blue-300" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-blue-200/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[500px]">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-72 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">IELTS Preparation</h3>
                <p className="text-blue-200/70 text-sm">Expert-led classes with proven strategies for band 7+</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-300 to-indigo-400 border-2 border-white/20"></div>
                    ))}
                  </div>
                  <span className="text-blue-200/70 text-xs">200+ enrolled</span>
                </div>
              </motion.div>

              {/* Second Card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-48 left-0 w-64 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Globe size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Study Abroad</h4>
                    <p className="text-blue-200/60 text-xs">50+ Universities</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {['USA', 'UK', 'Australia', 'Germany', 'NZ'].map((country) => (
                    <span key={country} className="px-2 py-1 bg-white/10 rounded-md text-xs text-blue-200">{country}</span>
                  ))}
                </div>
              </motion.div>

              {/* Third Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-20 w-56 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Visa Success</h4>
                    <p className="text-blue-200/60 text-xs">95% approval rate</p>
                  </div>
                </div>
                <div className="mt-3 w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
