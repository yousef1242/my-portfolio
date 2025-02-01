import Techs from "./Techs";

function AboutmeSection({ techsData }) {
  return (
    <section id="about" className="about_section py-20 relative overflow-hidden">
      <div className="container relative">
        <div className="about-title text-center flex items-end justify-start mb-10">
          <h1 className="font-bold text-5xl md:w-auto bg-gradient-to-r from-openpurple to-white text-transparent bg-clip-text">
            About Me
            <div className="dot inline-block w-4 h-4 bg-openpurple rounded-full ms-1"></div>
          </h1>
        </div>
        <div className="about-content flex flex-wrap items-start gap-y-10 md:gap-y-0">
          <div className="about-content w-full md:w-8/12">
            <p className="mb-5 block">
              I’m a passionate frontend developer with experience working with
              clients to bring their ideas to life through clean, efficient, and
              modern web solutions. I specialize in creating responsive,
              user-friendly interfaces using the latest technologies and
              frameworks. My focus is on delivering high-quality projects that
              not only meet client expectations but also exceed them by
              optimizing performance and ensuring seamless user experiences.
              With a solid foundation in frontend development.
            </p>
            <p className="mb-5">
              I stay up-to-date with the evolving landscape of web technologies
              to ensure that I always deliver cutting-edge solutions. Whether
              it's collaborating on a small project or developing a large-scale
              web application, I bring dedication and expertise to every task.
            </p>
            <p>
              Feel free to modify any part of this to better match your style or
              specific areas of expertise!
            </p>
          </div>
          <div className="about-techs w-full ps-3 md:w-4/12">
            <h3 className="about-techs-title text-4xl font-bold mb-4">
              My Techs
            </h3>
            <Techs techsData={techsData} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutmeSection;
