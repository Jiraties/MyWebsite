import Starter from "./components/Starter";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "./context/modalSlice";
import Modal from "@mui/material/Modal";

import "./sass/main.css";
import Clock from "./components/Clock";

interface modalInfoType {
  title: string;
  text: string;
  image: string;
  customComponent?: JSX.Element;
}

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<modalInfoType>({
    title: "",
    text: "",
    image: "",
    customComponent: <></>,
  });
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false),
            setModalInfo({
              title: "",
              text: "",
              image: "",
            });
        }}
      >
        <div className="infoModal">
          {modalInfo.image && (
            <img className="infoModal__image" src={modalInfo.image} />
          )}
          <div className="infoModal__main">
            <h3>{modalInfo.title}</h3>
            {modalInfo.customComponent && modalInfo.customComponent}
            <p>{modalInfo.text}</p>
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
              platform development also a member of a hobbyist developer group
              known as <strong>SS Developers</strong> which makes projects such
              as <strong>Timetables</strong> and more.
            </p>
            <div className="knowingMe__chips">
              <div
                className="knowingMe__chip"
                onClick={() => {
                  setModalIsOpen(true);
                  setModalInfo({
                    title: "Bangkok, Thailand",
                    text: "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire.",
                    image: "https://i.ibb.co/k0L8mzz/IMG-1141.jpg",
                  });
                }}
              >
                <div>
                  <i className="bx bxs-map"></i>
                  <p>Bangkok, Thailand</p>
                </div>
              </div>
              <div
                className="knowingMe__chip"
                onClick={() => {
                  setModalIsOpen(true);
                  setModalInfo({
                    title: "Time in Bangkok (GMT+7)",
                    text: "",
                    image: "",
                    customComponent: <Clock />,
                  });
                }}
              >
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
              <i className="bx bxl-react"></i>
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
              <i className="bx bxl-flutter"></i>
            </div>
            <div className="technologies__item hover__green">
              <h3>
                Design <br />
                Tools
              </h3>
              <p>Figma</p>
              <i className="bx bxl-figma"></i>
            </div>
          </div>
        </section>

        <section className="featuredPosts" style={{ marginTop: "7rem" }}>
          <h1 style={{ lineHeight: "6rem" }}>
            Catch up on what <br />
            i’m working on<span className="dot">.</span>
          </h1>
          <p>
            The main frameworks and languages i use as a developers in general
          </p>
          <div className="featuredPosts__container">
            <div className="featuredPosts__item">
              <h3>
                Working in redesigning this website
                <span className="dot">.</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto ut fuga eos quo tenetur dolore voluptatem illum
                veniam molestias sint, voluptate nulla neque harum accusamus
                voluptatum. Incidunt ipsam ipsum nostrum.
              </p>
            </div>
            <div className="featuredPosts__item">
              <h3>
                Quandale Dingle Here
                <span className="dot">.</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto ut fuga eos quo tenetur dolore voluptatem illum
                veniam molestias sint, voluptate nulla neque harum accusamus
                voluptatum. Incidunt ipsam ipsum nostrum.
              </p>
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
