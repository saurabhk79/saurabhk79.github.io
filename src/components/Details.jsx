import React, { useContext, useRef, useState } from "react";
import { Context } from "../context";
import Console from "./Console";

const Details = () => {
  const { userData, toggles, updateToggle } = useContext(Context);
  const [currentConsole, setCurrentConsole] = useState(0);
  const scrollRef = useRef(null);

  const toggleCurrentConsole = (idx) => {
    console.log('have been clicked!')
    setCurrentConsole(idx);
    updateToggle("showConsole", true);
    // setTimeout(() => {
    //   scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    // }, 100);
  };

  console.log('---------->', toggles.showConsole);

  return (
    <div
      ref={scrollRef}
      className="details-container"
      // style={{ height: toggles.showConsole ? "100vh" : "auto" }}
    >
      <ul>
        {userData.map((d, idx) => (
          <li onClick={() => toggleCurrentConsole(idx)} key={idx}>
            {d.name}
          </li>
        ))}
      </ul>
      {toggles.showConsole && (
        <div className="console">
          <Console
            type={userData[currentConsole].name}
            data={userData[currentConsole].data}
          />
        </div>
      )}
    </div>
  );
};

export default Details;
