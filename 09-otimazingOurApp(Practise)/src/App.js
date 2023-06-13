import React, { Fragment, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import ErrorElement from "./components/ErrorElement.js";
import Footer from "./components/Footer.js";
import ResTaurantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer.js";

//  style take a js object
// style={{
//   backgroundColor: "#f0f0f0",
// }}
const SwiggyMart = lazy(() => import("./components/SwiggyMart.js"));

// Top Level Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* if Path is /  */}
      <Outlet />
      {/* if Path is /about  */}
      {/* <About /> */}
      {/* if Path is /contact  */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile/:pid", // take the relative path of his parent
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResTaurantMenu />,
      },
      {
        path: "/swiggymart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <SwiggyMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
