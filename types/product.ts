export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductContent = {
  overview: string[];
  benefits: string[];
  applications: {
    title: string;
    description: string;
  }[];
  industries: {
    title: string;
    description: string;
  }[];
  specifications: ProductSpec[];
  packaging: string[];
  qualityAssurance: string[];
  faqs: ProductFaq[];
};

export type Product = {
  slug: string;
  name: string;
  image: string;
  video: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  shortDescription: string;
  heroSubtitle: string;
  applications: string[];
  content: ProductContent;
};
