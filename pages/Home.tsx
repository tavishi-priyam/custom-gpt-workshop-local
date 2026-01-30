
import React from 'react';
import { PageId } from '../types';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'copywriter',
      title: 'Personal Writing Assistant',
      tag: 'Writing',
      desc: 'Create an AI that writes exactly like you. Perfect for emails, blogs, and social posts.',
      icon: '✍️',
      accent: 'bg-purple-500'
    },
    {
      id: 'reporter',
      title: 'Expert News Reporter',
      tag: 'Strategy',
      desc: 'Get help drafting pitches and testing your ideas against a "tough" reporter persona.',
      icon: '🎙️',
      accent: 'bg-blue-500'
    },
    {
      id: 'client',
      title: 'Friendly Brand Guide',
      tag: 'Support',
      desc: 'An AI that knows your brand inside out to help with customer questions and approvals.',
      icon: '🤝',
      accent: 'bg-emerald-500'
    },
  ];

  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-48 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full -z-10 animate-pulse-soft"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 mb-8">
            Beginner-Friendly Workshop
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
            Build Your Own <br />
            <span className="bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text">
              Custom AI Assistant
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-12 leading-relaxed text-balance">
            A "Custom GPT" is just a version of ChatGPT that's been given special instructions by you. 
            No coding required. Just copy, paste, and create.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => onNavigate('copywriter')}
              className="px-10 py-5 bg-white text-black hover:bg-slate-200 rounded-2xl font-black transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              Start Building
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What you'll build today</h2>
          <p className="text-slate-500">Pick one of these three assistants to get started.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="group relative cursor-pointer"
              onClick={() => onNavigate(card.id as PageId)}
            >
              <div className="relative h-full p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl flex flex-col transition-all duration-500 group-hover:translate-y-[-8px] group-hover:bg-slate-900/60">
                <div className={`w-14 h-14 rounded-2xl ${card.accent} bg-opacity-10 border border-current text-white flex items-center justify-center text-3xl mb-10 group-hover:scale-110 transition-transform duration-500`}>
                  {card.icon}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 self-start">
                  {card.tag}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-10 text-sm">
                  {card.desc}
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400">
                  Open Instructions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agenda Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-slate-900/20 border border-slate-900 rounded-[3rem] p-10 lg:p-16">
          <h2 className="text-3xl font-bold mb-10 text-center">How to use this site</h2>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Pick an Assistant', desc: 'Choose between the Writer, the Reporter, or the Brand Guide.' },
              { step: '2', title: 'Open ChatGPT', desc: 'Go to ChatGPT and click "Explore GPTs" then "Create".' },
              { step: '3', title: 'Copy & Paste', desc: 'Use the "Copy" buttons on this site to grab the instructions and paste them into ChatGPT.' },
              { step: '4', title: 'Test it out', desc: 'Start a chat with your new assistant and see how it works!' },
            ].map((s, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center font-bold text-purple-400">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-slate-500 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
