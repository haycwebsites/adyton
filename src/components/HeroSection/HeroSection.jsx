import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useHayc } from "../../hayc/config-context";

const HeroSection = () => {
  const { t, img, config } = useHayc();
  const h = config.heroConfig;

  return (
    <div className="">
      <Swiper
        centeredSlides={true}
        loop={false}
        navigation={false}
        speed="0"
        pagination={{
          clickable: false,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div
              className="w-full h-[70svh] min-h-[560px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] bg-[rgba(0,0,0,0.4)] bg-blend-multiply grid items-end md:items-center bg-cover justify-center text-white relative pb-8 pt-20 sm:pt-32 md:pt-0 md:pb-16 xl:pb-0"
              style={{ backgroundImage: `url(${img("/images/LuxurySuites/589394592.jpg")})` }}
              data-aos="fade-down"
            >
              <div className="font-Garamond 2xl:w-[720px] text-center">
                {/* Logo with lines */}
                <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-5 md:mb-8">
                  <hr className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[220px] h-[2px] bg-white/90" />
                  <img src={img(config?.navConfig?.logo ?? '/images/inner/AdytonLogo.png')} alt="" className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] object-contain" />
                  <hr className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[220px] h-[2px] bg-white/90" />
                </div>
                <h4 className="text-base mb-4">{t(h.subtitle)}</h4>
                <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-8xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[90px]">
                    {t(h.mainTitle)}
                  </h1>
                 
                </div>
                <p className="text-sm sm:text-base text-white/95 font-medium mb-3">Immediately available</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://buy.stripe.com/00w14n15Kdkx7WHgrjaZi01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative
                  text-base
                 font-Garamond
                  font-medium hover-animBg after:bg-normalBlack after:rounded-none uppercase"
                    >
                      {t(h.leaseButton6Months)}
                    </button>
                  </a>
                  <a
                    href="https://buy.stripe.com/bJedR99Cgdkx90L6QJaZi00"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative
                  text-base
                 font-Garamond
                  font-medium hover-animBg after:bg-normalBlack after:rounded-none uppercase"
                    >
                      {t(h.leaseButton12Months)}
                    </button>
                  </a>
                </div>
              </div>
              <a
                href={`tel:${h.phone}`}
                className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90"
                aria-label={`Call ${h.phone}`}
              >
                <BiPhoneCall className="w-5 h-5 mr-2 text-khaki" /> {h.phone}
              </a>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
