 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitPost = () => {
    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    const user =
      JSON.parse(localStorage.getItem("user")) || {};

    const newPost = {
      id: Date.now(),
      title,
      content,
      author: user.username || "Anonymous",
      likes: 0,
      comments: 0,
      date: new Date().toLocaleDateString(),
      readingTime: "3 min read",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900",
    };

    const existing =
      JSON.parse(localStorage.getItem("posts")) || [];

    existing.push(newPost);

    localStorage.setItem(
      "posts",
      JSON.stringify(existing)
    );

    alert("🎉 Blog Published Successfully!");

    setTitle("");
    setContent("");

    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="form-page">

        <h1>Create New Blog ✍️</h1>

        <p className="auth-subtitle">
          Share your thoughts with the community.
        </p>

        <input
          type="text"
          placeholder="Enter Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="10"
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={submitPost}>
          🚀 Publish Blog
        </button>

      </div>
    </div>
  );
}

export default CreatePost;