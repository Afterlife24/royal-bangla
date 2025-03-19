// import React, { useState } from 'react';
// import { Calendar, Clock, Users } from 'lucide-react';

// const Reservations = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     date: '',
//     time: '',
//     guests: '2'
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Reservation submitted:', formData);
//   };

//   return (
//     <section id="reservations" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-12">Make a Reservation</h2>
        
//         <div className="max-w-2xl mx-auto">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Date
//                 </label>
//                 <div className="relative">
//                   <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                   <input
//                     type="date"
//                     required
//                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
//                     value={formData.date}
//                     onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Time
//                 </label>
//                 <div className="relative">
//                   <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                   <input
//                     type="time"
//                     required
//                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
//                     value={formData.time}
//                     onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Guests
//                 </label>
//                 <div className="relative">
//                   <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                   <select
//                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
//                     value={formData.guests}
//                     onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
//                   >
//                     {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
//                       <option key={num} value={num}>
//                         {num} {num === 1 ? 'Guest' : 'Guests'}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-amber-600 text-white py-3 rounded-md font-semibold
//                 hover:bg-amber-700 transform hover:scale-105 transition-all duration-300"
//             >
//               Reserve Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reservations;