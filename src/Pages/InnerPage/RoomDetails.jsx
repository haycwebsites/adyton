import { BsArrowLeft, BsArrowRight, BsCheck2 } from "react-icons/bs";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { useState } from "react";
import { useHayc } from "../../hayc/config-context";
import {
  FaBath,
  FaBed,
  FaCalendarAlt,
  FaCoffee,
  FaDoorOpen,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaParking,
  FaRulerCombined,
  FaSnowflake,
  FaSmokingBan,
  FaUsers,
  FaWifi,
} from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { LuTv } from "react-icons/lu";
import { useLocation } from "react-router-dom";

const RoomDetails = () => {
  const { img, config } = useHayc();
  const bc = config.breadCrumbConfig;
  const [imageIndex, setImageIndex] = useState(0);
  const location = useLocation();
  const bookingsData = location.state && location.state;
  const images = [
    "/images/LuxurySuites/589394661.jpg",
    "/images/LuxurySuites/589394632.jpg",
    "/images/LuxurySuites/590764778.jpg",
    "/images/LuxurySuites/590781834.jpg",
    "/images/LuxurySuites/590793812.jpg",
    "/images/LuxurySuites/589394511.jpg",
    "/images/LuxurySuites/589394590.jpg",
    "/images/LuxurySuites/589394487.jpg",
  ];

  const prevBtn = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const nextBtn = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="">
      <BreadCrumb
        title="Adyton Suite"
        image={img(bc.adytonSuiteImage)}
      />

      {/* Room Details */}
      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
          <div className="col-span-6 md:col-span-4">
            {/* Image custom slider */}
            <div
              className="overflow-hidden relative group "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src={images[imageIndex]}
                alt=""
                className="w-full h-auto object-cover transition-all duration-500 delay-300"
              />
              <div className="flex ">
                <span
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] left-[-50px] group-hover:left-4 lg:group-hover:left-6 transition-all duration-300 cursor-pointer"
                  onClick={() => prevBtn()}
                >
                  <BsArrowLeft
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
                <span
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] right-[-50px] group-hover:right-4 lg:group-hover:right-6 transition-all duration-300 cursor-pointer"
                  onClick={() => nextBtn()}
                >
                  <BsArrowRight
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
              </div>
            </div>
            {/* Room content */}
            <div className="pt-5 lg:pt-[35px]  pr-3">
              <p className="text-base font-Lora text-khaki">Luxury Suite – 220 sq.m. – Mykonos</p>
              <h2
                className="py-2 sm:py-3 md:py-4 lg:py-[19px] 2xl:py-[25px] font-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] 3xl:text-[40px] leading-6 lg:leading-[26px]  text-lightBlack dark:text-white font-semibold"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                {bookingsData && bookingsData.title
                  ? bookingsData.title
                  : "Adyton Mykonos Villa With Pool"}
              </h2>
              <p
                className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
               A calm and elegant retreat in Ano Mera, ideal for couples and families seeking privacy along with easy and quick access to nearby beaches.
The property can operate year-round and is perfectly suited both for seasonal tourism use and for executive or corporate accommodation throughout the year.

The complex features six ground-floor suites (25–30 m² each), every one with its own private pool and terrace. The shared areas include a landscaped garden, an outdoor swimming pool, and private parking, ensuring comfortable arrival and convenience for guests.
              </p>
              <p
                className="mt-5 2xl:mt-7 text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >

Each suite is equipped with air conditioning, a television, a bathroom with shower and amenities, a refrigerator/mini bar, an espresso machine, and a kettle. Free Wi-Fi is available throughout the property.

