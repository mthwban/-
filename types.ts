
import React from 'react';

export type Language = 'en' | 'ar';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface ExperienceItem {
  title: LocalizedString;
  company: LocalizedString;
  period: LocalizedString;
  description: LocalizedString[];
  tags: LocalizedString[];
}

export interface CertificationItem {
  title: LocalizedString;
  issuer: LocalizedString;
  date: LocalizedString;
  url?: string;
}

export interface SkillGroup {
  category: LocalizedString;
  items: LocalizedString[];
  icon: React.ReactNode;
}
