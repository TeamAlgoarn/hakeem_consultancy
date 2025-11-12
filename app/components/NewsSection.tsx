// 'use client';
// import { useEffect, useState } from 'react';

// type News = {
//   id: string;
//   title: string;
//   body: string;
//   updatedAt: string;
// };

// const KEY = 'sv_news';

// export default function NewsSection() {
//   const [news, setNews] = useState<News[]>([]);

//   useEffect(() => {
//     try {
//       const data = JSON.parse(localStorage.getItem(KEY) || '[]');
//       setNews(data);
//     } catch (e) {
//       console.error('Failed to load news', e);
//     }
//   }, []);

//   if (!news.length) return null;

//   return (
//     <section className="bg-gray-50 py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-center mb-8">📰 Latest News</h2>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {news.slice(0, 6).map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-2xl shadow hover:shadow-lg p-6 border border-gray-100 transition"
//             >
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-700 text-sm line-clamp-3">{item.body}</p>
//               <p className="text-xs text-gray-500 mt-3">
//                 Updated: {item.updatedAt.slice(0, 10)}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
