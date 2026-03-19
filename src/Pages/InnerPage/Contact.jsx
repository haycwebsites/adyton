import { MdEmail, MdOutlineShareLocation } from "react-icons/md";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { IoIosCall } from "react-icons/io";
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useHayc } from "../../hayc/config-context";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const location = useLocation();
  const { t, img, config, cp } = useHayc();
  const c = config.contactConfig;
  const siteId = config.siteConfig.siteId;
  const apiUrl = config.siteConfig.apiUrl;

  // Form state
  const [name, setName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = useCallback(() => {
    const errors = {};
    if (!name.trim()) errors.name = t(c.nameRequired);
    if (!EMAIL_PATTERN.test(formEmail.trim())) errors.email = t(c.emailInvalid);
    if (!message.trim()) errors.message = t(c.messageRequired);
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [name, formEmail, message, t, c]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError(null);
      if (!validate()) return;

      if (!apiUrl || !siteId) {
        setError(t(c.errorMessage));
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`${apiUrl}/public/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            siteId,
            name: name.trim(),
            email: formEmail.trim(),
            service: service,
            message: message.trim(),
            _hp: hp,
          }),
        });
        if (!res.ok) throw new Error("Request failed");
        setSubmitted(true);
      } catch {
        setError(t(c.errorMessage));
      } finally {
        setLoading(false);
      }
    },
    [apiUrl, siteId, name, formEmail, service, message, hp, validate, t, c]
  );

  useEffect(() => {
    if (location.hash === "#contact-map") {
      const mapSection = document.getElementById("contact-map");
      mapSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <div>
      <BreadCrumb title={t(c.breadcrumbTitle)} image={img(c.breadcrumbImage)} />

      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container bg-whiteSmoke dark:bg-normalBlack px-7 md:px-10 lg:px-14 2xl:px-20 py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-[100px] ">
          <div className="flex items-center flex-col md:flex-row">
            <div
              className="py-5 sm:p-5 flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <p {...cp('contactConfig.sectionLabel')} className="text-Garamond text-base leading-[26px] text-khaki font-medium">
                {t(c.sectionLabel)}
              </p>
              <h2 {...cp('contactConfig.sectionTitle')} className="text-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-uppercase text-lightBlack dark:text-white font-semibold my-3 md:my-5">
                {t(c.sectionTitle)}
              </h2>
              <p {...cp('contactConfig.sectionDesc')} className="text-Lora text-sm sm:text-base leading-[26px]  text-gray dark:text-lightGray font-normal">
                {t(c.sectionDesc)}
              </p>

              {/* call */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <IoIosCall
                    size={22}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4 min-w-0">
                  <p {...cp('contactConfig.callLabel')} className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    {t(c.callLabel)}
                  </p>
                  <a
                    href={`tel:${c.phone}`}
                    className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium hover:text-khaki transition-all duration-300"
                  >
                    {c.phone}
                  </a>
                </div>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* email */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <MdEmail
                    size={22}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p {...cp('contactConfig.emailLabel')} className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    {t(c.emailLabel)}
                  </p>
                  <a
                    href={`mailto:${c.email}`}
                    className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium hover:text-khaki transition-all duration-300"
                  >
                    {c.email}
                  </a>
                </div>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* location */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <MdOutlineShareLocation
                    size={22}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p {...cp('contactConfig.locationLabel')} className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    {t(c.locationLabel)}
                  </p>
                  <a
                    href="#contact-map"
                    {...cp('contactConfig.address')}
                    className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium hover:text-khaki transition-all duration-300 break-words"
                  >
                    {t(c.address)}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="flex-1 py-5 sm:p-5"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="bg-lightBlack p-[30px] lg:p-[45px] 2xl:p-[61px]">
                <h2 {...cp('contactConfig.formTitle')} className="font-Garamond text-[22px] sm:text-2xl md:text-[28px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-white font-semibold text-center">
                  {t(c.formTitle)}
                </h2>

                {submitted ? (
                  <div className="text-center mt-8 space-y-4">
                    <h3 {...cp('contactConfig.successTitle')} className="text-xl font-semibold text-khaki">{t(c.successTitle)}</h3>
                    <p {...cp('contactConfig.successMessage')} className="text-lightGray">{t(c.successMessage)}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid items-center grid-cols-1 gap-2 mt-8">
                    {/* Honeypot field for spam protection */}
                    <input
                      type="text"
                      name="_hp"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                      autoComplete="off"
                      tabIndex={-1}
                      style={{ display: "none" }}
                      aria-hidden
                    />

                    <div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        disabled={loading}
                        className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0 placeholder:text-gray focus:border-gray dark:focus:border-lightGray focus:outline-none disabled:opacity-50"
                        placeholder={t(c.namePlaceholder)}
                      />
                      {fieldErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        value={formEmail}
                        onChange={(e) => {
                          setFormEmail(e.target.value);
                          if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        disabled={loading}
                        className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0 placeholder:text-gray focus:border-gray dark:focus:border-lightGray focus:outline-none disabled:opacity-50"
                        placeholder={t(c.emailPlaceholder)}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div className="relative mt-4">
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        disabled={loading}
                        className="w-full h-12 md:h-13 lg:h-[59px] px-4 pr-10 border-2 border-khaki/70 dark:border-khaki text-lightBlack dark:text-white outline-none bg-white dark:bg-lightBlack focus:ring-0 focus:border-khaki focus:outline-none appearance-none disabled:opacity-50"
                      >
                        <option value="" disabled>
                          {t(c.serviceSelect)}
                        </option>
                        <option value="private-security">{t(c.servicePrivateSecurity)}</option>
                        <option value="chauffeur-driver">{t(c.serviceChauffeur)}</option>
                        <option value="private-chef">{t(c.servicePrivateChef)}</option>
                        <option value="hair-beauty-services">{t(c.serviceHairBeauty)}</option>
                        <option value="vip-concierge-services">{t(c.serviceVipConcierge)}</option>
                        <option value="personalized-security-escort">
                          {t(c.serviceSecurityEscort)}
                        </option>
                        <option value="other">{t(c.serviceOther)}</option>
                      </select>
                      <BiChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-khaki pointer-events-none"
                        size={22}
                      />
                    </div>

                    <div>
                      <textarea
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (fieldErrors.message) setFieldErrors((prev) => ({ ...prev, message: undefined }));
                        }}
                        disabled={loading}
                        cols="30"
                        rows="10"
                        className="w-full h-[121px] px-4 py-3 border border-gray dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0 placeholder:text-gray resize-none focus:border-gray dark:focus:border-lightGray focus:outline-none disabled:opacity-50"
                        placeholder={t(c.messagePlaceholder)}
                      ></textarea>
                      {fieldErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      {...cp('contactConfig.submitButton')}
                      className="w-full bg-khaki text-white text-center h-10 2xl:h-[55px] mt-5 hover:bg-khaki/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? t(c.submittingButton) : t(c.submitButton)}
                    </button>

                    {error && (
                      <p className="text-red-500 text-sm mt-2 text-center" role="alert">
                        {error}
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* google map */}
      <div id="contact-map" data-aos="fade-down" data-aos-duration="1000">
        <iframe
          src={c.mapUrl}
          height={450}
          allowFullScreen=""
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
