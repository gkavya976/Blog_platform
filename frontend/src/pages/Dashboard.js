 import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "MERN Stack Guide",
      date: "June 2026",
      status: "Published",
    },
    {
      id: 2,
      title: "React Tutorial",
      date: "June 2026",
      status: "Draft",
    },
  ]);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    alert("Post Deleted Successfully!");
  };

  const handleEdit = (id) => {
    alert(`Editing Post ID: ${id}`);
  };

  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">
        📊 Dashboard
      </h1>

      {/* Stats */}

      <div className="stats-container">

        <div className="stat-card">
          <span>📄</span>
          <h3>Total Posts</h3>
          <p>12</p>
        </div>

        <div className="stat-card">
          <span>❤️</span>
          <h3>Total Likes</h3>
          <p>350</p>
        </div>

        <div className="stat-card">
          <span>💬</span>
          <h3>Comments</h3>
          <p>89</p>
        </div>

        <div className="stat-card">
          <span>👥</span>
          <h3>Followers</h3>
          <p>1024</p>
        </div>

      </div>

      {/* Table */}

      <table>

        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {posts.map((post) => (

            <tr key={post.id}>

              <td>{post.title}</td>

              <td>{post.date}</td>

              <td>{post.status}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(post.id)}
                >
                  ✏️ Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(post.id)}
                >
                  🗑️ Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Dashboard;