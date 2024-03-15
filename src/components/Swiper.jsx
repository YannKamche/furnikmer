import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Slider = ({ images }) => {
  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    // Cleanup
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <Swiper
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="team-one">
            <img src={image} alt="" />
            <h4>Niculous Barella</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