Technical details:
Plot size approximately 4,600 m², three-phase electricity, municipal water supply and private borehole, and a corner plot with road frontage.
              </p>
              <div
                className="flex flex-wrap items-center gap-3 mt-10 mb-8"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
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
              {/* Check-In and check-Out */}
              <div
                className="md:flex items-center flex-col md:flex-row md:justify-between py-10 lg:py-[60px]"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                {/* check-in */}
                <div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-khaki" size={22} />
                    <h4 className="text-xl md:text-2xl lg:text-[26px] leading-[26px] font-Garamond text-lightBlack dark:text-white font-semibold ">
                     Location
                    </h4>
                  </div>
                  <ul className="space-y-2 lg:space-y-3 mt-5 lg:mt-[30px]">
                    <li className="flex items-center">
                      <BsCheck2 size={16} className="text-khaki mr-2" />
                      <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                      Cyclades, Cyclades-Mykonos-Ano-Mera, Greece

                      </span>
                    </li>
                    
                  </ul>
                </div>
                {/* check-out */}
                <div className="mt-5 md:mt-0">
                  <div className="flex items-center space-x-2">
                    <FaMoneyBillWave className="text-khaki" size={22} />
                    <h4 className="text-xl md:text-2xl lg:text-[26px] leading-[26px] font-Garamond text-lightBlack dark:text-white font-semibold ">
                      Price
                    </h4>
                  </div>
                  <ul className="space-y-2 lg:space-y-3 mt-5 lg:mt-[30px]">
                    <li className="flex items-center">
                      <BsCheck2 size={16} className="text-khaki mr-2" />
                      <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                      €10,540 / month (€8,500 + 24% VAT), with company invoice.
                      </span>
                    </li>
                   
                  </ul>
                </div>
              </div>
              {/* House Roles */}
              <div data-aos="zoom-in-up" data-aos-duration="1000">
                <h2
                  className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                >
                  Features
                </h2>
                <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                Adyton Mykonos Luxury Suites & Pools is located in Ano Mera and offers accommodation with free Wi-Fi and free private parking for guests traveling by car. The property also features a seasonal outdoor swimming pool.

The units are air-conditioned and include a terrace, flat-screen TV, and a private bathroom with shower and complimentary toiletries. A refrigerator and mini bar are also available, along with a coffee machine and electric kettle.
                </p>
                
              </div>
              
              {/* Childreen & Extra Beds */}
              <div
                className="pt-10 2xl:pt-[60px]"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora mb-5 2xl:mb-[30px]">
                Guests can also relax in the garden area of the property.

The Kalo Livadi Beach is located 2 km from Adyton Mykonos Luxury Suites & Pools, while the Mykonos Windmills are 8.5 km away. Mykonos Airport is 5 km from the property.
                </p>
               
               
              </div>
            </div>
          </div>
          {/* sidebar */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            {/* suite features */}
            <div>
              <div className=" bg-whiteSmoke dark:bg-normalBlack px-7 py-8 md:px-8 md:py-10 lg:px-9 lg:py-11 2xl:px-10 2xl:pt-[45px] 2xl:pb-[30px] grid-flow-row-dense">
                <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-4">
                  Suite Features
                </h4>
                <div
                  className="grid items-center gap-[18px] "
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6 ">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      <FaRulerCombined className="inline mr-2 text-khaki" />
                      220 Square Meters
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      <FaDoorOpen className="inline mr-2 text-khaki" />
                      6 Rooms
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      <FaBed className="inline mr-2 text-khaki" />
                      6 Beds
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      <FaCalendarAlt className="inline mr-2 text-khaki" />
                      Since 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div
              className="mt-3 sm:mt-4 md:mt-5 lg:mt-6"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-6">
                Amenities
              </h4>
              <div className="grid items-center ">
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <MdPool className="text-khaki mr-2 md:mr-3 xl:mr-[15px]" size={18} />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Outdoor swimming pool
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <FaParking className="text-khaki mr-2 md:mr-3 xl:mr-[15px]" size={16} />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Free parking
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <FaSmokingBan className="text-khaki mr-2 md:mr-3 xl:mr-[15px]" size={16} />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Non-smoking rooms
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <FaWifi className="text-khaki mr-2 md:mr-3 xl:mr-[15px]" size={16} />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Free Wi-Fi
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <FaUsers className="text-khaki mr-2 md:mr-3 xl:mr-[15px]" size={16} />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Family rooms
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <FaCoffee className="text-khaki mr-2 md:mr-3 xl:mr-[15px]" size={16} />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Coffee/tea maker in all rooms
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <FaBath className="text-khaki mr-2 md:mr-3 xl:mr-[15px]" size={16} />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Private bathroom
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <FaSnowflake className="text-khaki mr-2 md:mr-3 xl:mr-[15px]" size={16} />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Air conditioning
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <LuTv className="text-khaki mr-2 md:mr-3 xl:mr-[15px]" size={16} />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Flat-screen TV
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
