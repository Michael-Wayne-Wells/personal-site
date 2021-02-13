import React from "react";
import PropTypes from "prop-types";
import style from "../styles/footer.module.css";

const Footer = ({ copyrights }) => (
  <footer className={style.footer}>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          © 2021 ::{" "}
          <a href="https://www.github.com/Michael-Wayne-Wells/">Mikey Wells</a>
        </span>
      </>
    )}
  </footer>
);

Footer.propTypes = {
  copyrights: PropTypes.string,
};

export default Footer;
