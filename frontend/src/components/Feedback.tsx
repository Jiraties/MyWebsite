import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Feedback = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/newFeedback", {
        email,
        message,
      })
      .then(({ data }) => {
        console.log(data);
      });
  };

  return (
    <form className="response" onSubmit={event => submitHandler(event)}>
      <div className="response__text">
        <h1>There's room to grow</h1>
        <p>By giving feedback you are helping me improve</p>
      </div>
      <div className="response__inputs">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
      </div>
      <button>Send</button>
    </form>
  );
};

export default Feedback;
