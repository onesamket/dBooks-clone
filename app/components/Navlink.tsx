import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";
import logo from '~/asset/dbooks.jpg';
export const navigation = [
    {
        path: "/",
        title: "Category"
    },
    {
        path: "computer-science",
        title: "Computer Science"
    },
    {
        path: "science-and-mathematics",
        title: "Science & Mathematics"
    },
    {
        path: "economics-and-finance",
        title: "Economics & Finance"
    },
    {
        path: "business-and-management",
        title: "Business & Management"
    },
    {
        path: 'politics-and-government',
        title: "Politics & Government"
    },
    {
        path: "history",
        title: "History"
    },
    {
        path: "philosophy",
        title: "Philosophy"
    }
];
const NavigationLinks = () => {
    const [state, setState] = useState(false)


    return (
        <nav className="shadow-md w-full md:static md:text-sm md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to="/">
                        <img
                            src={logo}
                            width={50}
                            height={50}
                            alt="Float UI logo"
                        />
                    </Link>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-200"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-400 hover:text-indigo-600">
                                        <NavLink to={`/subject/${item.path}`} className={({ isActive, isPending }) =>
                                            isPending ? "text-gray-500" : isActive ? "text-indigo-600" : ""
                                        }>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationLinks