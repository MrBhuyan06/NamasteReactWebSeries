import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Profile = ({ name }) => {
  const { pid } = useParams();
  // Lets create the state varibale in functional components
  let [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React from timer");
    }, 1000);
    console.log("Use Effect");
    return () => {
      clearInterval(timer);
    };
  }, []);
  console.log("re-render");
  return (
    <div>
      <h1>Profile-Section ({name})</h1>
      <p>Personid{pid}</p>
      <p>Count:{count}</p>
      <button
        onClick={() => {
          setCount((count += 1));
        }}
      >
        increase
      </button>
      <hr />
    </div>
  );
};
export default Profile;
