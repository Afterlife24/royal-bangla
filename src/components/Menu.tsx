// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const menuItems = [
//   {
//     category: 'Starters',
//     items: [
//       {
//         name: 'Truffle Arancini',
//         description: 'Crispy risotto balls with black truffle and mozzarella',
//         price: '$16',
//         image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         name: 'Tuna Tartare',
//         description: 'Fresh tuna with avocado, sesame oil, and won ton crisps',
//         price: '$18',
//         image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//       }
//     ]
//   },
//   {
//     category: 'Main Courses',
//     items: [
//       {
//         name: 'Wagyu Ribeye',
//         description: 'Grade A5 Japanese Wagyu with roasted vegetables',
//         price: '$85',
//         image: 'https://images.unsplash.com/photo-1546833998-877b37c2e604?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         name: 'Lobster Thermidor',
//         description: 'Whole lobster with brandy cream sauce',
//         price: '$75',
//         image: 'https://images.unsplash.com/photo-1553247407-23251ce81f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//       }
//     ]
//   }
// ];

// const Menu = () => {
//   const [activeCategory, setActiveCategory] = useState(0);

//   return (
//     <section id="menu" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        
//         <div className="flex justify-center space-x-4 mb-12">
//           {menuItems.map((category, index) => (
//             <button
//               key={category.category}
//               onClick={() => setActiveCategory(index)}
//               className={`px-6 py-2 rounded-full transition-all duration-300 ${
//                 activeCategory === index
//                   ? 'bg-amber-600 text-white'
//                   : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//               }`}
//             >
//               {category.category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {menuItems[activeCategory].items.map((item) => (
//             <div
//               key={item.name}
//               className="group relative overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300"
//             >
//               <div className="relative h-64">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
//                   <p className="mb-2">{item.description}</p>
//                   <p className="text-xl font-bold">{item.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;



import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import img1 from "../assets/2.jpeg";


const menuItems = [
  {
    category: 'Nos plats ',
    items: [
      {
        name: 'Butter chicken ',
        description: 'Crispy risotto balls with black truffle and mozzarella',
        price: '$16',
        image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Poulet  korma ',
        description: 'Fresh tuna with avocado, sesame oil, and won ton crisps',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      // {
      //   name: 'Foie Gras',
      //   description: 'Pan-seared foie gras with brioche and fig jam',
      //   price: '$24',
      //   image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      // },
      // {
      //   name: 'Oysters Rockefeller',
      //   description: 'Baked oysters with spinach and hollandaise',
      //   price: '$22',
      //   image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      // }
    ]
  },
  {
    category: 'Nos entrées',
    items: [
      {
        name: 'Royal Tikka ',
        description: 'Grade A5 Japanese Wagyu with roasted vegetables',
        price: '$85',
        image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Tandoori',
        description: 'Whole lobster with brandy cream sauce',
        price: '$75',
        image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      // {
      //   name: 'Duck Confit',
      //   description: 'Classic French duck confit with pommes sarladaises',
      //   price: '$45',
      //   image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      // },
      // {
      //   name: 'Sea Bass',
      //   description: 'Pan-seared sea bass with saffron risotto',
      //   price: '$52',
      //   image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      // }
    ]
  },
  // {
  //   category: 'Pasta & Risotto',
  //   items: [
  //     {
  //       name: 'Truffle Pasta',
  //       description: 'Fresh tagliatelle with black truffle shavings',
  //       price: '$55',
  //       image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  //     },
  //     {
  //       name: 'Lobster Risotto',
  //       description: 'Carnaroli risotto with fresh Maine lobster',
  //       price: '$48',
  //       image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  //     },
  //     {
  //       name: 'Seafood Linguine',
  //       description: 'Mixed seafood in white wine and garlic sauce',
  //       price: '$42',
  //       image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  //     },
  //     {
  //       name: 'Wild Mushroom Risotto',
  //       description: 'Creamy risotto with seasonal wild mushrooms',
  //       price: '$38',
  //       image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  //     }
  //   ]
  // },
  // {
  //   category: 'Desserts',
  //   items: [
  //     {
  //       name: 'Crème Brûlée',
  //       description: 'Classic vanilla bean crème brûlée',
  //       price: '$14',
  //       image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  //     },
  //     {
  //       name: 'Chocolate Soufflé',
  //       description: 'Warm chocolate soufflé with vanilla ice cream',
  //       price: '$16',
  //       image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  //     },
  //     {
  //       name: 'Opera Cake',
  //       description: 'Layers of almond sponge, coffee buttercream, and chocolate',
  //       price: '$15',
  //       image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  //     },
  //     {
  //       name: 'Fruit Tart',
  //       description: 'Seasonal fruits on vanilla pastry cream',
  //       price: '$13',
  //       image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  //     }
  //   ]
  // }
];

const featuredDishes = [
  {
    name: 'Nos pains',
    description: 'Le naan : la douceur moelleuse qui accompagne tous vos repas',
    price: '$120',
    image: img1
  },
  {
    name: 'Duck à l\'Orange',
    description: 'Classic French duck with citrus sauce',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Beef Wellington',
    description: 'Prime beef wrapped in puff pastry',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Truffle Pasta',
    description: 'Fresh pasta with black truffle shavings',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % featuredDishes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + featuredDishes.length) % featuredDishes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleOrder = (itemName: string, price: string) => {
    console.log(`Ordering ${itemName} for ${price}`);
    // Add your order handling logic here
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Notre menu</h2>

        {/* Featured Dishes Carousel */}
        <div className="relative mb-16 overflow-hidden rounded-xl shadow-2xl">
          <div className="relative h-[500px] overflow-hidden">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentSlide
                    ? 'translate-x-0'
                    : index < currentSlide
                    ? '-translate-x-full'
                    : 'translate-x-full'
                }`}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{dish.name}</h3>
                  <p className="text-lg mb-2">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-amber-400">{dish.price}</p>
                    <a href="https://royalbangla-scanme.gofastapi.com/?table_num=0">
                    <button
                      onClick={() => handleOrder(dish.name, dish.price)}
                      className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300"
                    >
                      <ShoppingBag size={20} />
                      <span>Order Now</span>
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {featuredDishes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-4">
          {menuItems.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {menuItems[activeCategory].items.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="mb-2">{item.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-xl font-bold text-amber-400">{item.price}</p>
                      <a href="https://royalbangla-scanme.gofastapi.com/?table_num=0">
  <button
    onClick={() => handleOrder(item.name, item.price)}
    className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300"
  >
    <ShoppingBag size={20} />
    <span>Order Now</span>
  </button>
</a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

