import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function HeroSection() {
  return (
    <div className="w-full h-[25] object-cover">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 5000 }} loop={true} >
        <SwiperSlide>
          <img src="image1.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="image2.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="image3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="image4.jpg" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}