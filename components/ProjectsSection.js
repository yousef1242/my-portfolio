import classes from "../styles/projectSection.module.css";
import img1 from "../public/apple ecommerce.png";
import img2 from "../public/ecommerce.png";
import img3 from "../public/netflix.png";
import img5 from "../public/company.png";
import img7 from "../public/acadimya.png";
import img8 from "../public/khamsta.png";
import img9 from "../public/shopping.png";
import img10 from "../public/techCourses.png";
import img11 from "../public/mern stack ecommerce.png";
import img12 from "../public/hotel booking.png";
import img13 from "../public/ecommerceNodejs.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ProjectsSection = () => {
  const projects = [
    {
      image: img1,
      name: "Reactjs ecommerce",
      link: "https://ecommerce-apple-psi.vercel.app/",
    },
    {
      image: img11,
      name: "Full stack ecommerce",
      link: "https://mern-stack-ecommerce-frontend.vercel.app/",
    },
    {
      image: img12,
      name: "Full stack Hotel Booking",
      link: "https://booking-app-mern-frontend.vercel.app/",
    },
    {
      image: img13,
      name: "Full stack ecommerce",
      link: "https://faithful-hen-jodhpurs.cyclic.app/",
    },
    {
      image: img10,
      name: "Full stack tech-courses",
      link: "https://mern-stack-tech-courses-frontend.vercel.app/",
    },
    {
      image: img2,
      name: "Reactjs ecommerce",
      link: "https://e-commerce-ebon-five.vercel.app/",
    },
    {
      image: img3,
      name: "Reactjs netflix-clone",
      link: "https://netflex-clone-three.vercel.app/",
    },
    {
      image: img5,
      name: "Reactjs company-website",
      link: "https://company-project-five.vercel.app/",
    },
    {
      image: img7,
      name: "Html acadimia-website",
      link: "https://yousef1242.github.io/acadimia/",
    },
    {
      image: img8,
      name: "Html khamst-clone",
      link: "https://yousef1242.github.io/khamsat/",
    },
    {
      image: img9,
      name: "Html shoppig-website",
      link: "https://yousef1242.github.io/shopping/#",
    },
  ];
  return (
    <>
      <section className={classes.projectsSection} id="projects-section">
        <div className="container">
          <h3>RECENT PROJECTS</h3>
          <div className="row m-0">
            {projects.map((project) => (
              <div className="col-12 col-sm-6 col-md-4 mb-4">
                <div className={`card ${classes.card}`}>
                  <div className="mb-3 position-relative">
                    <Link
                      target="_blank"
                      href={project.link}
                      className={classes.eyeLink}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                    <Image src={project.image} alt="" />
                  </div>
                  <h5>{project.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
