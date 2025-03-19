import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 group">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => scrollTo('home')}
            >
              <UtensilsCrossed
                className={`h-8 w-8 transition-transform duration-300 ${
                  isScrolled ? 'text-black' : 'text-white'
                } group-hover:scale-110`}
              />
              <span
                className={`ml-2 text-xl font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                Royal Bengla
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'menu', 'about', 'reservations', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-300 ${
                    isScrolled ? 'text-black hover:text-amber-600' : 'text-white hover:text-amber-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {['home', 'menu', 'about', 'reservations', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-gray-800 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium capitalize w-full text-left"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
