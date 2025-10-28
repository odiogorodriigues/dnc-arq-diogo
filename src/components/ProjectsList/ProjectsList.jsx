import { useContext, useEffect, useState } from "react";
import "./ProjectsList.css";

// ASSETS
import LikedFilled from "../../assets/like-filled.svg";
import LikeOutline from "../../assets/like.svg";

// COMPONENTS
import Button from "../../components/Button/Button";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// CONTEXT
import { AppContext } from "../../contexts/AppContext";

// UTILS
import { getApiData } from "../../services/apiServices";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [favProject, setFavProject] = useState([]);
  const { languages, language, loanding } = useContext(AppContext);

  const handleSavedProjects = (id) => {
    setFavProject((prevFavProjects) => {
      if (prevFavProjects.includes(id)) {
        const filterArray = prevFavProjects.filter(
          (projectId) => projectId !== id
        );
        sessionStorage.setItem("favProjects", JSON.stringify(filterArray));
        return prevFavProjects.filter((projectId) => projectId !== id);
      } else {
        sessionStorage.setItem(
          "favProjects",
          JSON.stringify([...prevFavProjects, id])
        );
        return [...prevFavProjects, id];
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData("projects");
        setProjects(projectsResponse);
      } catch {
        setProjects([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const savedFavProjects = JSON.parse(sessionStorage.getItem("favProjects"));
    if (savedFavProjects) {
      setFavProject(savedFavProjects);
    }
  }, []);

  // Evita erro: só renderiza depois que o contexto estiver pronto
  if (loanding || !languages || !languages[language]) {
    return (
      <footer>
        <LoadingSpinner />
      </footer>
    );
  }

  const { title, subtitle } = languages[language].projects;

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="projects-grid">
        {projects
          ? projects.map((project) => (
              <div
                className="project-card d-flex jc-center al-center fd-column"
                key={project.id}
              >
                <div
                  className="thumb tertiary-background"
                  style={{ backgroundImage: `url(${import.meta.env.BASE_URL}projects/${project.id}.jpg)` }}
                ></div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <Button
                  buttonStyle="unstyled"
                  onClick={() => handleSavedProjects(project.id)}
                >
                  <img
                    src={
                      favProject.includes(project.id)
                        ? LikedFilled
                        : LikeOutline
                    }
                    height="20px"
                  />
                </Button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProjectsList;
