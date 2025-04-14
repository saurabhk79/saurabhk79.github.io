import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { Context } from "./context";
import Details from "./components/Details";
import './App.css';

const App = () => {
  const { toggles, updateToggle } = useContext(Context);
  return (
    <div className="app-container">
      <h1>
        <TypeAnimation
          sequence={["> Hey, I'm Saurabh K!", () => updateToggle('showSecond', true), 1000]}
          speed={50}
          cursor={false}
        />
      </h1>
      {toggles.showSecond ? (
        <h4>
          <TypeAnimation
            sequence={[
              () => updateToggle('showThird', true),
              "Full Stack Dev | Open Source",
              1000,
              "Full Stack Dev | Javascript/Typescript",
              1000,
              "Full Stack Dev | Python Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h4>
      ) : null}
      {toggles.showThird ? <Details />: null}
    </div>
  );
};

export default App;
