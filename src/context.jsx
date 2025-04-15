import { createContext, useState } from "react";
import Console from "./components/Console";

export const Context = createContext();

const UserContext = ({ children }) => {
  const userData = [
    {
      name: "About",
      description: "Something here!",
      data: `
        \n On [${Date()}] 
        \n ---> ABOUT SAURABH --all
        \n
        Hey! I'm Saurabh Kumar.
        \n
        I'm a backend-focused developer who enjoys building web applications and APIs. 
        My main stack includes Python (Django, Flask, FastAPI), JavaScript/TypeScript, and Node.js. 
        I'm comfortable with both SQL (PostgreSQL, MySQL) and NoSQL databases like MongoDB.
        \n
        Most of my projects revolve around solving real-world problems using simple and maintainable code. 
        I prefer writing logic-heavy backend systems, working with REST and GraphQL APIs, and handling database design. 
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
      data: `
        \n On [${Date()}] 
        \n ---> ls projects --all
        \n > Projects\n
        I have worked on solving the real-world problems. Additionally, I like to contribute to open-source projects.\n
        > Chat Application 💬\n
        Built a real-time chat app using Socket.io, Express, and React.\n
        Frontend in JS, backend in Node.js with WebSocket integration.\n
        Public Repo: https://github.com/saurabhk79/Chat-app
        > URL Shortener 🔗\n
        A minimal URL shortening service like Bit.ly.\n
        Built using Node.js, Express, MongoDB.\n
        Link:
        Public Repo:https://github.com/saurabhk79/URLshortener
        > Task Manager
        Built using Node.js, Express, MongoDB and React.js for the frontend. \n
        User Authentication, JWT for the user tasks.\n
        User-friendly UI, sleek design and animation.\n
        Link: 
        Public Repo: https://github.com/saurabhk79/task-management-24
        `,
    },
    {
      name: "Contact",
      description: "Something here!",
      data: `
        \n On [${Date()}] 
        \n ---> showinfo contact --all
        \n > Contact Me 📬\n
        Want to connect? You can ping me, on these, and I will get back to you as soon as possible 😉
        > LinkedIn 👔\n
        https://linkedin.com/in/saurabhk79\n\n
        > Prefer Emails? 📩\n
        Or just drop a mail at: imsauby@gmail.com\n`,
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
