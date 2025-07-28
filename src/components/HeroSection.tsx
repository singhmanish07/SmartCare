import React from 'react';
import { Clock, Heart, Award, Stethoscope } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
   <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Your Health, Our <span className="text-blue-600">Priority</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Experience world-class healthcare with our team of expert doctors, 
              state-of-the-art facilities, and compassionate care available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Appointment
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-lg font-semibold">
                Emergency Care
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-100 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Stethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Expert Care</h3>
                  <p className="text-sm text-gray-600">Specialized treatment</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">24/7 Service</h3>
                  <p className="text-sm text-gray-600">Always available</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Certified</h3>
                  <p className="text-sm text-gray-600">Quality assured</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Compassion</h3>
                  <p className="text-sm text-gray-600">Patient-centered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
