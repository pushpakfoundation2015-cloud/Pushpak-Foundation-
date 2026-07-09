export type Language = 'en' | 'gu';

export type Page =
  | 'home'
  | 'about'
  | 'vision-mission'
  | 'activities'
  | 'education'
  | 'scholarship'
  | 'skill-development'
  | 'women-empowerment'
  | 'health-awareness'
  | 'nt-dnt'
  | 'gallery'
  | 'news'
  | 'volunteer'
  | 'donate'
  | 'contact';

export interface GalleryItem {
  id: string;
  url: string;
  category: 'all' | 'education' | 'skills' | 'women' | 'health' | 'community' | 'environment';
  titleEn: string;
  titleGu: string;
  descriptionEn: string;
  descriptionGu: string;
}

export interface NewsArticle {
  id: string;
  date: string;
  titleEn: string;
  titleGu: string;
  summaryEn: string;
  summaryGu: string;
  contentEn: string;
  contentGu: string;
  image: string;
  categoryEn: string;
  categoryGu: string;
}

export interface ActivityDetail {
  id: string;
  pageId: Page;
  titleEn: string;
  titleGu: string;
  descriptionEn: string;
  descriptionGu: string;
  image: string;
  highlightsEn: string[];
  highlightsGu: string[];
}
