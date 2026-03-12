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
  const { config } = useHayc();
  const siteId = config.siteConfig.siteId;
  const apiUrl = config.siteConfig.apiUrl;

  const phone = "+306934929203";
  const email = "development@hayc.gr";
  const address = "Eparchiaki Odos Mykonou-Ano Merias, Ano Mera, 84600, Greece";

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
    if (!name.trim()) errors.name = "Name is required.";
    if (!EMAIL_PATTERN.test(formEmail.trim())) errors.email = "Please enter a valid email.";
    if (!message.trim()) errors.message = "Message is required.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [name, formEmail, message]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError(null);
      if (!validate()) return;

      if (!apiUrl || !siteId) {
        setError("Something went wrong. Please try again.");
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
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [apiUrl, siteId, name, formEmail, service, message, hp, validate]
  );

  useEffect(() => {
    if (location.hash === "#contact-map") {
      const mapSection = document.getElementById("contact-map");
      mapSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <div>
      <BreadCrumb title="Contact " />

      {/* Contact */}
      {/* Contact with Us */}
      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container bg-whiteSmoke dark:bg-normalBlack px-7 md:px-10 lg:px-14 2xl:px-20 py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-[100px] ">
          <div className="flex items-center flex-col md:flex-row">
            <div
              className="py-5 sm:p-5 flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <p className="text-Garamond text-base leading-[26px] text-khaki font-medium">
                CONTACT US
              </p>
              <h2 className="text-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-uppercase text-lightBlack dark:text-white font-semibold my-3 md:my-5">
                CONTACT WITH US
              </h2>
              <p className="text-Lora text-sm sm:text-base leading-[26px]  text-gray dark:text-lightGray font-normal">
                Reach out to ADYTON Mykonos for private long-stay inquiries,
                availability details, and tailored support for your luxury stay
                in Greece.
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
                  <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    Call Us Now
                  </p>
                  <a
                    href={`tel:${phone}`}
                    className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium hover:text-khaki transition-all duration-300"
                  >
                    {phone}
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
                  <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    Send Email
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium hover:text-khaki transition-all duration-300"
                  >
                    {email}
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
                  <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    Our Locations
                  </p>
                  <a
                    href="#contact-map"
                    className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium hover:text-khaki transition-all duration-300 break-words"
                  >
                    {address}
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
                <h2 className="font-Garamond text-[22px] sm:text-2xl md:text-[28px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-white font-semibold text-center">
                  GET IN TOUCH
                </h2>

                {submitted ? (
                  <div className="text-center mt-8 space-y-4">
                    <h3 className="text-xl font-semibold text-khaki">Message sent!</h3>
                    <p className="text-lightGray">We will get back to you shortly.</p>
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
                        placeholder="Your Name"
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
                        placeholder="Enter E-mail"
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
                          Select Service
                        </option>
                        <option value="private-security">Private security</option>
                        <option value="chauffeur-driver">Chauffeur / Driver</option>
                        <option value="private-chef">Private chef</option>
                        <option value="hair-beauty-services">Hair & beauty services</option>
                        <option value="vip-concierge-services">VIP concierge services</option>
                        <option value="personalized-security-escort">
                          Personalized security escort
                        </option>
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
                        placeholder="Write Message:"
                      ></textarea>
                      {fieldErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-khaki text-white text-center h-10 2xl:h-[55px] mt-5 hover:bg-khaki/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "SENDING..." : "SEND MESSAGE"}
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
          src="https://www.google.com/maps?q=Mykonos%20Greece&output=embed"
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
