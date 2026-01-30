
export interface CopyBlock {
  title: string;
  description: string;
  content: string;
}

export interface WorkshopPageData {
  title: string;
  subtitle: string;
  description: string;
  steps: string[];
  blocks: CopyBlock[];
}

export type PageId = 'home' | 'copywriter' | 'reporter' | 'client';
