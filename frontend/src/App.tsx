import axios from "axios";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Response from "./components/Feedback";
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

  return (
    <>
      <div className="app__unsupported">
        <h1>
          Phone support comming soon<span className="dot">.</span>
        </h1>
        <p>
          Please visit this website on either PC or iPad, phone support comming
          soon!
        </p>
      </div>
      <div className="app">
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/response" element={<Response />} />
          {/* <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
