
import React, { useState } from 'react';
import { CopyBlock } from '../components/CopyBlock';
import { WorkshopPageData } from '../types';

interface WorkshopPageProps {
  type: 'copywriter' | 'reporter' | 'client';
  showToast: (msg: string) => void;
}

const PAGE_DATA: Record<string, WorkshopPageData> = {
  copywriter: {
    title: "Personal Writing Assistant",
    subtitle: "Make ChatGPT write just like you.",
    description: "This assistant is designed to learn your personal style. It will stop using robotic words and start writing in a voice that feels human and helpful.",
    steps: [
      "Open ChatGPT and click 'Explore GPTs' on the left sidebar.",
      "Click the '+ Create' button in the top right.",
      "Click the 'Configure' tab at the top of the screen.",
      "Follow the blocks below to fill out your new assistant."
    ],
    blocks: [
      {
        title: "Instructions (The 'Brain')",
        description: "Copy this into the 'Instructions' box to tell the AI how to behave.",
        content: `You are my Personal Writing Assistant. Your goal is to help me write emails, social media posts, and articles.

How you should write:
- Be clear and friendly. No corporate jargon.
- Use short sentences and simple words.
- Don't use "robotic" words like: unleash, elevate, or tap into.
- Always ask me: "Who are we writing this for?" if you aren't sure.`
      },
      {
        title: "Conversation Starters",
        description: "Copy these into the 'Conversation Starters' boxes to give yourself quick options.",
        content: `1. "Help me rewrite this email to sound more friendly: [Paste Email]"
2. "Give me 3 ideas for a LinkedIn post about my week."
3. "Can you check this draft for any boring or overused words?"
4. "Draft a short thank-you note to a client."`
      },
      {
        title: "Personal Writing Rules",
        description: "You can add these to the end of your instructions for extra polish.",
        content: `Special Rules:
- Never use more than 3 sentences in a single paragraph.
- Use bullet points whenever possible to make it easy to read.
- If I give you a rough idea, turn it into a clear 3-step plan.`
      }
    ]
  },
  reporter: {
    title: "Expert News Reporter",
    subtitle: "Test your ideas with a pro.",
    description: "This assistant acts like a tough but fair news reporter. It's great for practicing interviews or making sure your project announcements make sense.",
    steps: [
      "Go to the 'Create' page for a new GPT in ChatGPT.",
      "Select 'Configure' at the top.",
      "Give it a name like 'The News Room'.",
      "Paste the following blocks into the Instruction fields."
    ],
    blocks: [
      {
        title: "The Reporter Voice",
        description: "This tells the AI to act like an investigative journalist.",
        content: `You are a Senior News Reporter. Your job is to help me refine my ideas by being a bit skeptical.

When I tell you about a project:
1. Identify what is most interesting about it.
2. Ask me 3 "tough" questions that a reporter would ask.
3. Suggest 3 catchy headlines that a newspaper would actually print.`
      },
      {
        title: "Headline Variations",
        description: "Add these to your instructions to help with catchy titles.",
        content: `When generating headlines, always provide:
- One "Shocking" headline.
- One "Practical" headline.
- One "Short and Punchy" headline (3 words max).`
      },
      {
        title: "Interview Practice",
        description: "A quick prompt to get you ready for a meeting.",
        content: `Let's practice an interview. I'm going to tell you my news, and I want you to ask me questions one by one. Don't be afraid to ask for proof or data!`
      }
    ]
  },
  client: {
    title: "Friendly Brand Guide",
    subtitle: "Keep your brand voice consistent.",
    description: "Create an assistant that knows your company's rules and frequently asked questions. It's like having a project manager who never forgets a detail.",
    steps: [
      "Open the GPT 'Configure' tab.",
      "If you have a PDF of your company rules or FAQ, upload it to 'Knowledge'.",
      "Paste the instructions below to set the 'Brand Guardian' personality."
    ],
    blocks: [
      {
        title: "Brand Voice Rules",
        description: "Copy this into 'Instructions' to keep the AI on-brand.",
        content: `You are our Brand Guide. You help our team stay consistent and friendly.

Our Rules:
- We are always helpful and never condescending.
- If you don't know the answer, say: "That's a great question, I'll have to double-check that with the team."
- Never promise specific dates unless they are in your files.`
      },
      {
        title: "FAQ Handling",
        description: "Helps the AI look through your uploaded files.",
        content: `When a team member asks a question about our policies:
1. Look through the uploaded files first.
2. Provide a simple, clear answer.
3. Tell them which document you found the answer in.`
      },
      {
        title: "Approval Checklist",
        description: "A simple tool to help you check your work.",
        content: `Before we finish any task, check it against this list:
- Is it friendly?
- Is the spelling correct?
- Is there a clear next step for the client?`
      }
    ]
  }
};

export const WorkshopPage: React.FC<WorkshopPageProps> = ({ type, showToast }) => {
  const data = PAGE_DATA[type];
  const [copiedCount, setCopiedCount] = useState(0);
  const totalBlocks = data.blocks.length;

  const handleBlockCopy = () => {
    setCopiedCount(prev => Math.min(prev + 1, totalBlocks));
  };

  const progressPercent = (copiedCount / totalBlocks) * 100;

  return (
    <div className="pb-32">
      {/* Module Header */}
      <section className="pt-20 pb-16 border-b border-slate-900 bg-slate-900/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black uppercase tracking-widest text-purple-400 mb-6">
                Step {type === 'copywriter' ? '1' : type === 'reporter' ? '2' : '3'}
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">{data.title}</h1>
              <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                {data.description}
              </p>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] uppercase tracking-widest font-black text-slate-500">Progress</span>
              <div className="flex items-center gap-4">
                <div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-500 transition-all duration-700 ease-out" 
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="text-xs font-mono font-bold text-white">{copiedCount}/{totalBlocks}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pt-16">
        {/* Simple Setup Checklist */}
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 mb-20">
          <h2 className="text-lg font-bold mb-8 uppercase tracking-widest flex items-center gap-3">
            Setup Checklist
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {data.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-purple-400">
                  {idx + 1}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-16">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-black tracking-tight">Copy These Blocks</h2>
            <div className="h-px flex-grow bg-slate-900"></div>
          </div>
          
          {data.blocks.map((block, idx) => (
            <CopyBlock
              key={idx}
              title={block.title}
              description={block.description}
              content={block.content}
              onCopy={() => {
                showToast(`Copied ${block.title}`);
                handleBlockCopy();
              }}
            />
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-slate-900 text-center">
          <p className="text-slate-500 text-sm italic">
            "The best way to learn AI is to start using it."
          </p>
        </div>
      </div>
    </div>
  );
};
