import Projects from "@/components/Projects";
import { fetchProjects } from "@/fetch/fetchProjects";

async function page() {
    const projectsData = await fetchProjects();


  return (
    <main className="projects">
      <Projects projectsData={projectsData} moreLink={false} />
    </main>
  );
}

export default page;
