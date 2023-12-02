import { Link } from '@remix-run/react';

const Footer = () => {

    const menuItems = [{ title: "Home", path: "/" },
    { title: "Search Books", path: "/search" },
    { title: "Add a Book", path: 'https://www.dbooks.org/add/' },
    { title: "API", path: "https://www.dbooks.org/api/" },
    { title: "RSS", path: "https://www.dbooks.org/rss.xml" },
    { title: "Telegram Channel", path: 'https://t.me/dbooks_org' },
    { title: "Privacy Policy", path: "https://www.dbooks.org/privacypolicy/" },
    { title: "About", path: "https://www.dbooks.org/about/" },
    { title: "Contact", path: "https://www.dbooks.org/contact/" }

    ];

    return (
        <ul className="grid place-content-center md:mx-auto items-center  justify-center mt-8 space-y-5 md:flex sm:space-x-4 sm:space-y-0 my-3 py-4">
            {
                menuItems.map((item, idx) => (
                    <li key={idx} className=" hover:text-indigo-600">
                        <Link key={idx} to={item.path}>
                            {item.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Footer