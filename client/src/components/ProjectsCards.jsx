import Image from "next/image";
import { urlFor } from "../../sanityClient";
import arrowIcon from "../app/assets/arrowIcon.svg";
import Link from "next/link";

function ProjectsCards({ projectsData }) {
  return (
    <div className="projects-cards">
      <div className="flex flex-wrap">
        {projectsData?.length > 0 ? (
          projectsData?.map((item, index) => (
            <div key={item?._id} className="project-card p-3 w-full md:w-6/12">
              <div className="relative cursor-pointer w-full bg-primary-black p-5 rounded-xl h-auto shadow-xl shadow-primary-white/5 transition hover:border-openpurple hover:border">
                <div className="project-image mb-3">
                  <Image
                    src={urlFor(item?.projectImage).url()}
                    className="h-full rounded-xl"
                    width={10000}
                    height={1000}
                    alt="Project Image"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-content-title text-xl font-bold text-primary-white mb-4 md:text-3xl">
                    {item?.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="project-content-date text-primary-white/50">
                      {new Date(item?.createdAt).toLocaleDateString("en-US")}
                    </span>

                    <Link href={item?.websiteLink} target="_blank">
                      <Image src={arrowIcon} alt={`${item?.title} project`} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-openpurple">Loading projects</p>
        )}
      </div>
    </div>
  );
}

export default ProjectsCards;
