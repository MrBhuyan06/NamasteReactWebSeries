import { useState } from "react";
const Section = ({ name, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible, setIsVisible);
  return (
    <div className="border-2 m-4 p-4">
      <h3>{name}</h3>
      {isVisible ? (
        <>
          <button
            onClick={() => {
              setIsVisible();
            }}
            className="cursor-pointer border p-2 ml-2"
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          onClick={() => {
            setIsVisible();
          }}
          className="cursor-pointer border p-2"
        >
          Show
        </button> 
      )}
    </div>
  );
};

const InstaMart = () => {
  // const [sectionConfig, setSectionConfig] = useState({
  //   showAbout: false,
  //   showContact: false,
  //   showTeam: false,
  // });
  const [visibleSection, setvisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-xl font-bold">Insta Mart</h1>;
      <Section
        name={"About Section"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, ."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          if (visibleSection === "about") {
            setvisibleSection("");
          } else {
            setvisibleSection("about");
          }
        }}
      />
      <Section
        name={"Contact Us Section"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, ."
        }
        isVisible={visibleSection === "contact"}
        setIsVisible={() => {
          return visibleSection === "contact"
            ? setvisibleSection("")
            : setvisibleSection("contact");
        }}
      />
      <Section
        name={"Team Section"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, ."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          return visibleSection === "team"
            ? setvisibleSection("")
            : setvisibleSection("team");
        }}
      />
    </div>
  );
};
export default InstaMart;
