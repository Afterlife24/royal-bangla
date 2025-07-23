import React, { useEffect, useState } from 'react';
import bgImage from "../assets/1.jpeg";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: `center ${offset * 0.5}px`,
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in">
          Bienvenue à Royal Bangla
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 opacity-0 animate-slide-up">
          Bécouvrez le goût de l'excellence
        </p>
        <div className="flex flex-wrap justify-center gap-4">
  <button 
  onClick={() => {
    window.location.href = "https://www.royalbangla-scanme.afterlife.org.in//?table_num=0";
  }}
  className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold
    hover:bg-amber-700 transform hover:scale-105 transition-all duration-300
    opacity-0 animate-fade-in-delay"
>
  Réservez votre table
</button>

<button 
  onClick={() => {
    window.location.href = "https://www.royalbangla-scanme.afterlife.org.in//?table_num=0";
  }}
  className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold
    hover:bg-amber-700 transform hover:scale-105 transition-all duration-300
    opacity-0 animate-fade-in-delay"
>
  Cliquer et collecter
</button>

</div>


      </div>
    </section>
  );
};

export default Hero;
