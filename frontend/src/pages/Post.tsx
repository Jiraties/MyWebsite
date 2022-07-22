import ReactMarkdown from "react-markdown";
import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { post } from "../models/PostTypes";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<post | null>();

  useEffect(() => {
    axios.get(`http://localhost:3001/getPostById/${id}`).then(({ data }) => {
      console.log(data);
      setPost(data);
    });
  }, []);

  return (
    <main className="main__post">
      <div className="post__header">
        <Link to="/posts">
          <i className="bx bx-left-arrow-alt"></i>Back to Posts Listing
        </Link>
        <h1>
          {post?.title}
          <span className="dot">.</span>
        </h1>
        <p>
          Posted on {/* @ts-ignore */}
          {new Date(post?.createdAt).toLocaleString("en-GB", {
            dateStyle: "long",
          })}
        </p>
      </div>
      <div className="post__markdown markdown">
        <ReactMarkdown children={post?.markdown ?? ""} />
      </div>
    </main>
  );
};

export default Post;
