import axios from "axios";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Response from "./pages/Response";
import "./sass/main.css";

function App() {
  // useEffect(() => {
  //   const imageRandomizerInterval = setInterval(() => {
  //     const shuffeled = imageArray.sort(() => {
  //       const randomTrueOrFalse = Math.random() > 0.5;
  //       return randomTrueOrFalse ? 1 : -1;
  //     });
  //     console.log(shuffeled);

  //     setImageArray(shuffeled);
  //   }, 2000);

  //   return () => clearInterval(imageRandomizerInterval);
  // }, []);

  useEffect(() => {
    axios.get("localhost:3001/getPostsListing").then(res => console.log(res));
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/response" element={<Response />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
