import { useState } from "react";
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

  return (
    <main className="main__posts">
      <header className="posts__header">
        <div className="posts__header--title">
          <h1>Posts</h1>
          <p>{postFilter === "MSTV" ? "most Viewed" : "newest"}</p>
        </div>
        <div className="posts__header--chips">
          <div
            className={`${
              postFilter === "MSTV"
                ? "posts__header--chip posts__header--activeChip"
                : "posts__header--chip"
            }`}
            onClick={() => setPostFilter("MSTV")}
          >
            Most Viewed
          </div>
          <div
            className={`${
              postFilter === "NWST"
                ? "posts__header--chip posts__header--activeChip"
                : "posts__header--chip"
            }`}
            onClick={() => setPostFilter("NWST")}
          >
            Newest
          </div>
        </div>
      </header>
      <section className="posts__content">
        {postsArray.map((post, index) => (
          <motion.div
            key={postFilter}
            initial={{ opacity: 0, x: "-10rem" }}
            animate={{
              opacity: 1,
              x: 0,
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
