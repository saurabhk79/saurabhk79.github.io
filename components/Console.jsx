import { TypeAnimation } from "react-type-animation";

const Console = ({ type, data }) => {
  // if (type === "contact") return <Contact />;
  return (
    <div>
      <TypeAnimation
        key={type}
        sequence={[data, 1000]}
        speed={50}
        cursor={true}
        style={{ whiteSpace: "pre-line", display: "block" }}
      />
    </div>
  );
};

export default Console;
