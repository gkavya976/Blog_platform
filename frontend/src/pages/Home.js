 import { useNavigate, Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import "../styles/Home.css";
function Home({ search = "" }) {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: "MERN Stack Guide",
      readingTime: "3 min read",
      date: "23 June 2026",
      content:
        "Learn MERN stack from scratch and build full stack applications.",
      author: "Kavya",
      likes: 12,
      comments: 5,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900"
    },
    {
      id: 2,
      title: "React Tutorial",
      readingTime: "3 min read",
      date: "24 June 2026",
      content:
        "A complete guide to learn React step by step.",
      author: "Admin",
      likes: 8,
      comments: 3,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900"
    },
    {
      id: 3,
      title: "JavaScript Basics",
      readingTime: "3 min read",
      date: "25 June 2026",
      content:
        "Understand JavaScript fundamentals.",
      author: "Suresh",
      likes: 6,
      comments: 2,
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900"
    }
  ];

  const savedPosts =
    JSON.parse(localStorage.getItem("posts")) || [];

  const allPosts = [...posts, ...savedPosts];

  const filteredPosts = allPosts.filter((post) =>
    post.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const trendingPosts = [...allPosts]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  return (
    <>
      {/* HERO SECTION */}

       <section className="hero">

        <div className="hero-content">

          <h1>
            Share Your Ideas.
            <br />
            <span>Inspire The World.</span>
          </h1>

          <p>
            Join thousands of writers and readers sharing
            knowledge, stories and experiences.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/dashboard")}
            >
              Explore Blogs →
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900"
            alt="Blog Hero"
          />

        </div>

      </section>


      {/* Trending */}

      <section className="container">

        <h2 className="section-title">
          🔥 Trending Blogs
        </h2>

        <div className="posts-grid">

          {trendingPosts.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="post-link"
            >
              <PostCard post={post} />
            </Link>
          ))}

        </div>

      </section>

      {/* Latest */}

      <section className="container">

        <h2 className="section-title">
          Latest Blog Posts
        </h2>

        <div className="posts-grid">

          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/post/${post.id}`}
                className="post-link"
              >
                <PostCard post={post} />
              </Link>
            ))
          ) : (
            <h2
              style={{
                textAlign: "center",
                width: "100%"
              }}
            >
              No Blogs Found
            </h2>
          )}

        </div>

      </section>
    </>
  );
}

export default Home;