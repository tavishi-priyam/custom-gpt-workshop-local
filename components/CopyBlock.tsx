
import React, { useState } from 'react';

interface CopyBlockProps {
  title: string;
  description: string;
  content: string;
  onCopy: () => void;
}

export const CopyBlock: React.FC<CopyBlockProps> = ({ title, description, content, onCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      onCopy();
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 lg:p-8 transition-all duration-300">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
          </div>
          <button
            onClick={handleCopy}
            className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              isCopied
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                : 'bg-white text-black hover:bg-slate-200'
            }`}
          >
            {isCopied ? 'Copied!' : 'Copy Text'}
          </button>
        </div>
        
        <div className="relative overflow-hidden rounded-xl bg-black/40 border border-slate-800/80">
          <pre className="p-6 text-sm text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-[400px] overflow-y-auto custom-scrollbar">
            {content}
          </pre>
        </div>
      </div>
    </div>
  );
};
