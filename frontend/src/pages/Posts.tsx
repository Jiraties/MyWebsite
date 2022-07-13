import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Posts = () => {
  const [postFilter, setPostFilter] = useState("MSTV");

  const postsArray = [
    {
      title: "Learning Backend",
      body: "This is the body of the post",
      icon: "bxs-data",
    },
    {
      title: "The process of remaking this website",
      body: "This is the body of the post",
      icon: "bxs-component",
    },
    { title: "Learning Backend", body: "This is the body of the post" },
    { title: "Learning Backend", body: "This is the body of the post" },
    { title: "Learning Backend", body: "This is the body of the post" },
  ];

  useEffect(() => {
    document.title = "Jirat Chutrakul | Posts";
  });

  return (
    <main className="main__posts">
      <header className="posts__header">
        <motion.div
          initial={{ opacity: 0, y: "5rem" }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1, ease: "anticipate" }}
          className="posts__header--title"
        >
          <h1>Posts</h1>
          <p>{postFilter === "MSTV" ? "most Viewed" : "newest"}</p>
        </motion.div>
        <div className="posts__header--chips">
          <motion.div
            initial={{ y: "-5vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.3,
            }}
            className={`${
              postFilter === "MSTV"
                ? "posts__header--chip posts__header--activeChip"
                : "posts__header--chip"
            }`}
            onClick={() => setPostFilter("MSTV")}
          >
            Most Viewed
          </motion.div>
          <motion.div
            initial={{ y: "-5vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.2,
            }}
            className={`${
              postFilter === "NWST"
                ? "posts__header--chip posts__header--activeChip"
                : "posts__header--chip"
            }`}
            onClick={() => setPostFilter("NWST")}
          >
            Newest
          </motion.div>
        </div>
      </header>
      <section className="posts__content">
        {postsArray.map((post, index) => (
          <motion.div
            key={postFilter + index}
            initial={{ opacity: 0, y: "10rem" }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                ease: "anticipate",
                delay: index * 0.05,
              },
            }}
            whileHover={{
              backgroundColor: "var(--light-2)",
              transition: { duration: 0.1 },
            }}
            className="posts__post"
          >
            <Link to="/hello" className="u-remove-a-eff">
              {" "}
              <h1>
                {post.title}
                <span className="dot">.</span>
              </h1>
              <p>{post.body}</p>
              <i className={`bx ${post.icon}`}></i>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default Posts;
