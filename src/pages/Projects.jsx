import { useContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import Banner from "../components/Banner/Banner";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

// CONTEXT
import { AppContext } from "../contexts/AppContext";

function Projects() {
  const { languages, language, loanding } = useContext(AppContext);

  if (loanding || !languages || !languages[language]) {
    return (
      <footer>
        <LoadingSpinner />
      </footer>
    );
  }

  const projectsTitle = languages[language].menu.projects;

  return (
    <>
      <Header />
      <Banner
        title={projectsTitle}
        image="projects.jpg"
      />
      <div className="container">
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
