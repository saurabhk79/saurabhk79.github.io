import { createContext, useState } from "react";
import Console from "./components/Console";

export const Context = createContext();

const UserContext = ({ children }) => {
  const userData = [
    {
      name: "About",
      description: "Something here!",
      data: "My name is Saurabh K",
    },
    {
      name: "Projects",
      description: "Something here!",
      data: "Koi shehri babu, dil lehri babu, haye re!",
    },
    {
      name: "Contact",
      description: "Something here!",
      data: "Koi shehri babu, dil lehri babu, haye re!",
    },
  ];

  const [toggles, setToggles] = useState({
    showSecond: false,
    showConsole: false
  });

  const updateToggle = (toggleName, status) => {
    setToggles({
      ...toggles,
      [toggleName]: status,
    });
  };

  return (
    <Context.Provider value={{ userData, toggles, updateToggle }}>
      {children}
    </Context.Provider>
  );
};

export default UserContext;
