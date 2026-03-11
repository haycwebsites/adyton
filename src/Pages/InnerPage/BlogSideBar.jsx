import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
const BlogSideBar = () => {
  return (
    <>
      {/* Popular Post */}
      <div className="bg-whiteSmoke dark:bg-normalBlack w-full p-4 sm:p-8 2xl:p-10 rounded-md ">
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
