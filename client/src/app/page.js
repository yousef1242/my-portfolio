import AboutmeSection from "@/components/AboutmeSection";
import HeroSection from "@/components/HeroSection";
import { fetchExperiences } from "@/fetch/fetchExperiences";
import { fetchTechs } from "@/fetch/fetchTechs";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import { fetchProjects } from "@/fetch/fetchProjects";
import ClientsStories from "@/components/ClientsStories";
import { fetchStories } from "@/fetch/fetchStories";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default async function Home() {
  const techsData = await fetchTechs();
  const experiencesData = await fetchExperiences();
  const projectsData = await fetchProjects();
  const storiesData = await fetchStories();

  return (
    <main className="home">
      <HeroSection />
      <AboutmeSection techsData={techsData} />
      <Experiences experiencesData={experiencesData} />
      <Projects projectsData={projectsData?.slice(0, 4)} moreLink={true} />
      <ClientsStories storiesData={storiesData} />
    </main>
  );
}
