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
                content: '0749809042',
                
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'Royalbangla2000@gmail.com',
                link: 'mailto:reservations@saveur.com'
              },
              {
                icon: MapPin,
                title: 'Address',
                content: 'Royal Bangla, Galerie Océane, 10 Rdpt de la Corbinerie, 44400 Rezé, France',
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
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d86812.69258235424!2d-1.6291777936210505!3d47.1598786578809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4805e97051ae8eaf%3A0x94e85ca693097bfd!2sGalerie%20Oc%C3%A9ane%2C%2010%20Rdpt%20de%20la%20Corbinerie%2C%2044400%20Rez%C3%A9%2C%20France!3m2!1d47.1599082!2d-1.5467773!5e0!3m2!1sen!2sin!4v1743354631500!5m2!1sen!2sin"
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