import ProjectsCards from "./ProjectsCards";
import Button from "./ui/Button";

function Projects({ projectsData, moreLink }) {
  return (
    <section className="projects_ssection py-20 overflow-hidden relative">
      <div className="container relative">
        <div className="projects-title mb-10">
          <h1 className="font-bold text-5xl md:w-auto">
            <span className="bg-gradient-to-r from-openpurple to-primary-white text-transparent bg-clip-text">
              My Recent Projects
            </span>
            <div className="dot inline-block w-4 h-4 bg-openpurple rounded-full ms-1"></div>
          </h1>
        </div>
        <div className="projects-items">
          <ProjectsCards projectsData={projectsData} />
        </div>
        {moreLink && <div className="flex justify-center mt-10">
          <Button text={"More Projects"} to={"/projects"} />
        </div>}
      </div>
    </section>
  );
}

export default Projects;
