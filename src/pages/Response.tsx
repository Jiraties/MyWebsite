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
    <section className="main__response">
      <div className="response">
        <div className="response__text">
          <h1>There's room to grow</h1>
          <p>By giving feedback you are helping me improve</p>
        </div>
        <div className="response__inputs">
          <input type="email" placeholder="Email" />
          <textarea placeholder="Your Message" />
        </div>
        <button>Send</button>
      </div>
    </section>
  );
};

export default Response;
