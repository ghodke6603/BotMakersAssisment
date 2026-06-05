function UserCard() {
  return (
    <div className="dashboard-container">

      <div className="welcome-section">
        <h1>User Dashboard</h1>
        <p>
          Welcome back! Here's your account overview.
        </p>
      </div>

      <div className="stats-container">

        <div className="stat-card">
          <h3>Profile Status</h3>
          <h2>100%</h2>
        </div>

        <div className="stat-card">
          <h3>Tasks Completed</h3>
          <h2>24</h2>
        </div>

        <div className="stat-card">
          <h3>Notifications</h3>
          <h2>5</h2>
        </div>

        <div className="stat-card">
          <h3>Account Status</h3>
          <h2>Active</h2>
        </div>

      </div>

      <div className="user-panel">

        <h2>User Profile</h2>

        <p><strong>Name:</strong> User</p>
        <p><strong>Role:</strong> USER</p>
        <p><strong>Status:</strong> Active</p>

        <button className="action-btn">
          View Profile
        </button>

        <button className="action-btn">
          Edit Profile
        </button>

      </div>

    </div>
  );
}

export default UserCard;