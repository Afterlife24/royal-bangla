import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Saveur</h3>
            <p className="text-gray-400">
              Experience the finest dining in New York City.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mon-Thu: 11:30 AM - 10:00 PM</li>
              <li>Fri-Sat: 11:30 AM - 11:00 PM</li>
              <li>Sun: 11:30 AM - 9:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Reservations', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, link: 'https://facebook.com' },
                { icon: Instagram, link: 'https://instagram.com' },
                { icon: Twitter, link: 'https://twitter.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center
                    hover:bg-amber-600 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Saveur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;