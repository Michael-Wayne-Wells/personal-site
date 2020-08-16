import React from "react";
import PropTypes from "prop-types";

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          © 2019 ::{" "}
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
