import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function HeroSection() {
  return (
    <>
      <div className="w-full h-[60vh] sm:h-[90vh] md:h-[80vh] lg:h-screen">
        <Swiper modules={[Autoplay]} autoplay={{ delay: 5000 }} loop={true} >

          <SwiperSlide>
            <picture>
         <source media="(max-width: 699px)" srcSet="mobimage4.webp " className="object-cover" />

              <img src="image1.jpg" className="w-full h-full object-cover" />
            </picture>

          </SwiperSlide>

          <SwiperSlide>
            <picture>
              <source media="(max-width: 699px)" srcSet="mobimage3.webp" className="object-cover"/>
              <img src="image2.jpg" className="w-full h-full object-cover" />
            </picture>
          </SwiperSlide>

          <SwiperSlide>
            <picture>
              <source media="(max-width: 699px)" srcSet="mobimage2.webp" className="object-cover" />

              <img src="image3.jpg" className="w-full h-full object-cover" />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media="(max-width: 699px)" srcSet="mobimage1.webp" className="object-cover" />

              <img src="image4.jpg" className="w-full h-full object-cover" />
            </picture>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}