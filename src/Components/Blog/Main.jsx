import { useEffect, useState } from "react";
import Blog from "./Blog";
import BlogAside from "./BlogAside";

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  function addBookmark(title) {
    const newBookmark = [...bookmarks, title];
    setBookmarks(newBookmark);
    console.log(title)
  }

  function addReadingTime(id,time) {
    const totalTime = readingTime + time
    setReadingTime(totalTime);
    console.log(id)

    const filteredBookmark = bookmarks.filter((bookmark) => bookmark.id !== id)
    setBookmarks(filteredBookmark)
    console.log(bookmarks)
  }

  return (
    <div className="grid lg:grid-cols-10 lg:gap-8">
      <div className="lg:col-span-7">
        {blog.map((blog) => (
          <Blog key={blog.id} blog={blog} addBookmark={addBookmark} addReadingTime={addReadingTime}></Blog>
        ))}
      </div>
      <div className="lg:col-span-3">
        <BlogAside bookmark={bookmarks} readingTime={readingTime}></BlogAside>
      </div>
    </div>
  );
};

export default Blogs;
