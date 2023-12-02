import type { ActionFunctionArgs } from "@remix-run/node";

const search = () => {
    return (
        <div>search</div>
    )
}

export default search;


export const action = async ({ request }: ActionFunctionArgs) => {
    return null;
};
