import Facilities from "../../components/Facilities/Facilities";
import HeroSection from "../../components/HeroSection/HeroSection";
import HotelAndFacilities from "../../components/HotelAndFacilities/HotelAndFacilities";
import HotelAndResort from "../../components/HotelAndResort/HotelAndResort";
import LatestBlog from "../../components/LatestBlog/LatestBlog";
import Offers from "../../components/Offers/Offers";
import Rooms from "../../components/Rooms/Rooms";
import AnimatedAccordionPage from "../InnerPage/Accordion/AnimatedAccordionPage";

const Home1 = () => {
  return (
    <>
      <HeroSection />
      <Rooms />
      <HotelAndResort />
      <HotelAndFacilities />
      <Facilities />
      <Offers />
      <LatestBlog />
      <div className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px]">
        <div className="Container">
          <div
            className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5 Container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
              <img
                src="/images/inner/AdytonLogo.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[10px] mb-[14px] font-Garamond font-semibold uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </div>
          <div className="mt-14 2xl:mt-[60px]">
            <AnimatedAccordionPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1;
