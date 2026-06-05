function AdminCard() {
  return (
    <div className="dashboard-container">

      <div className="welcome-section">
        <h1>Admin Dashboard</h1>
        <p>
          Manage users, roles and system activities.
        </p>
      </div>

      <div className="stats-container">

        <div className="stat-card">
          <h3>Total Users</h3>
          <h2>120</h2>
        </div>

        <div className="stat-card">
          <h3>Active Users</h3>
          <h2>95</h2>
        </div>

        <div className="stat-card">
          <h3>Admins</h3>
          <h2>5</h2>
        </div>

        <div className="stat-card">
          <h3>System Status</h3>
          <h2>Online</h2>
        </div>

      </div>

      <div className="admin-panel">
        <h2>Administration Panel</h2>

        <button className="action-btn">
          Manage Users
        </button>

        <button className="action-btn">
          Assign Roles
        </button>

        <button className="action-btn">
          View Reports
        </button>
      </div>

    </div>
  );
}

export default AdminCard;