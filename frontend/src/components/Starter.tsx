const Starter: React.FC<{}> = (props) => {
  return (
    <>
      <section
        className="starter"
        style={{
          padding: "3rem",
          height: "fit-content",
          backgroundColor: "#5c5cf2",
          color: "#fff",
          position: "relative",
        }}
      >
        <h1>Welcome to a new React Typescript Project</h1>
        <p>
          Things included: axios, redux-toolkit, framer motion, simple modal
        </p>
        <i
          className="bx bxl-react"
          style={{
            position: "absolute",
            top: "22%",
            right: "2rem ",
            fontSize: "6rem",
            animation: "rotation 8s infinite linear",
          }}
        ></i>
      </section>
    </>
  );
};

export default Starter;
