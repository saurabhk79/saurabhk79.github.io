import { createContext, useState } from "react";
import Console from "./components/Console";

export const Context = createContext();

const UserContext = ({ children }) => {
  const userData = [
    {
      name: "About",
      description: "Something here!",
      data: `
        \n [${Date()}] > ABOUT SAURABH --all
        \n
        Hey! I'm Saurabh Kumar.
        \n
        I'm a backend-focused developer who enjoys building web applications and APIs. 
        My main stack includes Python (Django, Flask, FastAPI), JavaScript/TypeScript, and Node.js. 
        I'm comfortable with both SQL (PostgreSQL, MySQL) and NoSQL databases like MongoDB.
        \n
        Most of my projects revolve around solving real-world problems using simple and maintainable code. 
        I prefer writing logic-heavy backend systems, working with REST and GraphQL APIs, and handling database design. 
        I’ve also worked with AWS and have some experience setting up CI/CD pipelines and server-side monitoring.
        \n
        I’ve built things like chat applications, URL shorteners, admin panels, custom authentication flows, and internal tools. 
        I'm always looking to improve how things work behind the scenes — whether that’s speeding up a query or making an endpoint more efficient.
        \n
        Apart from work, I like contributing to open-source projects. I believe in learning by building, 
        and I try to keep my GitHub active with personal or collaborative projects.
        \n
        I’m always open to new ideas, challenges, and collaborations. 
        If you’re working on something cool or just want to chat tech, feel free to connect!`,
    },
    {
      name: "Projects",
      description: "Something here!",
      data: `> Projects\n
        > Chat Application 💬\n
        Built a real-time chat app using Socket.io, Express, and React.\n
        Frontend in React, backend in Node.js with WebSocket integration.\n
        Link: https://github.com/saurabhk-chatapp\n\n
        > URL Shortener 🔗\n
        A minimal URL shortening service like Bit.ly.\n
        Built using Node.js, Express, MongoDB, and Redis for caching.\n
        Supports custom aliases, redirection analytics, and expiry time.\n
        Link: https://github.com/saurabhk-urlshortener`,
    },
    {
      name: "Contact",
      description: "Something here!",
      data: `> Contact Me 📬\n
        > LinkedIn 👔\n
        https://linkedin.com/in/saurabhk-dev\n\n
        > X (Twitter) 🐦\n
        https://x.com/saurabhk_dev\n\n
        > Fiverr 💼\n
        https://www.fiverr.com/saurabhk_dev\n\n
        > Prefer Emails? 📩\n
        Just shoot a message at:\n
        📧 saurabhk.dev@gmail.com\n
        I'll get back to you faster than a Linux boot 😉`,
    },
  ];

  const [toggles, setToggles] = useState({
    showSecond: false,
    showThird: false,
    showConsole: false,
  });

  const updateToggle = (toggleName, status) => {
    setToggles((prev) => ({
      ...prev,
      [toggleName]: status,
    }));
  };

  return (
    <Context.Provider value={{ userData, toggles, updateToggle }}>
      {children}
    </Context.Provider>
  );
};

export default UserContext;
