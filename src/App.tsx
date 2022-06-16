import Starter from "./components/Starter";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "./context/modalSlice";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./sass/main.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <div className="infoModal">
          <img
            className="infoModal__image"
            src="https://i.ibb.co/k0L8mzz/IMG-1141.jpg"
          />
          <div className="infoModal__main">
            <h3>Bangkok, Thailand</h3>
            <p>
              Bangkok, Thailand’s capital, is a large city known for ornate
              shrines and vibrant street life. The boat-filled Chao Phraya River
              feeds its network of canals, flowing past the Rattanakosin royal
              district, home to opulent Grand Palace and its sacred Wat Phra
              Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining
              Buddha and, on the opposite shore, Wat Arun Temple with its steep
              steps and Khmer-style spire.
            </p>
          </div>
        </div>
      </Modal>
      <header className="header__home">a</header>
      <main className="main__home">
        <section className="knowingMe">
          <div className="knowingMe__text">
            <h1>
              Knowing Me<span className="dot">.</span>
            </h1>
            <p>
              I am Jirat Chutrakul a 13 year old who is interested in various
              fields of computer engineering like web development and cross
              platform development also a hobbyist developer group known as{" "}
              <strong>SS Developers</strong> which makes projects such as
              Timetables and more.
            </p>
            <div className="knowingMe__chips">
              <div
                className="knowingMe__chip"
                onClick={() => setModalIsOpen(true)}
              >
                <div>
                  <i className="bx bxs-map"></i>
                  <p>Bangkok, Thailand</p>
                </div>
              </div>
              <div className="knowingMe__chip">
                <div>
                  <i className="bx bxs-time"></i>
                  <p>GMT +7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="knowingMe__images">
            <img
              src="https://avatars.githubusercontent.com/u/87472782?v=4"
              alt="photo of Jirat Chutrakul"
            />
            <img
              src="https://www.colorhexa.com/2e2e3d.png"
              alt="photo of Jirat Chutrakul"
            />
            <img
              src="https://www.colorhexa.com/2e2e3d.png"
              alt="photo of Jirat Chutrakul"
            />
          </div>
        </section>

        <section className="technologies">
          <h1>
            Technologies I know<span className="dot">.</span>
          </h1>
          <p>
            The main frameworks and languages i use as a developers in general
          </p>
          <div className="technologies__container">
            <div className="technologies__item hover__blue">
              <h3>
                Web <br />
                Development
              </h3>
              <p>
                React
                <br />
                SCSS
                <br />
                Typescript
              </p>
            </div>
            <div className="technologies__item hover__yellow">
              <h3>
                Mobile <br />
                Development
              </h3>
              <p>
                Flutter
                <br />
                Dart
              </p>
            </div>
            <div className="technologies__item hover__green">
              <h3>
                Design <br />
                Tools
              </h3>
              <p>Figma</p>
            </div>
          </div>
        </section>

        <footer>
          <a href="#" className="footer__logo u-remove-a-eff">
            <h3>
              Jirat <br />
              Chutrakul
            </h3>
            <p>Version 3.0</p>
          </a>
        </footer>
      </main>
    </>
  );
}

export default App;
