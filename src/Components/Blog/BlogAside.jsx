import propTypes from "prop-types"
const BlogAside = ({ bookmark, readingTime }) => {
  return (
    <div className="lg:sticky lg:top-10">
      <div className="alert alert-warning">
        <span className="text-xl" >Spend time on read: {readingTime} min</span>
      </div>

      <div className="card bg-base-100 shadow-xl my-4">
        <div className="alert text-lg">Spend time on reading: { bookmark.length}</div>
        {bookmark.map((title,index)=> <div key={index} className="px-4 py-2">
          <div className="alert">
            <span>{ title.title }</span>
          </div>
        </div>) }
      </div>
    </div>
  );
};

BlogAside.propTypes = {
  bookmark: propTypes.array.isRequired,
  readingTime: propTypes.number.isRequired
}

export default BlogAside;
