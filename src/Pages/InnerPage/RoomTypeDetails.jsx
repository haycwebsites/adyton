import { useParams } from "react-router-dom";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { useHayc } from "../../hayc/config-context";
import { roomTypesConfig } from "../../config";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight, BsCheck2 } from "react-icons/bs";

const RoomTypeDetails = () => {
  const { roomId } = useParams();
  const { img, t, config } = useHayc();
  const bc = config.breadCrumbConfig;

  const room = roomTypesConfig.find((r) => r.id === roomId) ?? roomTypesConfig[0];

  const [imageIndex, setImageIndex] = useState(0);

  const prevBtn = () => {
    setImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const nextBtn = () => {
    setImageIndex((prev) => (prev + 1) % room.images.length);
  };

  return (
    <section className="">
      <BreadCrumb title={t(room.title)} image={img(bc.roomsImage)} />

      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
          {/* Left: gallery + main content */}
          <div className="col-span-6 md:col-span-4">
            <div
              className="overflow-hidden relative group "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src={img(room.images[imageIndex])}
                alt={t(room.title)}
                className="w-full h-auto object-cover transition-all duration-500 delay-300"
              />
              {/* Slider controls */}
              <div className="flex ">
                <span
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] left-[-50px] group-hover:left-4 lg:group-hover:left-6 transition-all duration-300 cursor-pointer"
                  onClick={prevBtn}
                >
                  <BsArrowLeft
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
                <span
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] right-[-50px] group-hover:right-4 lg:group-hover:right-6 transition-all duration-300 cursor-pointer"
                  onClick={nextBtn}
                >
                  <BsArrowRight
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
              </div>

              {/* Slide index indicator */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full font-Lora tracking-wide">
                {imageIndex + 1} / {room.images.length}
              </div>
            </div>

            <div className="pt-5 lg:pt-[35px]  pr-3">
              <p className="text-base font-Lora text-khaki">{room.size}</p>
              <h2
                className="py-2 sm:py-3 md:py-4 lg:py-[19px] 2xl:py-[25px] font-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[32px] 3xl:text-[36px] leading-6 lg:leading-[26px]  text-lightBlack dark:text-white font-semibold"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                {t(room.title)}
              </h2>
              <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                {room.bedSummary}
              </p>

              <p className="mt-5 2xl:mt-7 text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                {t(room.description)}
              </p>

              {/* Whole-house booking CTA */}
              <div
                className="mt-6 2xl:mt-8"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <p className="text-sm sm:text-base text-khaki font-semibold mb-2">
                  Book the whole house
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3 mb-6">
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

              {/* Bathroom / Views / Amenities */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                <div>
                  <h3 className="text-lg font-Garamond font-semibold text-lightBlack dark:text-white mb-3">
                    In your private bathroom
                  </h3>
                  <ul className="space-y-2">
                    {room.bathroomAmenities.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray dark:text-lightGray font-Lora">
                        <BsCheck2 size={16} className="text-khaki mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-Garamond font-semibold text-lightBlack dark:text-white mb-3">
                    Views
                  </h3>
                  <ul className="space-y-2">
                    {room.viewAmenities.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray dark:text-lightGray font-Lora">
                        <BsCheck2 size={16} className="text-khaki mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-Garamond font-semibold text-lightBlack dark:text-white mb-3">
                    Amenities
                  </h3>
                  <ul className="space-y-2">
                    {room.roomAmenities.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray dark:text-lightGray font-Lora">
                        <BsCheck2 size={16} className="text-khaki mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-8 text-sm lg:text-base text-gray dark:text-lightGray font-Lora">
                <span className="font-semibold text-lightBlack dark:text-white">Smoking policy: </span>
                {room.smokingPolicy}
              </p>
            </div>
          </div>

          {/* Right sidebar: room features & quick amenities, similar to /adyton-suite */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            {/* room features */}
            <div>
              <div className=" bg-whiteSmoke dark:bg-normalBlack px-7 py-8 md:px-8 md:py-10 lg:px-9 lg:py-11 2xl:px-10 2xl:pt-[45px] 2xl:pb-[30px] grid-flow-row-dense">
                <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-4">
                  Room features
                </h4>
                <div
                  className="grid items-center gap-[18px] "
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div className="bg-white dark:bg-lightBlack h-auto min-h-[50px] 2xl:min-h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6 py-3">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      <span className="text-khaki font-semibold mr-1">Size:</span>
                      {room.size}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-auto min-h-[50px] 2xl:min-h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6 py-3">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      <span className="text-khaki font-semibold mr-1">Beds:</span>
                      {room.bedSummary}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-auto min-h-[50px] 2xl:min-h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6 py-3">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      <span className="text-khaki font-semibold mr-1">Smoking policy:</span>
                      {room.smokingPolicy}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick amenities summary */}
            <div
              className="mt-3 sm:mt-4 md:mt-5 lg:mt-6"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-6">
                Highlights
              </h4>
              <div className="grid items-center ">
                {room.viewAmenities.slice(0, 2).map((item) => (
                  <div
                    key={item}
                    className="flex items-center py-4 border-b-[1px] border-lightGray dark:border-gray"
                  >
                    <BsCheck2 className="text-khaki mr-2 md:mr-3 xl:mr-[15px]" size={18} />
                    <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                      {item}
                    </span>
                  </div>
                ))}
                {room.roomAmenities.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="flex items-center py-4 border-b-[1px] border-lightGray dark:border-gray"
                  >
                    <BsCheck2 className="text-khaki mr-2 md:mr-3 xl:mr-[15px]" size={18} />
                    <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomTypeDetails;

