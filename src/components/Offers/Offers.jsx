import { useKeenSlider } from "keen-slider/react";
import "../../Components4/Testimonial/testimonials.css";
import "keen-slider/keen-slider.min.css";
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

            <h1 className="text-xl sm:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
            MORE IMAGES OF THE COMPOUND
            </h1>
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
                  <div className="block aspect-square w-full">
                    <img
                      src={img(slide)}
                      className="w-full h-full object-cover"
                      alt="offer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {/* <a
              href="https://buy.stripe.com/00w14n15Kdkx7WHgrjaZi01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-items">6 months</button>
            </a>
            <a
              href="https://buy.stripe.com/bJedR99Cgdkx90L6QJaZi00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-items">12 months</button>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
