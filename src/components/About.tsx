import React from 'react';
import { Clock, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Clock,
              title: 'Est. 1985',
              description: 'Nos pots apportent un goût unique aux plats'
            },
            {
              icon: Award,
              title: 'le plus aimé',
              description: 'Style de cuisson unique en marmite'
            },
            {
              icon: Users,
              title: 'Royal Bangla  ',
              description: 'Servi avec passion et amour'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg
                transform hover:-translate-y-1 transition-all duration-300"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Restaurant interior"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white p-8">
            <p className="text-xl md:text-2xl text-center max-w-2xl">
              "Royal Bangla vous invite à découvrir des plats aux saveurs royales, tels que le biryani,  un mets autrefois réservé aux cours royales indiennes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;