import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router";


export default function HeroSection() {
  return (
    <>
      <div className="mx-2 lg:mx-6 h-[60vh] md:h-[80vh] lg:h-screen">
        <Swiper className="h-full" modules={[Autoplay]} autoplay={{ delay: 5000 }} loop={true} >

          <SwiperSlide className="h-full">
            <picture className="h-full">
              <source media="(max-width: 699px)" srcSet="mobimage4.webp" />
              <Link to="/product" >
                <img src="image1.jpg" className="w-full h-full object-cover" alt="banner" />
              </Link>
            </picture>

          </SwiperSlide>

          <SwiperSlide>
            <picture>
              <source media="(max-width: 699px)" srcSet="mobimage3.webp" className="object-cover" />
              <Link to="/collection/bags">
                <img src="https://www.amama.in/cdn/shop/files/BAGS_ec3e07b4-a582-4f05-b66e-1655dea4c579.png?v=1778565276&width=2000" className="w-full h-full object-cover" />
              </Link>
            </picture>
          </SwiperSlide>

          <SwiperSlide>
            <picture>
              <source media="(max-width: 699px)" srcSet="mobimage2.webp" className="object-cover" />
              <Link to="/collection/feathers">
                <img src="image3.jpg" className="w-full h-full object-cover" />
              </Link>
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media="(max-width: 699px)" srcSet="mobimage1.webp" className="object-cover" />
              <Link to="/collection/shaadi">
                <img src="image4.jpg" className="w-full h-full object-cover" />
              </Link>
            </picture>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}