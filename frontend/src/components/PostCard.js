 import { Link } from "react-router-dom";

function PostCard({ post }) {

  const handleBookmark = (e) => {
    e.preventDefault();

    const bookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    const alreadyExists = bookmarks.find(
      (item) => item.id === post.id
    );

    if (alreadyExists) {
      alert("Already Bookmarked");
      return;
    }

    localStorage.setItem(
      "bookmarks",
      JSON.stringify([...bookmarks, post])
    );

    alert("Bookmarked Successfully");
  };

  return (
    <div className="post-card">

      <Link
        to={`/post/${post.id}`}
        className="post-link"
      >

        <img
          src={post.image}
          alt={post.title}
        />

        <div className="post-content">

          <span className="tag">
            Technology
          </span>

          <h3>{post.title}</h3>

          <p>📖 {post.readingTime}</p>

          <p>{post.content}</p>

          <p>📅 {post.date}</p>

          <div className="post-footer">

            <span>👤 {post.author}</span>

            <span>❤️ {post.likes}</span>

            <span>💬 {post.comments}</span>

          </div>

        </div>

      </Link>

      <div className="post-actions">

        <button
          className="save-btn"
          onClick={handleBookmark}
        >
          🔖 Save
        </button>

        <Link
          to={`/post/${post.id}`}
          className="read-btn"
        >
          Read More →
        </Link>

      </div>

    </div>
  );
}

export default PostCard;