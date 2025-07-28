import React from 'react';
import { Shield, Users, Globe } from 'lucide-react';

const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "24x7 Emergency",
      description: "Round-the-clock emergency services with immediate response and critical care facilities.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Expert Doctors",
      description: "Highly qualified and experienced medical professionals across all specializations.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "International Patients",
      description: "Comprehensive care packages and support services for international patients.",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Why Choose SmartCare?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive healthcare services with cutting-edge technology 
            and personalized patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group hover:-translate-y-2"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
