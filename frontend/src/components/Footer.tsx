const Footer = () => {
  return (
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
        <div className="footer__item">
          <h4>Navigation</h4>
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
  );
};

export default Footer;
