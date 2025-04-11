import { TypeAnimation } from "react-type-animation";

const Console = ({ type, data }) => {    
  if (type === "contact") return <Contact />;
  return (
    <div>
      <TypeAnimation
        key={data}
        sequence={[data, 1000]}
        speed={50}
        style={{ fontSize: "2em" }}
        cursor={true}
      />
    </div>
  );
};

export default Console;
