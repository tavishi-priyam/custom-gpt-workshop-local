
import React from 'react';
import { PageId } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'copywriter', label: 'Copywriter' },
    { id: 'reporter', label: 'Reporter' },
    { id: 'client', label: 'Client' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50 selection:bg-purple-500/30 selection:text-purple-200">
      <nav className="sticky top-0 z-50 glass border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center neon-glow transform transition-transform group-hover:scale-105 group-hover:rotate-3">
                <span className="text-white font-black text-xl">RF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-none">Custom GPT Workshop</span>
                {/* <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">GPT Builder Series</span> */}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as PageId)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activePage === item.id
                      ? 'text-purple-400'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {item.label}
                  {activePage === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};
