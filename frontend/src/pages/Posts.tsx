import axios from "axios";

import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { post } from "../models/PostTypes";
import Footer from "../components/Footer";

const Posts = () => {
  let [queryParams, setQueryParams] = useSearchParams();
  const [postFilter, setPostFilter] = useState(
    queryParams.get("filter") ? queryParams.get("filter") : "MSTV"
  );
  const [posts, setPosts] = useState<post[]>([]);

  useEffect(() => {
    document.title = "Jirat Chutrakul | Posts";

    axios.get("http://localhost:3001/getPosts").then(({ data }) => {
      console.log(data);
      setPosts(
        postFilter === "MSTV"
          ? data.posts.sort((a: post, b: post) => b.views - a.views)
          : data.posts.sort(
              (a: post, b: post) =>
                Date.parse(b.createdAt) - Date.parse(a.createdAt)
            )
      );
    });
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      if (postFilter === "MSTV") {
        setPosts(posts.sort((a, b) => b.views - a.views));
      }
      if (postFilter === "NWST") {
        setPosts(
          posts.sort(
            (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
          )
        );
      }
    }
  }, [postFilter, queryParams]);

  return (
    <main className="main__posts">
      <div className="history">
        <Link to="/">Home</Link>
        <i className="bx bx-chevron-right"></i>
        <Link to="/posts">Posts</Link>
      </div>
      <header className="posts__header">
        <div className="posts__header--title">
          <h1>Posts</h1>
          <p>{postFilter === "MSTV" ? "Most Viewed" : "Newest"}</p>
        </div>
        <div className="posts__header--chips">
          <div
            className={`${
              postFilter === "NWST"
                ? "posts__header--chip posts__header--activeChip"
                : "posts__header--chip"
            }`}
            onClick={() => {
              setPostFilter("NWST");
              setQueryParams({ filter: "NWST" });
            }}
          >
            Newest
          </div>
          <div
            className={`${
              postFilter === "MSTV"
                ? "posts__header--chip posts__header--activeChip"
                : "posts__header--chip"
            }`}
            onClick={() => {
              setPostFilter("MSTV");
              setQueryParams({ filter: "MSTV" });
            }}
          >
            Most Viewed
          </div>
        </div>
      </header>
      <section className="posts__content">
        {posts.map((post, index) => (
          <Link to={`/posts/${post._id}`} className="u-remove-a-eff">
            <div className="posts__post">
              {" "}
              <h1>
                {post.title}
                <span className="dot">.</span>
              </h1>
              <p>
                {post.views} views •{" "}
                {new Date(post?.createdAt).toLocaleString("en-GB", {
                  dateStyle: "long",
                })}{" "}
                <br />
                {post.summary}
              </p>
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default Posts;
