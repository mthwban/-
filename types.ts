// Added React import to fix the missing 'React' namespace error for React.ReactNode on line 20.
import React from 'react';

export type Language = 'en' | 'ar';

export interface MultilingualText {
  en: string;
  ar: string;
}

export interface Experience {
  title: MultilingualText;
  company: MultilingualText;
  period: MultilingualText;
  description: MultilingualText[];
  tags: MultilingualText[];
}

export interface Skill {
  category: MultilingualText;
  items: MultilingualText[];
  icon: React.ReactNode;
}

export interface Certification {
  title: MultilingualText;
  issuer: MultilingualText;
  date: MultilingualText;
  url: string;
}

export interface GalleryItem {
  src: string;
  title: MultilingualText;
  category: MultilingualText;
  caption: MultilingualText;
  phase: MultilingualText;
  kpi: MultilingualText;
}