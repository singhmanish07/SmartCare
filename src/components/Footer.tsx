import React from 'react';
import { Heart, Users, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">SmartCare</span>
            </div>
            <p className="text-blue-200 mb-6 max-w-md">
              Providing world-class healthcare services with compassion, expertise, 
              and cutting-edge medical technology for over two decades.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-800 rounded-full p-2 hover:bg-blue-700 transition-colors cursor-pointer">
                <Heart className="h-5 w-5" />
              </div>
              <div className="bg-blue-800 rounded-full p-2 hover:bg-blue-700 transition-colors cursor-pointer">
                <Users className="h-5 w-5" />
              </div>
              <div className="bg-blue-800 rounded-full p-2 hover:bg-blue-700 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Doctors</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Emergency Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Surgery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cardiology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pediatrics</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 SmartCare Hospital. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
