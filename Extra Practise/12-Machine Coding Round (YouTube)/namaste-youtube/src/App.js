import logo from "./logo.svg";
import "./App.css";
import Head from "./componets/Head.js";
import Body from "./componets/Body.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./componets/VideoContainer.js";
import WatchPage from "./componets/WatchPage.js";
import MainContainer from "./componets/MainContainer.js";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

/**
 * Head
 * Body
 *   sideBar
 *      MenuItems
 *   MainContainer
 *     ButtonList
 *     videoContainer
 *       video card
 *
 *
 *
 */

export default App;
