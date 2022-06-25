import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
