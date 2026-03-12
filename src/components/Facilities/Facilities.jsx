import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useHayc } from "../../hayc/config-context";

const premiumServices = [
  {
    title: "Outdoor pool",
    description:
      "Enjoy refreshing open-air swimming in a relaxed private setting.",
  },
  {
    title: "Free parking",
    description:
      "Convenient on-site parking is included for all guests.",
  },
  {
    title: "Non-smoking rooms",
    description:
      "Clean and comfortable non-smoking spaces for a healthier stay.",
  },
  {
    title: "Free Wi-Fi",
    description:
      "High-speed internet access is available throughout the property.",
  },
  {
    title: "Family rooms",
    description:
      "Spacious room options designed for families and group comfort.",
  },
  {
    title: "Coffee/tea maker in all rooms",
    description:
      "Every room includes coffee and tea facilities for daily convenience.",
  },
];

const Facilities = () => {
  const { t, img, config } = useHayc();
  const f = config.facilitiesConfig;
  return (
    <div className="dark:bg-mediumBlack ">
      <section className="Container py-16 md:py-20 lg:py-[120px]">
        {/* section title and button */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between mb-12 px-3 sm:px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className=" md:w-[450px] font-Garamond">
            <h5 className="text-base text-khaki leading-[26px] font-medium mb-[14px]  ">
              {t(f.sectionLabel)}
            </h5>
            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold ">
              {t(f.title)}
            </h1>
          </div>
          <div className="mt-5 md:mt-0">
            <Link to="/adyton-suite">
              <button className="btn-items">{t(f.viewMoreBtn)}</button>
            </Link>
          </div>
        </div>
        {/* facilities container */}
        <div>
          {premiumServices.map((service, index) => {
            const itemNumber = String(index + 1).padStart(2, "0");
            const imageList = [
              f.image1,
              f.image2,
              f.image3,
              f.image4,
              f.image5,
              f.image6,
            ];
            const sectionImage = imageList[index % imageList.length];
            const imageFirst = index % 2 === 0;

            return (
              <div key={service.title}>
                <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
                <div
                  className="grid grid-cols-1 md:grid-cols-2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {imageFirst ? (
                    <>
                      <div className="relative w-full md:pr-[30px]">
                        <img
                          src={img(sectionImage)}
                          alt={service.title}
                          className="w-full aspect-[4/3] object-cover"
                        />
                        <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%] xl:-right-[5%]">
                          <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                            {itemNumber}
                          </h2>
                        </div>
                      </div>
                      <div className="relative font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 h-full">
                        <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                          Basic Amenity
                        </h4>
                        <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[34px] font-semibold text-lightBlack dark:text-white">
                          {service.title}
                        </h1>
                        <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                          {service.description}
                        </p>
                        <HiArrowLongRight size={30} className="text-gray" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="font-Garamond md:mr-[2px] lg:mr-[110px] h-full">
                        <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase">
                          Basic Amenity
                        </h4>
                        <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[34px] font-semibold text-lightBlack dark:text-white">
                          {service.title}
                        </h1>
                        <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                          {service.description}
                        </p>
                        <HiArrowLongRight className="text-gray" size={30} />
                      </div>
                      <div className="w-full md:pl-[30px] relative mt-5 md:mt-0">
                        <img
                          src={img(sectionImage)}
                          alt={service.title}
                          className="w-full aspect-[4/3] object-cover"
                        />
                        <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                          <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                            {itemNumber}
                          </h1>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Facilities;
