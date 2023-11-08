import NftCard from "@/components/cards/ntfCard";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
export default function CardCarousel() {
  const [currentSlide, _] = useState(0);
  register();
  const sliderRef = useRef<SwiperRef>(null);
  const handleNext = () => {
    sliderRef.current?.swiper.slideNext();
  };

  const handlePrevious = () => {
    sliderRef.current?.swiper.slidePrev();
  };

  useEffect(() => {
    sliderRef.current?.swiper.slideTo(currentSlide, 500, false);
  }, [currentSlide]);

  return (
    <section className="cardCarousel">
      <div className="cardCarousel--top">
        <h2 className="cardCarousel_headline">Recent Arrivals</h2>
        <div className="cardCarousel_buttonWrapper">
          <button onClick={handlePrevious}>
            <FiChevronLeft size={30} color="#b4b4b4" />
          </button>
          <button onClick={handleNext}>
            <FiChevronRight size={30} color="#b4b4b4" />
          </button>
        </div>
      </div>

      <Swiper
        ref={sliderRef}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
        }}>
        <SwiperSlide>
          <NftCard index={0} />
        </SwiperSlide>
        <SwiperSlide>
          <NftCard index={1} />
        </SwiperSlide>
        <SwiperSlide>
          <NftCard index={2} />
        </SwiperSlide>
        <SwiperSlide>
          <NftCard index={3} />
        </SwiperSlide>
        <SwiperSlide>
          <NftCard index={4} />
        </SwiperSlide>
        <SwiperSlide>
          <NftCard index={5} />
        </SwiperSlide>
        <SwiperSlide>
          <NftCard index={6} />
        </SwiperSlide>
        <SwiperSlide>
          <NftCard index={7} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
