import api from "./endpoint";

export const recentBooks = async () => {
  const books = await api.get("/recent");
  return books;
};
