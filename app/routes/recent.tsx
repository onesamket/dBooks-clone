import type { MetaFunction } from "@remix-run/node";
import { recentBooks } from "~/lib/books";
import { useLoaderData } from '@remix-run/react';
import { type bookType } from "~/types";
import Card from "~/components/Card";
import Header from "~/components/Header";
export const meta: MetaFunction = () => {
    return [
        { title: "Dbooks.org clone" },
        { name: "description", content: "dbooks clone using remix and daisyUi!" },
    ];
};

export default function Recent() {
    const books = useLoaderData<typeof loader>();
    return (
        <div className="my-12">
            <Header title="Welcome to dBooks Library" />

            <div className="grid md:grid-cols-3 place-content-center my-8">

                {
                    !books || books.length < 1 ? <span>No Books found</span> :

                        books.map(book => (
                            <div key={book.id} className="my-6 mx-2">
                                <Card url={book.url} id={book.id} title={book.title} subtitle={book.subtitle} authors={book.authors} image={book.image} />
                            </div>
                        ))
                }
            </div>
        </div>

    );
}

export const loader = async () => {
    const response = await recentBooks();
    return (await response).data.books as bookType[];
};
