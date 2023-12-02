export type bookType = {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  image: string;
  url: string;
};

export type BookDetailType = {
  title: string;
  subtitle: string;
  description: string;
  authors: string;
  publisher: string;
  pages: number;
  year: number;
  image: string;
  url: string;
  download: string;
};
