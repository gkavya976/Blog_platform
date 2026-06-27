 import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="profile-avatar">
          👩‍💻
        </div>

        <h1 className="profile-name">Kavya</h1>

        <p className="role">
          Full Stack Developer | MERN Stack Enthusiast
        </p>

        <div className="profile-stats">

          <div className="stat-box">
            <h2>12</h2>
            <span>Posts</span>
          </div>

          <div className="stat-box">
            <h2>250</h2>
            <span>Likes</span>
          </div>

          <div className="stat-box">
            <h2>50</h2>
            <span>Followers</span>
          </div>

        </div>

        <div className="skills">

          <h3>💻 Skills</h3>

          <div className="skill-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;