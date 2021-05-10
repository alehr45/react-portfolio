import React from "react";
import github from "../../assets/logos/github.png";
import linkedin from "../../assets/logos/linkedin.png";
import facebook from "../../assets/logos/facebook.png";

function Footer() {
  return (
    <div id="footer" className="container-fluid text-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 mx-auto">
            <a
              className="px-3"
              href="https://github.com/alehr45"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="github" src={github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/alexlehr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="linkedin" src={linkedin} alt="" />
              
            </a>

            <a
              className="px-3"
              href="https://www.facebook.com/alex.lehr.75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="facebook" src={facebook} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
