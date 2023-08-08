import logo from "./logo.svg";
import "./App.css";
import Head from "./componets/Head.js";
import Body from "./componets/Body.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <Body />
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
