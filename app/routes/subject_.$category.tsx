import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import Card from "~/components/Card";
import Header from "~/components/Header";
import { getBooksByCategory } from "~/lib/books";
import type { bookType } from "~/types";

const SubjectPage = () => {
    const books = useLoaderData<typeof loader>();
    const { category } = useParams();
    const title = category?.split("-").join(" ");
    return (
        <div className="my-12">
            <Header title={title as string} />
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

export default SubjectPage;


export const loader = async ({ params }: LoaderFunctionArgs) => {
    const response = await getBooksByCategory(params.category as string);
    return (await response).data.books as bookType[];
};
