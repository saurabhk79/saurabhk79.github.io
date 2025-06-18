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
        Hey! I'm Saurabh.
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
        \n >---> Projects\n
        I have worked on solving the real-world problems, with multiple programming languages. Additionally, I like to contribute to open-source projects.\n
        > Chat Application \n
        Built a real-time chat app using Socket.io, Express, and React.\n
        Frontend in JS, backend in Node.js with WebSocket integration.\n
        Public Repo: https://github.com/saurabhk79/Chat-app\n\n\n
        > URL Shortener \n
        A minimal URL shortening service like Bit.ly.\n
        Built using Node.js, Express, MongoDB.\n
        Link:
        Public Repo:https://github.com/saurabhk79/URLshortener\n\n\n
        > Task Manager
        Built using Node.js, Express, MongoDB and React.js for the frontend. \n
        User Authentication, JWT for the user tasks.\n
        User-friendly UI, sleek design and animation.\n
        Link: 
        Public Repo: https://github.com/saurabhk79/task-management-24\n\n\n
        > Typing Test App\n
        Built with Vue.js for a responsive and smooth typing experience.\n
        Tracks typing speed, accuracy, and highlights real-time progress.\n
        Clean UI focused on minimal distractions and ease of use.\n
        Link:\n
        Public Repo: https://github.com/saurabhk79/typing-test\n\n\n
        > Snake Game\n
        Developed using Next.js with a focus on performance and interactivity.\n
        Classic snake gameplay with modern web animations.\n
        Responsive design and keyboard controls supported.\n
        Link:\n
        Public Repo: https://github.com/saurabhk79/snake-game\n\n\n
        > Snippet Locker\n
        Created using Laravel, built as a simple, private text-sharing app.\n
        Pastebin-style snippets, but limited to plain text only.\n
        Secure link sharing, no media or file support.\n
        Link:\n
        Public Repo: https://github.com/saurabhk79/snippet-locker\n\n\n
        > Audio2boss Library\n
        React.js library wrapper for the Web Speech API.\n
        Easily integrate speech recognition into any React project.\n
        Lightweight, developer-friendly, and customizable.\n
        Link:\n
        Public Repo: https://github.com/saurabhk79/audio2-boss
        `,
    },
    {
      name: "Contact",
      description: "Something here!",
      data: `
        \n On [${Date()}] 
        \n ---> showinfo contact --all
        \n > Contact Me\n
        Want to connect? You can ping me, on these, and I will get back to you as soon as possible\n
        > LinkedIn\n
        https://linkedin.com/in/saurabhk79\n\n
        > Prefer Emails?\n
        Or just drop a mail at: imsauby@gmail.com\n`,
    },
  ];

  const [toggles, setToggles] = useState({
    showSecond: false,
    showThird: false,
    showConsole: false,
    skipAnimation: false,
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
