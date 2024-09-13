import Button from "./ui/Button";

function HeroSection() {
  return (
    <section className="wrapper_section min-h-screen pt-40 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <section className="hero_section mb-20">
          <div className="flex items-start">
            <div className="hero-content flex flex-col gap-y-5 w-full md:w-8/12">
              <span className="hero-name-title text-primary-white font-semibold text-xl md:text-2xl">
                Work as {""}
                <span className="bg-gradient-to-r from-openpurple to-primary-white text-transparent bg-clip-text">
                  frontend developer
                </span>
              </span>
              <h1 className="hero-title text-6xl text-openpurple font-bold md:text-8xl">
                I'm{" "}
                <span className="bg-gradient-to-r from-openpurple to-primary-white text-transparent bg-clip-text">
                  Yousef
                </span>
              </h1>
              <p className="text-primary-white-800 text-xl w-full mb-5 md:w-6/12">
                I am frontend developer, I create dynamic and static websites
                with modern technologies
              </p>
              <Button text={"Lest Talk"} to={"https://wa.me/201145667099"} />
            </div>
          </div>
        </section>
        <section className="counter_section">
          <div className="counter-box py-7 border rounded-lg border-openpurple">
            <div className="parnet flex flex-wrap justify-center gap-y-5 md:justify-evenly">
              <div className="child flex items-center flex-col gap-x-3 w-full sm:w-6/12 md:w-auto md:flex-row">
                <span className="text-6xl font-bold">2+</span>
                <div className="text-lg text-primary-white md:text-sm">
                  <span className="inline mb-1 md:block">Years of</span>{" "}
                  <span>Experience</span>
                </div>
              </div>
              <div className="child flex items-center flex-col gap-x-3 w-full sm:w-6/12 md:w-auto md:flex-row">
                <span className="text-6xl font-bold">15+</span>
                <div className="text-lg text-primary-white md:text-sm">
                  <span className="inline mb-1 md:block">Project</span>{" "}
                  <span>Completed</span>
                </div>
              </div>
              <div className="child flex items-center flex-col gap-x-3 w-full sm:w-auto md:flex-row">
                <span className="text-6xl font-bold">3+</span>
                <div className="text-lg text-primary-white md:text-sm">
                  <span className="inline mb-1 md:block">Happy</span>{" "}
                  <span>Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default HeroSection;
