import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../Components4/Testimonial/testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { useHayc } from "../../hayc/config-context";

const Rooms = () => {
  const { t, img, config } = useHayc();
  const r = config.roomsConfig;
  const roomSlides = [
    { image: "/images/privateSecurity.jpg", title: "Security" },
    { image: "/images/chauffeurDriver.jpg", title: "Transportation services" },
    { image: "/images/vipConcierge.jpg", title: "Concierge services" },
    { image: "/images/privateChef.jpg", title: "Private Chef" },
    { image: "/images/hairAndBeauty.jpg", title: "Hairdresser, manicure, pedicure" },
    { image: "/images/privateSecurity.jpg", title: "Cleaning services" },
    { image: "/images/vipConcierge.jpg", title: "And more" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:992px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      // setLoaded(true);
    },
  });

  return (
    <div className="bg-whiteSmoke dark:bg-lightBlack">
      {/* Rooms section heading */}
      <div className="relative overflow-hidden py-20 2xl:py-[120px] w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-no-repeat bg-top bg-[length:240px] opacity-[0.04] dark:opacity-[0.08]"
          style={{ backgroundImage: `url(${img(r.bgShape)})` }}
        />
        <div className="Container relative z-10">
          {/* section heading */}
          <div
            className=" text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]  mx-auto  px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2 mb-4 lg:mb-[20px]">
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
              <img
                src={img(r.sectionLogo)}
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
            </div>

            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mb-[6]  font-Garamond font-semibold uppercase">
              {t(r.sectionTitle)}
            </h1>
            <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base mt-[15px] lg:mt-0">
              {t(r.sectionDesc)}
            </p>
            {/* Mobile: arrow hint that content below is a slider */}
            <div className="flex md:hidden items-center justify-center gap-4 mt-6 mb-2">
              <BsArrowLeft className="w-6 h-6 text-khaki" />
              <span className="text-xs text-gray dark:text-lightGray uppercase tracking-wider">Swipe</span>
              <BsArrowRight className="w-6 h-6 text-khaki" />
            </div>
          </div>
          {/* Rooms Slider Container */}

          <div className="relative">
            <div className="mt-14 2xl:mt-[60px] keen-slider " ref={sliderRef}>
              {roomSlides.map((slide, idx) => (
              <div key={idx} className={`keen-slider__slide number-slide1 ${idx === 0 ? '' : idx === 1 ? '' : ''}`}>
                <div data-aos={idx === 0 ? "fade-up-left" : idx === 1 ? "fade-up" : "fade-up-right"} data-aos-duration="1000">
                  <div className={`overflow-x-hidden 3xl:w-[410px] group relative ${idx === 0 ? '' : ''}`}>
                    <div className="relative">
                      <div className="overflow-hidden">
                        <img
                          src={img(slide.image)}
                          className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-all duration-300"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <Link to={"/contact"}>
                          <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300 hover:bg-khaki">
                            {t(r.viewDetailsBtn)}{" "}
                            <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="font-Garamond">
                      <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0">
                        <div className="py-6 px-[30px]">
                          <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                            UPON REQUEST
                          </h4>
                          <Link to="/contact">
                            <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                              {slide.title}
                            </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>

            {/* Arrows below slider: Previous | Next */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <button
                type="button"
                onClick={() => instanceRef.current?.prev()}
                aria-label="Previous"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-khaki bg-white dark:bg-lightBlack text-lightBlack dark:text-white flex items-center justify-center hover:bg-khaki hover:text-white hover:border-khaki transition-colors"
              >
                <BsArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                type="button"
                onClick={() => instanceRef.current?.next()}
                aria-label="Next"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-khaki bg-white dark:bg-lightBlack text-lightBlack dark:text-white flex items-center justify-center hover:bg-khaki hover:text-white hover:border-khaki transition-colors"
              >
                <BsArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
