import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Reshma Shrestha',
    role: 'IELTS Student',
    content: 'USHASHREE International Education Foundation is one of the leading and best education consultants in Nepal. It always stands with students and helps them achieve career goals with the best suggestions and advice.',
    rating: 5,
    initial: 'R',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Yubraj Bharati',
    role: 'UK Visa Approved',
    content: 'I am very happy and delighted that I finally got my UK study visa approved. This wouldn\'t have been possible without the support of USHASHREE entire team. Usha Ma\'am helped me from university selection to documentation.',
    rating: 5,
    initial: 'Y',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    name: 'Gaurav Thakur',
    role: 'IELTS 7.5 Band',
    content: 'I am extremely grateful to the entire team for their unwavering support throughout my journey. From helping me select the right university to ensuring a smooth visa application, their expertise was evident every step of the way.',
    rating: 5,
    initial: 'G',
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Priyanka Rasali',
    role: 'IELTS Preparation',
    content: 'Ushashree international education foundation is one of the reliable institutions in the valley. The staffs are welcoming and helpful. Usha Ma\'am is quite experienced and provides valuable information for IELTS test preparation.',
    rating: 5,
    initial: 'P',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    name: 'Sudish Yadav',
    role: 'IELTS Student',
    content: 'The IELTS preparation class in Ushashree is perfect. Well-educated, qualified, and experienced teacher conducts the class. Small sized classes with focus on individual students. The test prep app is an amazing bonus!',
    rating: 5,
    initial: 'S',
    color: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Kushang Tamang',
    role: 'IELTS 8 Band',
    content: 'Ushashree International Foundation is recognized for its quality education. I had a great experience learning IELTS. The experienced teachers are resourceful and give personal attention, providing clear ideas to achieve band 8.',
    rating: 5,
    initial: 'K',
    color: 'from-rose-400 to-pink-600',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span className="text-amber-700 text-sm font-semibold">Student Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Students Say
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real stories from real students who achieved their dreams with our guidance.
            Rated 4.6/5 based on 103+ reviews on Google.
          </p>
          {/* Google Rating */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < 5 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'} />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">4.6/5</span>
            <span className="text-sm text-gray-500">• 103+ Reviews</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{testimonial.initial}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 mb-6">Trusted & Recognized By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['IELTS Official', 'British Council', 'IDP Education', 'Pearson PTE', 'ETS TOEFL'].map((brand) => (
              <div key={brand} className="px-4 py-2 bg-gray-100 rounded-lg">
                <span className="text-sm font-semibold text-gray-600">{brand}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
