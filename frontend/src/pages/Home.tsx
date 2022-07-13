import Modal from "@mui/material/Modal";
import Clock from "../components/Clock";
import { useEffect, useRef, useState } from "react";
import Response from "./Response";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

//@ts-ignore
import Me3 from "../../assets/images/Me3.png";
//@ts-ignore
import Me1 from "../../assets/images/Me1.png";
//@ts-ignore
import Me5 from "../../assets/images/Me5.png";

const translationEn = {
  title1: "Making",
  title2: "everyday a bit",
  title3: "better by",
  title4: "developing",
  headerParagraph:
    " Hi there i’m Jirat! Glad you visited my website. Scroll down and get a tour of my profile",
};
const translationTh = {
  title1: "ทุกวัน",
  title2: "ดีขึ้นได้",
  title3: "ด้วยการ",
  title4: "เขียนโปรแกรม",
  headerParagraph:
    "ว่าไง! ยินดีต้อนรับสู่เว็บไซต์ของผม เลื่อนลงและมาดูผลงานของผม ",
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn,
    },
    th: {
      translation: translationTh,
    },
  },
  lng: "en",
  fallbackLng: "en",
});

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
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "dark"
  );
  const { t } = useTranslation();

  const navLinksArray = [
    // {
    //   name: "Leave a Response",
    //   to: "/response",
    //   icon: "bxs-message-square-dots",
    // },
    { name: "Posts", to: "/posts", icon: "bxs-news" },
  ];

  useEffect(() => {
    document.title = "Jirat Chutrakul | Home";
  });

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
        <motion.a
          initial={{ y: "5vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
          href="#"
          className="header__logo u-remove-a-eff"
        >
          Jirat <br /> Chutrakul<span className="dot">.</span>{" "}
        </motion.a>
        <motion.div
          initial={{ height: 0, width: 0 }}
          animate={{ height: "50vw", width: "50vw" }}
          transition={{ duration: 1.2, ease: "anticipate" }}
          className="header__circle"
        ></motion.div>
        <motion.div
          initial={{ height: 0, width: 0 }}
          animate={{ height: "30vw", width: "30vw" }}
          transition={{ duration: 1.2, ease: "anticipate" }}
          className="header__circle2"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "anticipate", delay: 0.4 }}
            src="https://media.discordapp.net/attachments/854643706128105483/995727776164356106/IMG_1392.png"
            alt=""
          />
        </motion.div>
        <div className="header__navLinks">
          <motion.div
            initial={{ y: "-5vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: navLinksArray.length * 0.1 + 0.5,
            }}
          >
            <div
              className="header__navLinks__link"
              onClick={() => {
                setModalIsOpen(true);
                setModalInfo({
                  title: "",
                  text: "",
                  image: "",
                  customComponent: <Response />,
                });
              }}
            >
              <i className={`bx bxs-message-square-dots`}></i> Leave a Response
            </div>
          </motion.div>
          {navLinksArray.map((link, index) => {
            console.log(index * 0.1 + 0.5);
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
          <motion.div
            initial={{ y: "-5vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.4,
            }}
          >
            <div
              className="header__navLinks__themeSwitcher"
              onClick={() => {
                if (
                  document.documentElement.getAttribute("data-theme") === "dark"
                ) {
                  setTheme("light");
                  document.documentElement.setAttribute("data-theme", "light");
                } else {
                  setTheme("dark");
                  document.documentElement.setAttribute("data-theme", "dark");
                }
              }}
            >
              <i
                style={{ transition: "all .2s" }}
                className={`bx bxs-${theme === "light" ? "sun" : "moon"}`}
              ></i>
            </div>
          </motion.div>
        </div>
        <div className="header__textContainer">
          <motion.h1
            initial={{ y: "10vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={theme + 1}
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.1,
            }}
          >
            {t("title1")} <br /> {t("title2")} <br /> {t("title3")} <br />{" "}
            <span className="dot"> {t("title4")}</span>
          </motion.h1>
          <motion.p
            initial={{ y: "10vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={theme + 2}
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.2,
            }}
          >
            {t("headerParagraph")}
          </motion.p>
          <motion.div
            initial={{ y: "10vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.3,
            }}
            key={theme + 3}
            onClick={() =>
              window.scroll({
                top: 600,
                left: 100,
                behavior: "smooth",
              })
            }
          >
            <i className="bx bx-right-arrow-alt"></i>
            <p>take me there</p>
          </motion.div>

          {/* <motion.h1
            variants={headerTextVariants}
            initial="hidden"
            animate="visible"
            key={theme + 3}
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.3,
            }}
          >
            <span className="dot">developing</span>
          </motion.h1> */}
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
                    image:
                      "https://a.cdn-hotels.com/gdcs/production168/d707/c3156d7b-ce5a-4a5c-9a99-002b0ff57fe8.jpg",
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
            <div className="projects__flexContainer">
              <div className="projects__item">
                <h3>
                  Timetables<span className="dot">.</span>
                  <p>
                    Timetables is a web-based timetables program for a Simple,
                    Customizable and Practical experience. Instead of needing to
                    trace your finger on the timebar in your physical timetable,
                    in Timetables simply just look at At a Glance and you
                    instantly glimpse the current period and the following
                    period.
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
          </div>
        </section>

        {/* <section className="stack">
          <div>
            <h1>
              Web Tech Stack<span className="dot">.</span>
            </h1>
            <p>
              In web development projects I use typescript react with redux as
              my state management system. For mobile / cross platform
              development I prefer flutter as my framework
            </p>
          </div>
          <div className="stack__grid">
            <div className="stack__gridItem react">
              <h3>ReactJS</h3>
            </div>
            <div className="stack__gridItem"></div>
            <div className="stack__gridItem"></div>
            <div className="stack__gridItem"></div>
          </div>
        </section> */}

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
          <p>Read my latest posts</p>
          <div className="featuredPosts__container">
            {/* <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                zIndex: "2",
                transform: "translate(-50%, -50%)",
                backgroundColor: "var(--light-1)",
                borderRadius: "3rem",
                padding: "3rem",
                boxShadow: "0 0 4.5rem rgba(0, 0, 0, 0.1)",
                height: "13rem",
              }}
            >
              <h3 style={{ lineHeight: "auto", fontWeight: "600" }}>
                Posts are still on the way
              </h3>
              <p>I'm still learning backend to make posts myself</p>
            </div> */}
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
