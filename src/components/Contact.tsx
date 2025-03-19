import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '+1 (555) 123-4567',
                link: 'tel:+15551234567'
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'reservations@saveur.com',
                link: 'mailto:reservations@saveur.com'
              },
              {
                icon: MapPin,
                title: 'Address',
                content: '123 Culinary Avenue, Foodie District, NY 10001',
                link: 'https://maps.google.com'
              }
            ].map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="flex items-center space-x-4 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center
                  group-hover:bg-amber-700 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645890124663!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;