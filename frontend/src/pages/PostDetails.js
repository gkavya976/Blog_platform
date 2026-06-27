
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/PostDetails.css";

function PostDetails() {
  const { id } = useParams();

  const defaultPosts = [
    {
      id: 1,
      title: "MERN Stack Guide",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
      content:
        "MERN Stack is a powerful technology stack consisting of MongoDB, Express, React and Node.js. It is widely used for building full-stack web applications.",
      likes: 12,
      author: "Kavya",
    },
    {
      id: 2,
      title: "React Tutorial",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900",
      content:
        "React helps build modern user interfaces using components, hooks and routing.",
      likes: 8,
      author: "Admin",
    },
    {
      id: 3,
      title: "JavaScript Basics",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900",
      content:
        "Learn variables, functions, arrays, objects and DOM manipulation.",
      likes: 6,
      author: "Suresh",
    },
  ];

  const userPosts =
    JSON.parse(localStorage.getItem("posts")) || [];

  const posts = [...defaultPosts, ...userPosts];

  const post = posts.find((p) => p.id === Number(id));

  const relatedPosts = posts.filter(
    (p) => p.id !== Number(id)
  );

  const [likes, setLikes] = useState(post?.likes || 0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    "Great article 👍",
    "Very helpful!",
  ]);

  if (!post) {
    return <h2 className="not-found">Post Not Found</h2>;
  }

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const handleComment = () => {
    if (!comment.trim()) return;

    setComments([...comments, comment]);
    setComment("");
 alert("Comment Added Successfully");
  };

  return (
    <div className="post-details">

      <img
        src={post.image}
        alt={post.title}
        className="post-banner"
      />

      <h1>{post.title}</h1>

      <div className="like-row">
        <span>❤️ {likes}</span>

        <button onClick={handleLike}>
          Like Post
        </button>
      </div>

      <p className="post-text">
        {post.content}
      </p>

      <div className="author-card">
        <h3>👤 Author</h3>

        <p>{post.author}</p>

        <small>Full Stack Developer</small>
      </div>

      <h2>
        Comments ({comments.length})
      </h2>

      {comments.map((item, index) => (
        <div
          key={index}
          className="comment-box"
        >
          {item}
        </div>
      ))}

      <textarea
        rows="4"
        placeholder="Add your comment..."
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
      />

      <button
        className="comment-btn"
        onClick={handleComment}
      >
        Submit Comment
      </button>

      <h2 className="related-title">
        You May Also Like
      </h2>

      <div className="posts-grid">

        {relatedPosts.map((item) => (

          <Link
            key={item.id}
            to={`/post/${item.id}`}
            className="post-link"
          >
            <div className="post-card">

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="post-content">
                <h3>{item.title}</h3>
              </div>

            </div>
          </Link>

        ))}

      </div>

    </div>
  );
}

export default PostDetails;