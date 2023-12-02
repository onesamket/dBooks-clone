import api from "./endpoint";

export const recentBooks = async () => {
  const books = await api.get("/api/recent");
  return books;
};
export const getBooksByCategory = async (category: string) => {
  const books = await api.get(`/api/search/${category}`);
  return books;
};

export const downloadBook = async (url: string) => {
  const downloadLink = await api.get(`/d${url}`);
  return downloadLink;
};

export const getBookDetail = async (id: string) => {
  const book = await api.get(`/api/book/${id}`);
  return book;
};
