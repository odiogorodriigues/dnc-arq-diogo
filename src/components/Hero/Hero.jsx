import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

// COMPONENTS
import Button from "../Button/Button";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// CONTEXT
import { AppContext } from "../../contexts/AppContext";

function Hero(props) {
  const { languages, language, loanding } = useContext(AppContext);

  if (loanding || !languages || !languages[language]) {
    return (
      <footer>
        <LoadingSpinner />
      </footer>
    );
  }

  const { title, subtitle, cta } = languages[language].hero;

  return (
    <div className="hero d-flex al-center">
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link>
          <Button buttonStyle="secondary" arrow>
            {cta}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
