import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import scanMeIcon from './assets/scan-me.png';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />

      {/* Floating Image */}
      <img 
  src={scanMeIcon}
  alt="Floating Icon"
  className="fixed bottom-4 right-4 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain shadow-lg rounded-[8px]"
/>

    </div>
  );
}

export default App;
