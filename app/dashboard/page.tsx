import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    // Implement the logout logic to clear the JWT token and redirect to the login page
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <p>Welcome, [Username]!</p>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mt-4">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;