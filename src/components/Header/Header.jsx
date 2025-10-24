import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// ASSETS
import "./Header.css";
import Logo from "../../assets/dnc-logo.svg";

// COMPONENTS
import Button from "../Button/Button";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// CONTEXT
import { AppContext } from "../../contexts/AppContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { languages, language, loanding } = useContext(AppContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (loanding || !languages || !languages[language]) {
    return (
      <footer>
        <LoadingSpinner />
      </footer>
    );
  }
  return (
    <header>
      <div className="container">
        <div className="al-center d-flex jc-space-between">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>

          <div className="mobile-menu">
            <Button buttonStyle="secondary" onClick={() => setIsOpen(!isOpen)}>
              Menu
            </Button>
          </div>

          <nav className={`${isOpen ? "open" : ""}`}>
            <Button
              buttonStyle="unstyled"
              className="mobile-menu close-btn"
              onClick={toggleMenu}
            >
              X
            </Button>
            <ul className="d-flex">
              <li>
                <Link to={"/"}>{languages[language].menu.home}</Link>
              </li>
              <li>
                <Link to={"/about"}>{languages[language].menu.about}</Link>
              </li>
              <li>
                <Link to={"/projects"}>
                  {languages[language].menu.projects}
                </Link>
              </li>
              <li>
                <Link to={"/contact"}>{languages[language].menu.contact}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
