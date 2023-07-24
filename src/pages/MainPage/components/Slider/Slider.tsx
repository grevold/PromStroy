import { texts } from "../../../../texts";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Slide } from "./components/Slide";
import { Autoplay, Pagination } from "swiper";
import { useSlider } from "./useSlider";

import s from "./Slider.module.css";

const swiperConfig: SwiperProps = {
  modules: [Autoplay, Pagination],
  onAutoplayTimeLeft: function () {},
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  direction: "horizontal",
  speed: 1200,
};

export function Slider() {
  useSlider();
  return (
    <div className={s.root}>
      <Swiper {...swiperConfig}>
        {texts.Slider.map((product) => (
          <SwiperSlide key={product.title}>
            <Slide product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
