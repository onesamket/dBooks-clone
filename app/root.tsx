import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,

} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import NavigationLinks from "./components/Navlink";
import Footer from "./components/Footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="remix book fullstack book-app  free books dBooks clone tailwind css daisyUi " />
        <Meta />
        <Links />

      </head>
      <body>
        <NavigationLinks />
        <main className="mx-12">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <div>
      <p className="text-2xl text-red-600">Something wants wrong</p>
    </div>
  }
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="remix book fullstack book-app  free books dBooks clone tailwind css daisyUi " />
        <Meta />
        <Links />
        <title>dBooks Clone</title>

      </head>
      <body>
        <NavigationLinks />
        <div className="h-screen flex flex-col justify-center items-center">
          <p className="text-2xl text-red-500">Something wants wrong</p>
          <a className="text-indigo-600" href="/">refresh the page </a>
        </div>
        <Footer />
      </body>
    </html>
  )
}



export const meta: MetaFunction = () => [
  { title: "dBooks free book download website clone  " },
];
