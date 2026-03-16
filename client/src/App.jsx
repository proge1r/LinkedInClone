import React from 'react';
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-[#f3f2ef] font-sans">
      <nav className="bg-white border-b border-gray-200 py-1.5 px-4 flex justify-center sticky top-0 z-50">
        <div className="max-w-6xl w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#0a66c2] text-white font-bold text-xl px-2 py-0.5 rounded">in</div>
            <span className="text-gray-800 font-bold text-lg hidden sm:inline">LinkedIn Clone</span>
          </div>
          
          <div className="flex space-x-6 text-gray-500 text-xs font-medium uppercase tracking-wider">
            <span className="cursor-pointer hover:text-black">Feed</span>
            <span className="cursor-pointer hover:text-black">Network</span>
            <span className="cursor-pointer hover:text-black">Jobs</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Система готова к работе
            </h1>
            <p className="text-gray-600 mb-6">
              Инфраструктура фронтенда настроена: React + Vite + Tailwind v4.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-100">
                Frontend: Ready
              </span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm border border-yellow-100">
                Backend: Waiting for Nikita...
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm border border-green-100">
                Git: Need to connect Nikita
              </span>
            </div>
          </div>
          
          <div className="bg-gray-50 border-t border-gray-200 p-4">
            <p className="text-sm text-gray-500 text-center">
              Статус проекта: Step 0 (Infrastructure & Auth)
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200 animate-pulse">
            <div className="flex gap-3 items-center mb-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                <div className="h-3 w-24 bg-gray-100 rounded"></div>
              </div>
            </div>
            <div className="h-20 bg-gray-50 rounded"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;