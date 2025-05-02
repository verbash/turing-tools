export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterSite?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
  };
}

export const defaultSEO: SEOProps = {
  title: "Turing Tools",
  description: "A collection of tools for developers",
  keywords: ["developer tools", "productivity", "software development"],
  author: "Turing Tools",
  ogType: "website",
  twitterCard: "summary_large_image",
  robots: {
    index: true,
    follow: true,
  },
};
