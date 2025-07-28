import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = () => {
  if (formData.name && formData.email && formData.message) {
    console.log('Form Submitted:', formData); // 👈 Logs to console
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  } else {
    alert('Please fill in all fields.');
  }
};


  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need to schedule an appointment? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Emergency</p>
                    <p className="opacity-90">+91 911-SMARTCARE</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="opacity-90">info@smartcare.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="opacity-90">123 Healthcare Avenue<br />Medical District, Delhi 110001</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                <h4 className="font-semibold mb-4">Working Hours</h4>
                <div className="space-y-2 text-sm opacity-90">
                  <p>Emergency: 24/7</p>
                  <p>OPD: Mon-Sat 8:00 AM - 8:00 PM</p>
                  <p>Sunday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
