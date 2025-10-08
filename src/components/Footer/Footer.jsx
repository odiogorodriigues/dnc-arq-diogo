import { Link } from "react-router-dom";

// ASSETS
import "./Footer.css";
import Logo from "../../assets/dnc-logo.svg";
import BrazilIcon from "../../assets/brazil-icon.svg";
import UsaIcon from "../../assets/usa-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import LinkedinIcon from "../../assets/linkedin-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";

function Footer() {
    return (
        <footer>
            <div className='container'>
              <div className="d-flex jc-space-between">
                <div className="footer-logo-col">
                  <img src={Logo} alt="Logo" />
                  <p className="grey-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>

                  <div className="d-flex socail-links">
                    <a href="https://www.facebook.com" target="_blank">
                      <img src={FacebookIcon} alt="Facebook" />
                    </a>

                    <a href="https://www.twitter.com" target="_blank">
                      <img src={TwitterIcon} alt="Twitter" />
                    </a>

                    <a href="https://www.linkedin.com" target="_blank">
                      <img src={LinkedinIcon} alt="Linkedin" />
                    </a>

                    <a href="https://www.instagram.com" target="_blank">
                      <img src={InstagramIcon} alt="Instagram" />
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
        </footer>
    );
}

export default Footer;
