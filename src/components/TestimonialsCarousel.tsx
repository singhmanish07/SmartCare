import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsCarousel: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Patient",
      image: "👩‍💼",
      rating: 5,
      text: "The care I received at SmartCare was exceptional. The doctors were very professional and the facilities are world-class."
    },
    {
      name: "Rajesh Kumar",
      role: "Patient",
      image: "👨‍💼",
      rating: 5,
      text: "Emergency services here saved my life. The quick response and excellent medical team made all the difference."
    },
    {
      name: "Sarah Johnson",
      role: "International Patient",
      image: "👩‍🦰",
      rating: 5,
      text: "As an international patient, I was amazed by the coordination and support. Truly a global healthcare experience."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our patients about their experiences with SmartCare.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <div className="text-center">
              <div className="text-6xl mb-6">{testimonials[currentIndex].image}</div>
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="text-xl font-bold text-blue-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:bg-blue-50"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:bg-blue-50"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default TestimonialsCarousel;
