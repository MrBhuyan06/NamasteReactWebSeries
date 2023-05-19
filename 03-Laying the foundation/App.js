import React from "react";
import ReactDOM from "react-dom/client.js";
// React Element => js(object)=> dom(html)
//React.CreateElement => object  => render in to dom change int ot HTML element

//jsx
//React Element
const Tittle = () => {
  return (
    <h1 className="heading" tabIndex="5">
      Namaste React Using Jsx 🚀
    </h1>
  );
};

// React Component
//Class Based Component -OLD
// Function Components- New
const number = 100;
const HeadingComponent = () => {
  return (
    <>
      <div className="container">
        {/* // Render Heading Component into Headding Component */}
        {/* This is know as component comsition */}

        <Tittle />
        <h1 className="heading"> Namaste React Functional Components</h1>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root.render(<HeadingComponent />);
root2.render(<HeadingComponent />);
