import { useRef } from "react";

const Navigation = () => {
  return (
    <>
      <div style={{ height: "10vh" }}></div>
      {/* @ts-ignore */}
      <nav
        style={
          scrollY === 0
            ? { backgroundColor: "#ffffff00", borderBottom: "none" }
            : { borderBottom: "1px solid var(--light-2)" }
        }
        className="navigation"
      >
        <h3>
          Jirat <br />
          Chutrakul<span className="dot">.</span>
        </h3>
      </nav>
    </>
  );
};

export default Navigation;
