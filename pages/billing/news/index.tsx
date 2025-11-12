// 'use client';
// import { useEffect, useState } from "react";

// type News = {
//   id: string;
//   title: string;
//   body: string;
//   createdAt: string;
//   updatedAt: string;
// };

// const KEY = "sv_news";

// const lsGet = <T,>(k: string, def: T): T => {
//   try { return JSON.parse(localStorage.getItem(k) || JSON.stringify(def)); } catch { return def; }
// };
// const listNews = (): News[] => lsGet<News[]>(KEY, []);
// const saveNews = (items: News[]) => localStorage.setItem(KEY, JSON.stringify(items));

// export default function NewsAdmin() {
//   const [items, setItems] = useState<News[]>([]);
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [filter, setFilter] = useState("");

//   useEffect(() => setItems(listNews()), []);

//   const reset = () => { setTitle(""); setBody(""); setEditingId(null); };

//   const upsert = () => {
//     if (!title.trim()) return alert("Title required");
//     const now = new Date().toISOString();

//     if (editingId) {
//       const next = items.map(n => n.id === editingId ? { ...n, title, body, updatedAt: now } : n);
//       saveNews(next); setItems(next); reset(); return;
//     }
//     const n: News = { id: crypto.randomUUID(), title: title.trim(), body: body.trim(), createdAt: now, updatedAt: now };
//     const next = [n, ...items];
//     saveNews(next); setItems(next); reset();
//   };

//   const edit = (id: string) => {
//     const n = items.find(x => x.id === id)!;
//     setTitle(n.title); setBody(n.body); setEditingId(n.id);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const remove = (id: string) => {
//     if (!confirm("Delete this news item?")) return;
//     const next = items.filter(n => n.id !== id);
//     saveNews(next); setItems(next);
//   };

//   const filtered = items.filter(n =>
//     n.title.toLowerCase().includes(filter.toLowerCase()) ||
//     n.body.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-8">
//       <div className="max-w-5xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-2xl font-semibold">Latest News (Admin)</h1>
//           <div className="flex gap-2">
//             <input
//               placeholder="Search news…"
//               className="w-72 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//             />
//             <a
//               href="/billing"
//               className="rounded-xl px-4 py-2 text-gray-700 border border-gray-300 bg-white hover:bg-gray-50"
//             >Back to Billing</a>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 mb-8">
//           <div className="grid gap-3">
//             <input
//               className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Title *"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <textarea
//               className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 h-28"
//               placeholder="Body"
//               value={body}
//               onChange={(e) => setBody(e.target.value)}
//             />
//             <div className="flex gap-3">
//               <button
//                 onClick={upsert}
//                 className="rounded-xl px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 text-sm font-medium"
//               >
//                 {editingId ? "Update" : "Add News"}
//               </button>
//               {editingId && (
//                 <button
//                   onClick={reset}
//                   className="rounded-xl px-4 py-2 text-gray-700 border border-gray-300 bg-white hover:bg-gray-50 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* List */}
//         <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden">
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-50">
//               <tr className="text-left">
//                 <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-600">Title</th>
//                 <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-600">Updated</th>
//                 <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-600 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map(n => (
//                 <tr key={n.id} className="border-t border-gray-100">
//                   <td className="px-6 py-3">
//                     <div className="font-medium text-gray-900">{n.title}</div>
//                     <div className="text-gray-600 line-clamp-2">{n.body}</div>
//                   </td>
//                   <td className="px-6 py-3 text-gray-600">{n.updatedAt.slice(0,10)}</td>
//                   <td className="px-6 py-3">
//                     <div className="flex justify-end gap-2">
//                       <button
//                         className="px-3 py-1 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-xs font-medium text-gray-700"
//                         onClick={() => edit(n.id)}
//                       >Edit</button>
//                       <button
//                         className="px-3 py-1 rounded-lg border border-red-200 bg-white hover:bg-red-50 text-xs font-medium text-red-700"
//                         onClick={() => remove(n.id)}
//                       >Delete</button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//               {filtered.length === 0 && (
//                 <tr><td colSpan={3} className="px-6 py-10 text-center text-gray-500">No news yet.</td></tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import { useEffect, useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash, HiPlus, HiX } from 'react-icons/hi';

