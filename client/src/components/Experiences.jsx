import Link from "next/link";
import arrowIcon from "../app/assets/arrowIcon.svg";
import Image from "next/image";

function Experiences({ experiencesData }) {
  return (
    <section className="work-experience_section py-20 overflow-hidden relative">
      <div className="container mx-auto px-4 h-full relative">
        <div className="work-experience-title flex items-end justify-start mb-10">
          <h1 className="font-bold text-5xl md:w-auto bg-gradient-to-r from-openpurple to-primary-white text-transparent bg-clip-text">
            Work Experience
            <div className="dot inline-block w-4 h-4 bg-openpurple rounded-full ms-1"></div>
          </h1>
        </div>
        <div className="flex flex-col space-y-5">
          {experiencesData?.length > 0 ? (
            experiencesData?.map((item, index) => (
              <Link
                href={item?.websiteLink}
                target="_blank"
                key={item?._id}
                className="work-experience-box border-0 border-b-2 border-b-openpurple py-8 cursor-pointer flex-wrap space-y-5 px-3 flex items-center justify-evenly transition hover:!text-primary-white hover:bg-openpurple group"
              >
                <div className="child work-experience-box-title font-bold flex items-center space-x-4 w-full md:w-3/12">
                  <span className="number text-2xl text-openpurple group-hover:text-primary-white">
                    0{index + 1}
                  </span>
                  <span className="text-4xl text-primary-white">{item?.title}</span>
                </div>
                <div className="child work-experience-box-description w-full md:w-7/12">
                  <p className="text-slate-300">{item?.description}</p>
                </div>
                <div className="child work-experience-box-link flex w-full justify-end md:w-2/12">
                  <Image
                    src={arrowIcon}
                    alt="yousef ahmed | frontend developer"
                  />
                </div>
              </Link>
            ))
          ) : (
            <p className="text-openpurple">Loading experiences</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
