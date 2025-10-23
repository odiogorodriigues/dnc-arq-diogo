import { useContext } from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import Banner from "../components/Banner/Banner"

// CONTEXT
import { AppContext } from "../contexts/AppContext";

function Projects () {
  return (
    <>
      <Header />
      <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.jpg" />
      <div className="container">
        <ProjectsList />
      </div>
      <Footer />
    </>
  )
}

export default Projects