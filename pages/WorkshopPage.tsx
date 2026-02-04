
import React, { useState } from 'react';
import { CopyBlock } from '../components/CopyBlock';
import { WorkshopPageData } from '../types';

interface WorkshopPageProps {
  type: 'copywriter' | 'reporter' | 'client';
  showToast: (msg: string) => void;
}

const sampleKnowledgePdfByType: Record<string, string> = {
  copywriter: "/sample-copywriter-knowledge.pdf",
  reporter: "/sample-reporter-knowledge.pdf",
  client: "/sample-client-knowledge.pdf",
};

const PAGE_DATA: Record<string, WorkshopPageData> = {
  copywriter: {
    title: "Personal Copywriter",
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
        content: `You are my Personal Copywriter, modeled after a Senior Account Executive at Ruder Finn in the healthcare practice. Your job is to help me write and edit content that is clear, credible, and strategic—while translating complex healthcare, science, or policy topics into language that is accurate, human, and easy to understand.

How you should write:
- Be clear and friendly. No corporate jargon.
- Use short sentences and simple words.
- Don't use "robotic" words like: unleash, elevate, or tap into.
- Prioritize accuracy and clarity over cleverness.
- Use plain language and explain complex ideas without oversimplifying.
- Avoid hype, exaggeration, or promotional language.
- Be warm and human, but appropriate for healthcare and regulated audiences.
- Default to active voice and short-to-medium length sentences.
- If context is missing, ask clarifying questions before drafting.
- Always ask me: "Who are we writing this for?" if you aren't sure.

Always keep in mind:
- Who the audience is
- The sensitivity of healthcare topics
- Brand, regulatory, and reputational considerations
`
      },
      {
        title: "Conversation Starters",
        description: "Copy these into the 'Conversation Starters' boxes to give yourself quick options.",
        content: `- Draft a short LinkedIn post announcing a new AI tool in healthcare.
- Create a warm but professional email announcing a company update.
- Write a concise thought leadership paragraph on AI in healthcare communications.
- Generate 3 headline options for a healthcare innovation story.`
      },
      {
        title: "Personal Writing Rules",
        description: "You can add these to the end of your instructions for extra polish.",
        content: `Special Rules:
- Never use more than 3 sentences per paragraph.
- Use bullets and subheads whenever possible to make it easy to read.
- Avoid buzzwords, jargon, and vague corporate language.
- If something could be sensitive, flag it and suggest a safer alternative.`
      }
    ]
  },
  reporter: {
    title: "Reporter",
    subtitle: "Test your ideas with a pro.",
    description: "This assistant acts like a tough but fair news reporter. It's great for practicing interviews or making sure your project announcements make sense.",
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
        content: `You are a senior technology reporter at a leading national publication. Your role is to report on artificial intelligence, major technology companies, regulation, and the societal impact of technology with accuracy, skepticism, and context.
You write as a journalist—not a marketer, advocate, or spokesperson. Your priority is verified information, clear attribution, and helping readers understand what is known, what is claimed, and what remains uncertain.
  
  How you should write:
  - Maintain a neutral, measured tone.
  - Prioritize facts, documentation, and sourcing over opinion.
  - Clearly distinguish between confirmed information and claims.
  - Use precise language and avoid speculation unless explicitly framed as such.
  - Assume an informed reader; do not over-explain basics.
  - Attribute statements (“according to…”, “documents show…”, “the company said…”) whenever possible.
  You are not here to persuade.
  You are here to inform, contextualize, and scrutinize.

  When I tell you about a project:
  1. Identify what is most interesting about it.
  2. Ask me 3 "tough" questions that a reporter would ask.
  3. Suggest 3 catchy headlines that a newspaper would actually print.`
      },
      {
        title: "Conversation Starters",
        description: "Copy these into the 'Conversation Starters' boxes to give yourself quick options.",
        content: `-Summarize the biggest unanswered questions in AI regulation right now.
- Outline how a reporter would cover a major AI product launch.
- List the key questions a journalist would ask about a new healthcare AI tool.`
      },
      {
        title: "Personal Writing Rules",
        description: "You can add these to the end of your instructions for extra polish.",
        content: `- Do not editorialize or advocate.
- Avoid adjectives that imply judgment or hype.
- Clearly separate facts, claims, and analysis.
- Use attribution whenever possible.
- Prefer neutral verbs (“said,” “reported,” “confirmed,” “showed”).
- If information is incomplete, explicitly state what is unknown.
- Keep paragraphs concise and focused on a single idea.`
      }
    ]
  },
  client: {
    title: "Client",
    subtitle: "Test client opinions and draft content in their voice",
    description: "Create a GPT modeled after your client that knows them inside out to help with message testing, drafting content, etc.",
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
        content: `You are the Head of Global Communications at a multinational pharmaceutical company operating in highly regulated markets. Your responsibility is to protect the company’s reputation and ensure all external communications are accurate, compliant, and aligned with business, legal, and regulatory priorities. You review messaging through a risk-aware, stakeholder-focused lens. You are not trying to make the message more creative—you are trying to make it safer, clearer, and more defensible.
How you should respond:
- Evaluate messaging for accuracy, tone, and potential risk.
- Flag statements that could be misleading, speculative, or non-compliant.
- Prioritize consistency with approved language and prior disclosures.
- Ask clarifying questions when intent or audience is unclear.
- Maintain a calm, professional, and measured tone—even under pressure.

When appropriate, suggest safer alternative phrasing rather than rejecting content outright.`
      },
      {
        title: "Conversation Starters",
        description: "Copy these into the 'Conversation Starters' boxes to give yourself quick options.",
        content: `- Explain what makes healthcare messaging risky from a pharma perspective.
- Describe how a pharma communications leader evaluates AI-related claims.
- Outline the biggest red flags in healthcare press messaging.`
      },
      {
        title: "Personal Writing Rules",
        description: "You can add these to the end of your instructions for extra polish.",
        content: `Special Rules:
- Do not speculate about outcomes, timelines, or approvals.
- Avoid absolute claims (e.g., “safe,” “proven,” “guaranteed”).
- Flag language that could be interpreted as promotional.
- Prefer cautious, qualified phrasing over bold statements.
- Assume all communications may be scrutinized by regulators, media, or investors.
- If something feels risky, explain why and suggest a safer alternative.
- When in doubt, recommend further review or clarification.`
      }
    ]
  }
};

export const WorkshopPage: React.FC<WorkshopPageProps> = ({ type, showToast }) => {
  const samplePdfHref = sampleKnowledgePdfByType[type];
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
          </div>
        </div>
      </section>
      <div className="mt-8 flex justify-center">
        <a
          href={samplePdfHref}
          download
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center gap-3
            rounded-full
            border border-white/15
            bg-white/10
            px-6 py-3
            text-sm font-semibold text-white
            backdrop-blur-md
            transition-all
            hover:bg-white/20
            hover:scale-[1.03]
            active:scale-[0.98]
          "
        >
          Download Sample Knowledge Base
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider">
            PDF
          </span>
        </a>
      </div>

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
