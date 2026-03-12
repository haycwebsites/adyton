import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Brand from "../../components/Brand/Brand";
import { BiEnvelope } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useHayc } from "../../hayc/config-context";

const Footer = () => {
  const { t, img, config } = useHayc();
  const f = config.footerConfig;
  const nav = config.navConfig;

  return (
    <>
      <footer className="lg:mt-[50px]">
        <div className="bg-lightBlack   ">
          <div className="Container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 2xl:grid-cols-12 gap-5 lg:gap-3 xl:gap-5 2xl:gap-[30px] pt-14 lg:pt-[100px] ">
            <div
              className="lg:mt-[-195px] lg:col-span-3 2xl:col-span-4 bg-[#272727]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className=" py-6 md:py-7 lg:py-[50px]  px-10 lg:px-5 xl:px-8 2xl:px-9 ">
                <img src={img(f.logo)} alt="" />
                <div className="py-8 2xl:py-[50px] ">
                  <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10">
                    {t(f.contactTitle)}
                  </h1>
                  <div className="space-y-4 pt-[30px]  pb-2 2xl:pb-[30px] ">
                    <a
                      href={`tel:${f.phone}`}
                      className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] mt-2 hover:text-khaki transition-all duration-300"
                    >
                      <IoIosCall
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      {f.phone}
                    </a>
                    <a
                      href={`mailto:${f.email}`}
                      className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] hover:text-khaki transition-all duration-300"
                    >
                      <BiEnvelope
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      {f.email}
                    </a>
                    <Link
                      to="/contact#contact-map"
                      className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] hover:text-khaki transition-all duration-300"
                    >
                      <IoLocationSharp
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      {t(f.address)}
                    </Link>
                  </div>
                </div>
                <div>
                  <ul className="flex space-x-3">
                    <li className="hover-animBg group transition-all duration-300  rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <Link
                        to="https://www.instagram.com/adyton_mykonos?igsh=MTI1eGR4bGE3ZnVyaQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4 " />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="pt-0 pb-8 overflow-x-hidden lg:col-span-2 2xl:col-span-2 ml-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className=" text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase ">
                {t(f.linksTitle)}
              </h1>
              <div className="pt-[30px] pb-0 lg:py-[30px]">
                <ul
                  className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc
                 "
                >
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="/">{t(nav.home)}</Link>
                  </li>
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="/adyton-suite">{t(nav.adytonSuite)}</Link>
                  </li>
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="/room">{t(nav.rooms)}</Link>
                  </li>
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="/blog">{t(nav.blog)}</Link>
                  </li>
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="/contact">{t(nav.contact)}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="pt-0 pb-8  lg:col-span-3 2xl:col-span-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase ">
                {t(f.galleryTitle)}
              </h1>
              <div className="grid grid-cols-3 gap-2 mt-[45px] w-full max-w-[300px] lg:max-w-none content-center">
                {f.galleryImages.map((src, i) => (
                  <div key={i} className="w-full aspect-square overflow-hidden">
                    <img
                      src={img(src)}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="pt-0 pb-8 overflow-x-hidden lg:col-span-2 2xl:col-span-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase ">
                {t(f.newsletterTitle)}
              </h1>
              <div className="space-y-4 py-[30px]">
                <p className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                  {t(f.newsletterDesc)}
                </p>
                <form action="" className="space-y-4">
                  <input
                    type="email"
                    placeholder={t(f.emailPlaceholder)}
                    className="placeholder:text-gray placeholder:font-Lora placeholder:font-normal placeholder:text-[15px] text-center h-[56px] w-full px-10 placeholder:leading-[26px] text-[15px] text-gray border-none outline-none focus:outline-none focus:border-khaki focus:ring-0"
                    required
                  />
                  <button className="btn-subscribe">{t(f.subscribeBtn)}</button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center py-5 2xl:py-7 bg-[#161616] text-sm md:text-base text-lightGray font-Lora font-normal">
            <p>Copyright © 2026 All Right Reserved.</p>
            <p>Made by hayc with 💙</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
