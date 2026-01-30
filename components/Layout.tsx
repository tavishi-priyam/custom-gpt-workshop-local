
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center neon-glow transform transition-transform group-hover:scale-105 group-hover:rotate-3">
                <span className="text-white font-black text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-none">Workshop<span className="text-purple-500">.ai</span></span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">GPT Builder Series</span>
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

      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="font-bold tracking-tight">Workshop.ai</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                Elevating human-AI collaboration through specialized agent design and deep prompt engineering frameworks.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-300 mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Prompt Gallery</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Knowledge Base</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-300 mb-6">Community</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Discord Server</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">GitHub Repository</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Twitter Updates</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 gap-4">
            <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
              © 2024 Workshop.ai Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-slate-600">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
