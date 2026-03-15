import {
  FaBath,
  FaBed,
  FaCoffee,
  FaParking,
  FaSmokingBan,
  FaSnowflake,
  FaUsers,
  FaWifi,
} from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { LuTv } from "react-icons/lu";

const amenities = [
  { icon: MdPool, label: "6 Private Swimming Pools" },
  { icon: FaParking, label: "Free Parking" },
  { icon: FaSmokingBan, label: "Non-Smoking Luxury Suites" },
  { icon: FaWifi, label: "Free Wi-Fi" },
  { icon: FaUsers, label: "Family Luxury Suites" },
  { icon: FaCoffee, label: "Coffee/Tea Maker" },
  { icon: FaBath, label: "Private Bathroom" },
  { icon: FaSnowflake, label: "Air Conditioning" },
  { icon: LuTv, label: "Flat-Screen TV" },
  { icon: FaBed, label: "Comfort Bedding" },
];

const HotelAndFacilities = () => {
  return (
    <section className="bg-white z-[1]">
      <div className="relative overflow-hidden py-[110px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/images/inner/AdytonLogo.png')] bg-no-repeat bg-top bg-[length:240px] opacity-[0.04]"
        />
        <div className="Container relative z-10">
          <div
            className=" text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5">
              <hr className="w-[100px] h-[1px] bg-gray-300 " />
              <img
                src="/images/inner/AdytonLogo.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-gray-300 " />
            </div>
            <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] 2xl:leading-[52px] text-lightBlack mb-[6px] font-Garamond font-semibold uppercase">
              ADYTON LUXURY AMENITIES
            </h1>
            <p className="font-Lora leading-[26px] text-gray font-normal text-sm sm:text-base">
              Discover premium facilities designed for extended luxury stays in
              Mykonos, with comfort, privacy and concierge-level support at
              every step.
            </p>
          </div>
          {/* HOTEL’S FACILITIES content */}
          <div
            className="grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-6 gap-4 xl:gap-[26px] pt-[60px] pb-[110px] px-8 lg:px-10 xl:px-28 2xl:px-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={`${amenity.label}-${index}`}
                  className="h-[200px] w-[191px] pt-[37px] pb-[27px] border border-gray-200 bg-white text-center transition-all duration-300 hover:bg-gray-50 group"
                >
                  <div>
                    <Icon className="mx-auto text-khaki" size={34} />
                  </div>
                  <div className="">
                    <h4 className="text-[20px] leading-6 font-Garamond text-lightBlack font-medium mt-[36px] px-3 relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-[#d1d5db] before:group-hover:bg-khaki">
                      {amenity.label}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm sm:text-base text-khaki font-semibold mb-2">Immediately available</p>
          <div
            className="flex flex-wrap items-center justify-center gap-3 mt-2 pb-12"
            data-aos="fade-up"
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
        </div>
      </div>
    </section>
  );
};

export default HotelAndFacilities;
