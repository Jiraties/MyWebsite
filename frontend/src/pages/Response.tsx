import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Response = () => {
  const navLinksArray = [
    {
      name: "Leave a Response",
      to: "/response",
      icon: "bxs-message-square-dots",
    },
    { name: "Posts", to: "/posts", icon: "bxs-news" },
  ];

  return (
    <div className="response">
      <h1>
        Comming Soon<span className="dot">!</span>{" "}
      </h1>
      <p>
        Honestly this website is in a half release state and i'm taking a break
        from coding so don't expect this to be finished anytime in the next few
        months.
      </p>
      {/* <div className="response__text">
        <h1>There's room to grow</h1>
        <p>By giving feedback you are helping me improve</p>
      </div>
      <div className="response__inputs">
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your Message" />
      </div>
      <button>Send</button> */}
    </div>
  );
};

export default Response;
