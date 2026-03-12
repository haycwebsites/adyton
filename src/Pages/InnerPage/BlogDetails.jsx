import { Link, useLocation, useNavigate } from "react-router-dom";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import BlogSideBar from "./BlogSideBar";
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
      <BreadCrumb
        title="Blog Details"
        bgImage="/images/LuxurySuites/697090361.jpg"
      />
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
                    src="/images/LuxurySuites/590794402.jpg"
                    alt=""
                    className="w-full h-[220px] md:h-[260px] lg:h-[300px] object-cover"
                  />
                  <img
                    src="/images/LuxurySuites/590796492.jpg"
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
                    to="https://www.instagram.com/adyton_mykonos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 dark:text-white hover:text-khaki hover:underline underline-offset-4"
                  >
                    Instagram
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
