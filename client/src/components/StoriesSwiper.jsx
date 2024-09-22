import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

function StoriesSwiper({ storiesData }) {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {storiesData?.length > 0 ? (
        storiesData?.map((item) => (
          <SwiperSlide key={item?._id}>
            <div className="bg-primary-white/10 rounded-xl p-4 pt-10 h-[400px]">
              <div className="swiper-name mb-5">
                <span className="text-primary-white font-bold">
                  {item?.type}
                </span>
              </div>
              <div className="swiper-shape flex mb-5">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-openpurple rotate-[360deg]"></div>
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-openpurple rotate-[180deg]"></div>
              </div>
              <div className="swiper-text font-semibold mb-5">{item?.text}</div>
              <div className="swiper-company-name">
                <span className="text-primary-white font-bold">
                  {item?.name}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <p className="text-openpurple">Loading data</p>
      )}
    </Swiper>
  );
}

export default StoriesSwiper;