type News = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

const KEY = 'sv_news';

// helpers (unchanged)
const lsGet = <T,>(k: string, def: T): T => {
  try { return JSON.parse(localStorage.getItem(k) || JSON.stringify(def)); } catch { return def; }
};
const listNews = (): News[] => lsGet<News[]>(KEY, []);
const saveNews = (items: News[]) => localStorage.setItem(KEY, JSON.stringify(items));

export default function NewsAdmin() {
  const [items, setItems] = useState<News[]>([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filter, setFilter] = useState('');

  useEffect(() => setItems(listNews()), []);

  const reset = () => {
    setTitle('');
    setBody('');
    setEditingId(null);
  };

  const upsert = () => {
    if (!title.trim()) return alert('Title required');
    const now = new Date().toISOString();

    if (editingId) {
      const next = items.map(n =>
        n.id === editingId ? { ...n, title: title.trim(), body: body.trim(), updatedAt: now } : n
      );
      saveNews(next); setItems(next); reset(); return;
    }

    const n: News = {
      id: crypto.randomUUID(),
      title: title.trim(),
      body: body.trim(),
      createdAt: now,
      updatedAt: now,
    };
    const next = [n, ...items];
    saveNews(next); setItems(next); reset();
  };

  const edit = (id: string) => {
    const n = items.find(x => x.id === id);
    if (!n) return;
    setTitle(n.title);
    setBody(n.body);
    setEditingId(n.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const remove = (id: string) => {
    if (!confirm('Delete this news item?')) return;
    const next = items.filter(n => n.id !== id);
    saveNews(next); setItems(next);
  };

  const filtered = items.filter(n =>
    n.title.toLowerCase().includes(filter.toLowerCase()) ||
    n.body.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Header bar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Latest News (Admin)</h1>

          <div className="flex items-center gap-2">
            <input
              placeholder="Search news…"
              className="w-72 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <a
              href="/billing"
              className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Back to Billing
            </a>
          </div>
        </div>

        {/* Two-column layout: form (left) and card-style list (right) */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Form card */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h2 className="mb-4 text-lg font-semibold">Add / Edit News</h2>

              <div className="grid gap-3">
                <input
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Title *"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="h-36 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={upsert}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    {editingId ? (
                      <>
                        <HiOutlinePencil className="h-4 w-4" /> Update
                      </>
                    ) : (
                      <>
                        <HiPlus className="h-4 w-4" /> Add News
                      </>
                    )}
                  </button>

                  {editingId && (
                    <button
                      onClick={reset}
                      className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <HiX className="h-4 w-4" /> Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Latest News card (matches your design) */}
          <aside className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold">Latest News</h3>
            <hr className="my-4 border-gray-200" />

            {filtered.length === 0 ? (
              <p className="py-8 text-center text-gray-500">No news yet.</p>
            ) : (
              <ul className="space-y-6">
                {filtered.map((n) => (
                  <li key={n.id} className="group relative">
                    {/* Actions */}
                    <div className="absolute right-0 top-0 hidden gap-2 group-hover:flex">
                      <button
                        onClick={() => edit(n.id)}
                        className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50"
                        title="Edit"
                      >
                        <span className="inline-flex items-center gap-1">
                          <HiOutlinePencil className="h-4 w-4" /> Edit
                        </span>
                      </button>
                      <button
                        onClick={() => remove(n.id)}
                        className="rounded-md border border-red-200 bg-white px-2.5 py-1 text-xs font-medium text-red-700 hover:bg-red-50"
                        title="Delete"
                      >
                        <span className="inline-flex items-center gap-1">
                          <HiOutlineTrash className="h-4 w-4" /> Delete
                        </span>
                      </button>
                    </div>

                    <h4 className="pr-28 font-semibold text-gray-900">
                      {n.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {n.body}
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      Updated: {n.updatedAt.slice(0, 10)}
                    </p>

                    <hr className="mt-4 border-gray-200" />
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
