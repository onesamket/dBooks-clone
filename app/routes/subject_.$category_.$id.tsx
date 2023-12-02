import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getBookDetail } from "~/lib/books";
import type { BookDetailType } from "~/types";

const BookDetail = () => {
    const book = useLoaderData<typeof loader>();
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={book.image} alt={book.title} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <div>
                        <h1 className="text-5xl font-bold">{book.title}</h1>
                        <p className="text-xl font-medium">{book.subtitle}</p>
                    </div>
                    <p className="py-6">{book.description}</p>

                    <div className="my-5">
                        <p> Published by:  {book.publisher}</p>
                        <p> Published In:  {book.year}</p>
                        <p>Authors: {book.authors}</p>
                        <p>{book.pages} {" "} pages</p>
                    </div>
                    <div className="w-full flex space-x-11 mx-12">
                        <Link to={`${book.url}/read`} className="btn btn-primary">Read online</Link>
                        <Link to={book.download} className="btn btn-success"> download</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail;



export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { id } = params;
    const book = await getBookDetail(id as string)
    console.log(book);
    return await book.data as BookDetailType;
};
