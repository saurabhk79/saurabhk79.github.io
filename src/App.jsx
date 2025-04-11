import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { Context } from "./context";
import Details from "./components/Details";

const App = () => {
  const { toggles, updateToggle } = useContext(Context);
  return (
    <>
      <h1>
        <TypeAnimation
          sequence={["> Hey, I'm Saurabh K!", () => updateToggle('showSecond', true), 1000]}
          speed={50}
          style={{ fontSize: "2em" }}
          cursor={false}
        />
      </h1>
      {toggles.showSecond ? (
        <h4>
          <TypeAnimation
            sequence={[
              "Full Stack Dev | Open Source",
              1000,
              "Full Stack Dev | Javascript/Typescript",
              1000,
              "Full Stack Dev | Python Developer",
              1000,
              // "We produce food for Chinchillas",
              // 1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </h4>
      ) : null}

      <Details />
    </>
  );
};

export default App;
