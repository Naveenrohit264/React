import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const AdminComponent = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <Link to="/upload">
        <button>Upload Movie</button>
      </Link>
      <Link to="/logout">
        <button>Logout</button>
      </Link>
    </div>
  );
};

export default AdminComponent;
