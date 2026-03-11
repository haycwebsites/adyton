import { Link, useLocation, useNavigate } from "react-router-dom";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import BlogSideBar from "./BlogSideBar";
import { BiChevronsRight } from "react-icons/bi";
import { blogPosts } from "../../data/blogPosts";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog || blogPosts[0];

  if (!blog) {
    navigate("/blog");
    return null;
  }

  const { title, date, category, image, content } = blog;

  return (
    <div>
      <BreadCrumb title="Blog Details" />
      {/* Blog Details */}
      <div className="dark:bg-lightBlack py-20 2xl:py-[120px]">
        <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
          <div className="col-span-6 md:col-span-4">
            <img
              src={image}
              alt={title}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full h-[260px] md:h-[360px] lg:h-[430px] object-cover"
            />
            {/* Blog Details content */}
            <div className="pt-5 lg:pt-[35px]  pr-3">
              <div data-aos="fade-up" data-aos-duration="1000">
                <p className="text-base font-Garamond text-gray dark:text-lightGray">
                  <span>{date}</span> <span className="mx-2">/</span>
                  <span> {category.toUpperCase()}</span>
                </p>
                <h2 className="py-2 sm:py-3 md:py-4 lg:py-[19px] 2xl:py-[25px] font-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] 3xl:text-[40px] leading-6 lg:leading-[26px]  text-lightBlack dark:text-white font-semibold">
                  {title}
                </h2>
                <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                  {content.intro}
                </p>
              </div>

              {/* Section 1 */}
              {content.section1 && (
                <div
                  className="pt-10 2xl:pt-[60px]"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h2
                    className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-lg sm:text-xl md:text-2xl xl:text-[28px] leading-6 lg:leading-7 text-lightBlack dark:text-white font-semibold"
                  >
                    {content.section1.heading}
                  </h2>
                  <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                    {content.section1.body}
                  </p>
                </div>
              )}

              {/* Section 2 */}
              {content.section2 && (
                <div
                  className="pt-10 2xl:pt-[60px]"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h2
                    className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-lg sm:text-xl md:text-2xl xl:text-[28px] leading-6 lg:leading-7 text-lightBlack dark:text-white font-semibold"
                  >
                    {content.section2.heading}
                  </h2>
                  <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                    {content.section2.body}
                  </p>
                </div>
              )}

              {/* Extra images for visual break */}
              <div
                className="pt-10 2xl:pt-[60px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6 grid items-center grid-cols-1 sm:grid-cols-2 gap-5 2xl:gap-[30px]">
                  <img
                    src="/images/inner/blog-details-2.jpg"
                    alt=""
                    className="w-full h-[220px] md:h-[260px] lg:h-[300px] object-cover"
                  />
                  <img
                    src="/images/inner/blog-details-3.jpg"
                    alt=""
                    className="w-full h-[220px] md:h-[260px] lg:h-[300px] object-cover"
                  />
                </div>
              </div>

              <div
                className="my-10 py-5 border-t-[1px] border-b-[1px] border-lightGray dark:border-gray lg:flex items-center justify-between"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {/* social Link */}
                <div className="flex items-center space-x-2 mt-3 lg:mt-0">
                  <h5 className="text-lg text-[#101010] dark:text-white leading-[28px] font-semibold font-Garamond mr-2">
                    Share :
                  </h5>
                  <Link
                    to="#"
                    className="text-sm  px-3 py-1 dark:text-white hover:text-khaki hover:underline underline-offset-4"
                  >
                    FB
                  </Link>
                  <Link
                    to="#"
                    className="text-sm  px-3 py-1 dark:text-white hover:text-khaki hover:underline underline-offset-4"
                  >
                    TW
                  </Link>
                  <Link
                    to="#"
                    className="text-sm  px-3 py-1 dark:text-white hover:text-khaki hover:underline underline-offset-4"
                  >
                    LN
                  </Link>
                  <Link
                    to="https://www.instagram.com/adyton_mykonos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 dark:text-white hover:text-khaki hover:underline underline-offset-4"
                  >
                    IG
                  </Link>
                </div>
              </div>

              {/* Related posts */}
              <div className="lg:flex items-center gap-5  ">
                {blogPosts
                  .filter((p) => p.id !== blog.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <div
                      key={relatedPost.id}
                      className="mt-5 lg:mt-0 p-5 hover:bg-whiteSmoke dark:hover:bg-normalBlack transition-all duration-300 border-[0.5px] border-lightGray dark:border-gray rounded-sm hover:border-whiteSmoke"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <Link
                        to="/blog_details"
                        state={{ blog: relatedPost }}
                        className="flex items-center"
                      >
                        <img
                          src={relatedPost.image}
                          className="mr-3 2xl:mr-5 w-24 h-24 object-cover"
                          alt={relatedPost.title}
                        />
                        <div className="text-left">
                          <h4 className="text-base 2xl:text-lg leading-6 text-[#101010] dark:text-white font-medium font-Garamond hover:underline underline-offset-4">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm md:text-[13px] 2xl:text-sm leading-[26px] font-Lora text-gray dark:text-lightGray font-normal">
                            {relatedPost.date}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
              {/* Comment Section */}
              <div className="my-10 2xl:my-[60px] 3xl:my-[80px]">
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px] text-lightBlack dark:text-white font-semibold font-Garamond mb-5 2xl:mb-[30px]">
                  ‘2’ Comments
                </h3>
                <div>
                  <div
                    className="border-[1px] border-lightGray dark:border-gray rounded-sm p-4 sm:p-5 md:p-6 2xl:p-[30px]"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="grid gap-3 sm:flex md:grid md:gap-5 lg:flex ">
                      <img
                        src="/images/inner/blog-details-author-2.png"
                        alt=""
                        className="w-[70px]  h-[70px] "
                      />

                      <div className="ml-3 2xl:ml-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-base sm:text-lg lg:text-xl font-Garamond font-semibold leading-6 md:leading-7 text-lightBlack dark:text-white">
                              Moris Barbar
                            </span>
                            <hr className="w-[10px] sm:w-[27px] h-[1px] text-lightBlack dark:text-white mx-1 sm:mx-2 " />
                            <span className="text-[13px] sm:text-[15px] font-Lora font-normal text-gray dark:text-lightGray">
                              August 10, 2023
                            </span>
                          </div>
                          <span className="text-[13px] sm:text-[15px] font-Lora font-normal text-gray dark:text-lightGray cursor-pointer">
                            REPLY
                          </span>
                        </div>
                        <p className="text-sm sm:text-[15px] font-Lora font-normal text-gray dark:text-lightGray mt-3 xl:mt-[15px]">
                          Interactively visualize top-line internal or "organic"
                          sources rather than top-line niche mark unleash 24/7
                          opportunities after high standards in process
                          improvements. Uniquely deploy methodologies with
                          reliable information.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* comment -2 */}
                  <div
                    className="border-[1px] border-lightGray dark:border-gray rounded-sm p-4 sm:p-5 md:p-6 2xl:p-[30px] ml-0 lg:ml-10 3xl:ml-14  mt-5"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="grid gap-3 sm:flex md:grid md:gap-5 lg:flex ">
                      <img
                        src="/images/inner/blog-details-author-1.png"
                        alt=""
                        className="w-[70px]  h-[70px] "
                      />

                      <div className="ml-3 2xl:ml-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-base sm:text-lg lg:text-xl font-Garamond font-semibold leading-6 md:leading-7 text-lightBlack dark:text-white">
                              Moris Barbar
                            </span>
                            <hr className="w-[10px] sm:w-[27px] h-[1px] text-lightBlack dark:text-white mx-1 sm:mx-2 " />
                            <span className="text-[13px] sm:text-[15px] font-Lora font-normal text-gray dark:text-lightGray">
                              August 10, 2023
                            </span>
                          </div>
                          <span className="text-[13px] sm:text-[15px] font-Lora font-normal text-gray dark:text-lightGray cursor-pointer">
                            REPLY
                          </span>
                        </div>
                        <p className="text-sm sm:text-[15px] font-Lora font-normal text-gray dark:text-lightGray mt-3 xl:mt-[15px]">
                          Interactively visualize top-line internal or "organic"
                          sources rather than top-line niche mark unleash 24/7
                          opportunities after high standards in process
                          improvements. Uniquely deploy methodologies with
                          reliable information.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Comment form */}
              <div data-aos="fade-up" data-aos-duration="1000">
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px] text-lightBlack dark:text-white font-semibold font-Garamond mb-5 2xl:mb-[30px]">
                  Leave A Comments
                </h3>
                <div>
                  <div className="flex sm:flex-row flex-col items-center  gap-5 mb-5">
                    <input
                      type="text"
                      name=""
                      className="w-full h-[50px] border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 dark:bg-normalBlack bg-whiteSmoke dark:text-white"
                      placeholder="Your Name"
                      id=""
                    />
                    <input
                      type="email"
                      name=""
                      className="w-full h-[50px] border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 dark:bg-normalBlack bg-whiteSmoke dark:text-white"
                      placeholder="Email Address"
                      id=""
                    />
                  </div>
                  <div className="grid items-center gap-5 mb-5 md:mb-0">
                    <input
                      type="text"
                      name=""
                      className="w-full h-[50px] border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 dark:bg-normalBlack bg-whiteSmoke dark:text-white"
                      placeholder="Your Website"
                      id=""
                    />

                    <textarea
                      className="w-full h-[160px]  border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 dark:bg-normalBlack bg-whiteSmoke dark:text-white resize-none"
                      placeholder="Type Your Comment"
                      name=""
                      id=""
                      cols="30"
                    ></textarea>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="border-khaki text-khaki focus:ring-0 focus:outline-none focus:border-none"
                      />
                      <p className="text-[13px] sm:text-[15px] font-Lora font-normal text-gray dark:text-lightGray ml-2">
                        Save your email info in the browser for next comments.
                      </p>
                    </div>
                    <button className="btn-primary">Submit Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Sidebar */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            {/* imported Blog Sidebar */}
            <BlogSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
