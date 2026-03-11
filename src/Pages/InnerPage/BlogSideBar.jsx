import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
const BlogSideBar = () => {
  return (
    <>
      {/* Categories */}
      <div className="bg-whiteSmoke dark:bg-normalBlack w-full p-4 sm:p-8 2xl:p-10 rounded-md ">
        <h2 className="text-lg sm:text-xl md:text-[22px] lg:text-2xl leading-6 md:leading-7 lg:leading-[30px] text-lightBlack dark:text-white relative before:w-[50px] before:h-[1px] before:bg-lightBlack dark:before:bg-white before:absolute before:left-0 before:top-9 font-Garamond font-semibold">
          Categories
        </h2>
        <div className="pt-10">
          <ul className=" " data-aos="fade-up" data-aos-duration="1000">
            <li className="flex items-center group transition-all duration-300 border-b-[1px] cursor-pointer border-lightGray dark:border-gray pb-3 ">
              <BiChevronsRight
                size={16}
                className="text-lightBlack dark:text-white group-hover:text-khaki mr-2"
              />
              <span className="text-sm xl:text-base 2xl:text-lg leading-[26px] text-lightBlack group-hover:text-khaki font-medium font-Garamond dark:text-white">
                Luxury Hotels
              </span>
            </li>
            <li className="flex items-center group transition-all duration-300 border-b-[1px] cursor-pointer border-lightGray dark:border-gray py-3">
              <BiChevronsRight
                size={16}
                className="text-lightBlack dark:text-white group-hover:text-khaki mr-2"
              />
              <span className="text-sm xl:text-base 2xl:text-lg leading-[26px] text-lightBlack group-hover:text-khaki font-medium font-Garamond dark:text-white">
                Restaurants
              </span>
            </li>
            <li className="flex items-center group transition-all duration-300 border-b-[1px] cursor-pointer border-lightGray dark:border-gray py-3">
              <BiChevronsRight
                size={16}
                className="text-lightBlack dark:text-white group-hover:text-khaki mr-2"
              />
              <span className="text-sm xl:text-base 2xl:text-lg leading-[26px] text-lightBlack group-hover:text-khaki font-medium font-Garamond dark:text-white">
                SPA Center
              </span>
            </li>
            <li className="flex items-center group transition-all duration-300 border-b-[1px] cursor-pointer border-lightGray dark:border-gray py-3">
              <BiChevronsRight
                size={16}
                className="text-lightBlack dark:text-white group-hover:text-khaki mr-2"
              />
              <span className="text-sm xl:text-base 2xl:text-lg leading-[26px] text-lightBlack group-hover:text-khaki font-medium font-Garamond dark:text-white">
                Health Club
              </span>
            </li>
            <li className="flex items-center group transition-all duration-300 border-b-[1px] cursor-pointer border-lightGray dark:border-gray py-3">
              <BiChevronsRight
                size={16}
                className="text-lightBlack dark:text-white group-hover:text-khaki mr-2"
              />
              <span className="text-sm xl:text-base 2xl:text-lg leading-[26px] text-lightBlack group-hover:text-khaki font-medium font-Garamond dark:text-white">
                Industrial
              </span>
            </li>
            <li className="flex items-center group transition-all duration-300 cursor-pointer pt-3">
              <BiChevronsRight
                size={16}
                className="text-lightBlack dark:text-white group-hover:text-khaki mr-2"
              />
              <span className="text-sm xl:text-base 2xl:text-lg leading-[26px] text-lightBlack group-hover:text-khaki font-medium font-Garamond dark:text-white">
                Uncategories
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Popular Post */}
      <div className="bg-whiteSmoke dark:bg-normalBlack w-full p-4 sm:p-8 2xl:p-10 mt-5 2xl:mt-[30px] rounded-md ">
        <h2 className="text-lg sm:text-xl md:text-[22px] lg:text-2xl leading-6 md:leading-7 lg:leading-[30px] text-lightBlack dark:text-white relative before:w-[50px] before:h-[1px] before:bg-lightBlack dark:before:bg-white before:absolute before:left-0 before:top-9 font-Garamond font-semibold">
          Popular Post
        </h2>
        <div className="pt-10">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Link
              key={post.id}
              to="/blog_details"
              state={{ blog: post }}
              className={`${index > 0 ? "mt-5 md:mt-[30px]" : ""} flex items-center`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={post.image}
                className="mr-3 2xl:mr-5 w-[90px] h-[90px] object-cover rounded-sm"
                alt={post.title}
              />
              <div className="text-left">
                <h4 className="text-base 2xl:text-lg leading-6 text-[#101010] dark:text-white font-medium font-Garamond hover:underline underline-offset-4">
                  {post.title}
                </h4>
                <p className="text-sm md:text-[13px] 2xl:text-sm leading-[26px] font-Lora text-gray dark:text-lightGray font-normal">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSideBar;
