import { useContext } from "react";
import AboutText from "../components/AboutText/AboutText";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

// CONTEXT
import { AppContext } from "../contexts/AppContext";

function About() {
  const { languages, language, loanding } = useContext(AppContext);

  if (loanding || !languages || !languages[language]) {
    return (
      <footer>
        <LoadingSpinner />
      </footer>
    );
  }

  const aboutTitle = languages[language].menu.about;

  return (
    <>
      <Header />
      <Banner title={aboutTitle} image="about.jpg" />
      <div className="container">
        <AboutText />
      </div>
      <Footer />
    </>
  );
}

export default About;
