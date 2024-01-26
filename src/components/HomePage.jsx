import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { useEffect, useState } from 'react';
import "./Styles/HomePage.css";
import BG from "../assets/images/bg.png";
import m1 from "../assets/images/m1.jpg";
import m2 from "../assets/images/m2.jpg";
import m3 from "../assets/images/m3.jpg";
import m4 from "../assets/images/m4.jpg";
import m5 from "../assets/images/m5.jpg";
import m6 from "../assets/images/m6.jpg";
import m7 from "../assets/images/m7.jpg";

const HomePage = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 992) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="container-lg home ">
        <img src={BG} alt="" className="full" />
      </div>
      <div className="mt-3 px-5">
        <p className="para-text text-center">
          Creating a space where beauty knows no boundaries, and every individual feels empowered, confident, and celebrated. We specialize in providing services for nails, skin, and lashes to help you attain a youthful radiance
        </p>
        <h1 className="title-text text-center ">SPA HOURS</h1>
        <h5 className="para-text  text-center m-2">MONDAY: CLOSED</h5>
        <h5 className="para-text  text-center m-2">TUESDAY - FRIDAY: 1PM - 9PM</h5>
        <h5 className="para-text  text-center m-2">SATURDAY - SUNDAY: 10AM - 6PM</h5>
      </div>
      <div className="light-bg  bg-yellow mt-5 p-4">
        <h4 className="sub-text text-light text-center">RÊVE ESTHÉTIQUE</h4>
      </div>
      <h5 className="sub-text2 text-center mt-5">Welcome to our gender-neutral oasis of aesthetic excellence!</h5>
      <div className="container-lg content-center">
        <div className="container-lg mt-5 p-1">
          <Swiper
            spaceBetween={15}
            slidesPerView={slidesPerView}
            navigation
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="card">
                <img src={m1} className="card-img-top swiper-img" alt="..." />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={m6} className="card-img-top swiper-img" alt="..." />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={m3} className="card-img-top swiper-img" alt="..." />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={m4} className="card-img-top swiper-img" alt="..." />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={m5} className="card-img-top swiper-img" alt="..." />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={m2} className="card-img-top swiper-img" alt="..." />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={m7} className="card-img-top swiper-img" alt="..." />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="m-5 text-center">
        <h5 className="q-text  text-center ">Beauty knows no gender here— as we're on a mission to boost confidence, self-expression, and redefine beauty norms.</h5>
        <h5 className="text-center sub-text2 mb-4 ">Embrace your unique beauty journey with us!</h5>
        <Link to="/Calendar" className="home-btn ">Book an Appointment Now! </Link>
      </div>
    </>
  );
};

export default HomePage;
