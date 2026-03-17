import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { useHayc } from "../../hayc/config-context";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Room = () => {
  const { img, config } = useHayc();
  const bc = config.breadCrumbConfig;

  // facilities slider breckpoints
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 10,
      },
      "(min-width: 500px)": {
        slides: { origin: "center", perView: 1.5 },
        spacing: 10,
      },
      "(min-width: 600px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 15,
      },
      "(min-width: 768px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 18,
      },
      "(min-width: 992px)": {
        slides: { origin: "center", perView: 2 },
        spacing: 20,
      },
    },
    loop: true,
    initial: 0,
  });

  return (
    <section className="">
      <BreadCrumb
        title="LUXURY SUITES AND POOLS"
        image={img(bc.roomsImage)}
      />

      {/* All rooms */}

      <div className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px]">
        <div className="Container ">
          {/* section heading */}
          <div
            className=" text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]  mx-auto  px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section Logo */}
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
              <img
                src="/images/inner/AdytonLogo.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
            </div>
            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[30px] mb-[24px] font-Garamond font-semibold uppercase">
              ADYTON LUXURY SUITES AND POOLS 
            </h1>
            <p className="text-sm sm:text-base text-gray dark:text-lightGray font-Lora">
              Explore the elegant luxury suites and pools of our compound, designed for comfort and a refined stay. Capacity 14 guests (up to 16 upon request with free extra bed in specific suites). Choose your preferred lease plan and secure your stay instantly.
            </p>
            <p className="text-sm sm:text-base text-khaki font-semibold mb-2 text-center">Immediately available</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-12">
              <a
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
              </a>
            </div>
          </div>
          {/* Rooms Slider Container */}

          <div className="mt-14 2xl:mt-[60px] grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
            {/* Room - 1 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/LuxurySuites/589394453.jpg"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>
                <Link to={"/room-type/deluxe-double-pool"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link to="/room-type/deluxe-double-pool">
                      <h2 className="text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] leading-7 sm:leading-8 lg:leading-[34px] font-semibold text-lightBlack dark:text-white py-4">
                        Deluxe Double Room -
                        with Pool Access
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      25 sq met
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <img
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            1 double or 2 single
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 2 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/LuxurySuites/589394592.jpg"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>
                <Link to={"/room-type/premium-quadruple"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link to="/room-type/premium-quadruple">
                      <h2 className="text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] leading-7 sm:leading-8 lg:leading-[30px] font-semibold text-lightBlack dark:text-white py-4">
                        Premium Quadruple Room
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      70 sq met
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <img
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            2 double beds
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 3 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/LuxurySuites/590440967.jpg"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>
                <Link to={"/room-type/standard-apartment"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link to="/room-type/standard-apartment">
                      <h2 className="text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] leading-7 sm:leading-8 lg:leading-[30px] font-semibold text-lightBlack dark:text-white py-4">
                        Standard Apartment
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      47 sq met
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <img
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            1 double bed and 1 couch bed
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 4 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/LuxurySuites/589394453.jpg"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>

                <Link to={"/room-type/deluxe-double-pool-2"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link to="/room-type/deluxe-double-pool-2">
                      <h2 className="text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] leading-7 sm:leading-8 lg:leading-[34px] font-semibold text-lightBlack dark:text-white py-4">
                        Deluxe Double Room -
                        with Pool Access
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      25 sq met
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <img
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            1 double or 2 single
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 5 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/LuxurySuites/589394511.jpg"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>

                <Link to={"/room-type/deluxe-double-pool-3"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link to="/room-type/deluxe-double-pool-3">
                      <h2 className="text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] leading-7 sm:leading-8 lg:leading-[34px] font-semibold text-lightBlack dark:text-white py-4">
                        Deluxe Double Room -
                        with Pool Access
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      25 sq met
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <img
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            1 double or 2 single
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 6 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/LuxurySuites/589394590.jpg"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>

                <Link to={"/room-type/deluxe-double-pool-4"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link to="/room-type/deluxe-double-pool-4">
                      <h2 className="text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] leading-7 sm:leading-8 lg:leading-[34px] font-semibold text-lightBlack dark:text-white py-4">
                        Deluxe Double Room -
                        with Pool Access
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      25 sq met
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <img
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            1 double or 2 single
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Room;
