import Modal from "@mui/material/Modal";
import Clock from "../components/Clock";
import { useRef, useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//@ts-ignore
import Me3 from "../../assets/images/Me3.png";
//@ts-ignore
import Me1 from "../../assets/images/Me1.png";
//@ts-ignore
import Me5 from "../../assets/images/Me5.png";

interface modalInfoType {
  title: string;
  text: string;
  image: string;
  customComponent?: JSX.Element;
}

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageArray, setImageArray] = useState([Me3, Me1, Me5]);
  const [modalInfo, setModalInfo] = useState<modalInfoType>({
    title: "",
    text: "",
    image: "",
    customComponent: <></>,
  });
  const headerTextVariants = {
    hidden: { x: "-5vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const navLinksArray = [
    {
      name: "Leave a Response",
      to: "/response",
      icon: "bxs-message-square-dots",
    },
    { name: "Posts", to: "/posts", icon: "bxs-news" },
  ];

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
      <header className="header__home">
        <motion.div
          initial={{ y: "5vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
          className="header__logo"
        >
          Jirat <br /> Chutrakul<span className="dot">.</span>{" "}
        </motion.div>
        <motion.div
          initial={{ height: 0, width: 0 }}
          animate={{ height: "50vw", width: "50vw" }}
          transition={{ duration: 1.2, ease: "anticipate" }}
          className="header__circle"
        ></motion.div>
        <div className="header__navLinks">
          {navLinksArray.map((link, index) => {
            return (
              <motion.div
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "anticipate",
                  delay: index * 0.1 + 0.5,
                }}
              >
                <Link to={link.to}>
                  <i className={`bx ${link.icon}`}></i> {link.name}
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="header__textContainer">
          <motion.h1
            variants={headerTextVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              ease: "anticipate",
            }}
          >
            Making
          </motion.h1>
          <motion.h1
            variants={headerTextVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.1,
            }}
          >
            everyday a bit
          </motion.h1>
          <motion.h1
            variants={headerTextVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.2,
            }}
          >
            better by
          </motion.h1>
          <motion.h1
            variants={headerTextVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.3,
            }}
          >
            <span className="dot">developing</span>
          </motion.h1>
        </div>
      </header>
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
            <img src={imageArray[0]} alt="photo of Jirat Chutrakul" />
          </div>
        </section>

        <section className="projects">
          <h1>
            Projects I've worked on<span className="dot">.</span>
          </h1>
          <p>These projects are projects i’ve worked on</p>
          <div className="projects__container">
            <div className="projects__item">
              <h3>
                Timetables<span className="dot">.</span>
                <p>
                  Timetables is a web-based timetables program for a Simple,
                  Customizable and Practical experience. Instead of needing to
                  trace your finger on the timebar in your physical timetable,
                  in Timetables simply just look at At a Glance and you
                  instantly glimpse the current period and the following period.
                </p>
              </h3>
              <a
                href="https://github.com/SS-Developers/Timetables"
                target="_blank"
                className="u-remove-a-eff projects__item--subButton"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                className="u-remove-a-eff projects__item--mainButton"
                href="https://timetables.ssdevelopers.xyz"
              >
                Let's go
              </a>
            </div>

            <div className="projects__item">
              <h3>
                System13<span className="dot">.</span>
                <p>
                  System13 is a web-application for doing manual Valorant fair
                  team matchmaking. Using is as easy as inputting team member
                  names.
                </p>
              </h3>
              <a
                target="_blank"
                href="https://github.com/SS-Developers/System13"
                className="u-remove-a-eff projects__item--subButton"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a className="u-remove-a-eff projects__item--mainButton  projects__item--deprecated">
                Deprecated
              </a>
            </div>
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

        <section className="featuredPosts">
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
              Chutrakul<span className="dot">.</span>
            </h3>
            <p>Version 3.0</p>
          </a>

          <div className="footer__menus">
            <div className="footer__item">
              <h4>Contact Info</h4>
              <p>
                discord: jiraties_#6144 <br />
                github: Jiraties
                <br />
                twitter: @saikaaawastaken
              </p>
            </div>
            <div className="footer__item">
              <h4>Relevant Sites</h4>
              <a href="https://ssdevelopers.xyz" className="u-remove-a-eff">
                Portals <br />
              </a>
              <a
                href="https://timetables.ssdevelopers.xyz"
                className="u-remove-a-eff"
              >
                Timetables
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
