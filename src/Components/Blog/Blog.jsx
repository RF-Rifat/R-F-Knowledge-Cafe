import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, addBookmark, addReadingTime }) => {
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <>
      <div className="card bg-base-100 shadow-xl mb-6 lg:w-full">
        <figure>
          <img src={cover} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <img src={author_img} alt="profile" className="w-16" />
              <div className="">
                {" "}
                <h2>{author}</h2> <span>{posted_date}</span>
              </div>
            </div>
            <div className="flex text-xl justify-center items-center gap-2">
              {reading_time} min read{" "}
              <button className="focus:text-red-500" onClick={()=> addBookmark(blog)}>
                <FaRegBookmark></FaRegBookmark>
              </button>
            </div>
          </div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <div className="card-actions">
            <div className="">
              {hashtags.map((e, idx) => (
                <a href="#" key={idx} className="p-2">
                  #{e}
                </a>
              ))}
            </div>
          </div>
          <a className="link link-primary" onClick={()=> addReadingTime(id,reading_time)}>Mark as read</a>
        </div>
      </div>
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    author_img: PropTypes.string.isRequired,
    posted_date: PropTypes.string.isRequired,
    reading_time: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  addBookmark: PropTypes.func.isRequired,
  addReadingTime: PropTypes.func.isRequired,
};
export default Blog;
