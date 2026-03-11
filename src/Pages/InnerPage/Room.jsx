import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Room = () => {
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
      <BreadCrumb title="ROOMS" home={"/"} />

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
              ADYTON SUITE ROOMS 
            </h1>
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
                    src="/images/590793718.jpg"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$450</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>

                <Link to={"/room_details"}>
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
                    <Link
                      to="/find_room"
                      state={{
                        price: "450",
                        title:
                          "Deluxe Double Room – with 1 Double or 2 Single Beds – with Pool Access",
                      }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[34px] font-semibold text-lightBlack dark:text-white py-4">
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
                    src="/images/590779274.jpg "
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$550</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>
                <Link to={"/room_details"}>
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
                    <Link
                      to="/find_room"
                      state={{ price: "550", title: "Premium Quadruple Room" }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
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
                    src="/images/590441018.jpg "
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$560</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>
                <Link to={"/room_details"}>
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
                    <Link
                      to="/find_room"
                      state={{ price: "560", title: "Standard Apartment" }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
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

         
          </div>
        </div>
      </div>

    </section>
  );
};

export default Room;
