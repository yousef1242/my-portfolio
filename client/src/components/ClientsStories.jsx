"use client"
import StoriesSwiper from "./StoriesSwiper";


function ClientsStories({storiesData}) {
  return (
    <section className="stories_section py-20">
      <div className="container h-full">
        <div className="flex flex-wrap space-y-10 lg:space-y-0">
          <div className="stories-title w-full lg:w-5/12">
            <h1 className="font-bold text-5xl md:w-auto">
              <span className="bg-gradient-to-r from-openpurple to-primary-white text-transparent bg-clip-text">
                My Client's Stories
              </span>
              <div className="dot inline-block w-4 h-4 bg-openpurple rounded-full ms-1"></div>
            </h1>
            <p className="text-primary-white/60 mt-3 text-xl">
              Empowering people in new a journey with my super services.
            </p>
          </div>
          <div className="stories-swiper w-full lg:w-7/12">
            <StoriesSwiper storiesData={storiesData} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsStories;
