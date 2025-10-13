import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import Banner from "../components/Banner/Banner"

function Projects () {
  return (
    <>
      <Header />
      <Banner title="Projects" image="projects.jpg" />
      <div className="container">
        <ProjectsList />
      </div>
      <Footer />
    </>
  )
}

export default Projects