import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "../../Components4/Testimonial/testimonials.css";
import "keen-slider/keen-slider.min.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useHayc } from "../../hayc/config-context";

const Offers = () => {
  const { t, img, config } = useHayc();
  const o = config.offersConfig;
  const slides = [o.offer1, o.offer2, o.offer3, o.offer4];
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:768px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width:1200px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
  });
  return (
    <section className="bg-[#f8f6f3] dark:bg-lightBlack">
      <div className="Container py-20 lg:py-[120px] ">
        <div
          className="flex items-center justify-between relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className=" md:w-[450px] lg:w-[450px] xl:w-[500px] font-Garamond">
            <h5 className="mb-3 text-base text-khaki leading-[26px] font-medium">
              {t(o.sectionLabel)}
            </h5>
            <h1 className="text-xl sm:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
            MORE IMAGES OF OUR SUITE
            </h1>
          </div>
          <div className="flex items-center lg:space-x-5  space-x-3">
            <button
              className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki hover:border-none group"
              disabled
              title="Button disabled use swapping"
            >
              <BsChevronLeft className="w-5 h-5 text-[#cccbc8] group-hover:text-white " />
            </button>
            <button
              className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki
             hover:border-none group"
              disabled
              title="Button disabled use swapping"
            >
              <BsChevronRight className="w-5 h-5 text-[#cccbc8]  group-hover:text-white" />
            </button>
          </div>
        </div>

        <hr className="text-[#e8e8e8] dark:text-[#383838] my-[40px]" />
        {/* offers carusal */}
        <div className="relative">
          <div className="mt-14 2xl:mt-[60px] keen-slider " ref={sliderRef}>
            {slides.map((slide, index) => (
              <div key={index} className="keen-slider__slide number-slide1">
                <div
                  className="overflow-hidden group"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Link to="/room" className="block aspect-square w-full">
                    <img
                      src={img(slide)}
                      className="w-full h-full object-cover"
                      alt="offer"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
