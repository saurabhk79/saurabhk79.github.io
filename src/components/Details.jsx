import React, { useContext, useRef, useState } from "react";
import { Context } from "../context";
import Console from "./Console";

const Details = () => {
  const { userData, toggles, updateToggle } = useContext(Context);
  const [currentConsole, setCurrentConsole] = useState(0);
  const scrollRef = useRef(null);

  const toggleCurrentConsole = (idx) => {
    console.log("have been clicked!");
    setCurrentConsole(idx);
    updateToggle("showConsole", true);
    updateToggle("skipAnimation", false)
    // setTimeout(() => {
    //   scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    // }, 100);
  };

  const formatContent = (content) => {
    return content
      .trim()
      .split("\n")
      .map((line, index) => <span key={index}>{line}<br /></span>);
  };


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
          <button
            style={{ whiteSpace: "pre-line", display: "block" }}
            className="skip-button"
            onClick={() => updateToggle("skipAnimation", true)}
          >
            skip
          </button>
          {toggles.skipAnimation ? (
            <div className="console-content">
              {formatContent(userData[currentConsole].data)}
            </div>
          ) : (
            <Console
              type={userData[currentConsole].name}
              data={userData[currentConsole].data?.trim()}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
