import type { MetaFunction } from "@remix-run/node";
import { recentBooks } from "~/lib/books";
import { useLoaderData } from '@remix-run/react';
import { type bookType } from "~/types";
import { AxiosError } from "axios";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const books = useLoaderData<typeof loader>();
  console.log(books);
  return (
    <div>
      {JSON.stringify(books, null, 2)}
    </div>
  );
}

export const loader = async () => {
  const response = recentBooks();
  try {
    return (await response).data as bookType[];
  } catch (error) {
    return error as AxiosError;
  }
};
