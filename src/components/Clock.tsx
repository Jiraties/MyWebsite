import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <p style={{ fontSize: "5rem" }}>
      {time.toLocaleString("en-US", {
        timeZone: "Asia/Bangkok",
        dateStyle: "long",
        timeStyle: "medium",
      })}
      <span className="dot">.</span>
    </p>
  );
};

export default Clock;
