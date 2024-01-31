
// NavChild.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
// import "./NavChild.css";

const NotificationCard = ({ notification }) => {
  const timeAgo = formatDistanceToNow(new Date(notification.upload_time), {
    addSuffix: true,
  });

  return (
    <div className="notification-card">
      <img
        className="thumbnail"
        src={`http://192.168.0.11:8800/${notification.image_path}`}
        alt="Thumbnail"
      />
      <div className="notification-details">
        <h3>{notification.title}</h3>
        <p>Age Rating: {notification.age_rating}</p>
        <p>Genre: {notification.genre}</p>
        <p>Upload Time: {timeAgo}</p>
      </div>
    </div>
  );
};

const NavChild = () => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    // Fetch data from child-notifications endpoint
    axios
      .get("http://192.168.0.11:8800/child-notification")
      .then((response) => {
        const storedNotifications =
          JSON.parse(localStorage.getItem("notifications")) || [];
        const unseenNotifications = response.data.filter(
          (notification) => !notification.seen
        );

        setNotifications(response.data);
        updateUnseenCount(
          unseenNotifications.length + storedNotifications.length
        );
      })
      .catch((error) => {
        console.error(error);
      });

    // Add a click event listener to the document body
    document.body.addEventListener("click", handleBodyClick);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const updateUnseenCount = (count) => {
    localStorage.setItem("unseenCount", count.toString());
  };

  const markNotificationsSeen = () => {
    // Mark notifications as seen on the server
    axios
      .put("http://192.168.0.11:8800/mark-notifications-seen")
      .then(() => {
        // Refresh data and update unseen count
        axios
          .get("http://192.168.0.11:8800/child-notifications")
          .then((response) => {
            const storedNotifications =
              JSON.parse(localStorage.getItem("notifications")) || [];
            setNotifications(response.data);
            updateUnseenCount(
              response.data.length - storedNotifications.length
            );
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleNotificationClick = (notificationId) => {
    // Fetch movies based on the clicked notification id
    axios
      .get(`http://192.168.0.11:8800/movies/${notificationId}`)
      .then((response) => {
        // Filter out 18+ movies
        const filteredMovies = response.data.filter(
          (movie) => movie.age_rating <= 13
        );

        // Update the state with filtered movies
        setNotifications(filteredMovies);

        // Toggle the visibility of notifications
        setShowNotifications(!showNotifications);

        // If notifications are being displayed, mark them as seen
        if (showNotifications) {
          markNotificationsSeen();
        } else {
          // Decrease unseen count locally without marking notifications as seen
          updateUnseenCount(0);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleBodyClick = (event) => {
    // Check if the click target is inside the notification area or notification icon
    if (
      event.target.closest(".notification-container") ||
      event.target.closest(".notification-icon")
    ) {
      // Click is inside the notification area or on the notification icon, do nothing
      return;
    }

    // Click is outside the notification area and notification icon, hide notifications
    setShowNotifications(false);
  };

  const handleBellIconClick = () => {
    // Toggle the visibility of notifications
    setShowNotifications(!showNotifications);

    // If notifications are being displayed, mark them as seen
    if (showNotifications) {
      markNotificationsSeen();
    } else {
      // Decrease unseen count locally without marking notifications as seen
      updateUnseenCount(0);
    }
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img
              src="images/REALM3.png"
              alt="Logo"
              style={{ height: "30px", width: "auto" }}
            />
          </div>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/child">Home</Link></li>
            <li className="nav-item"><Link to="/movies">Movies</Link></li>
            <li className="nav-item"><Link to="/shows">Shows</Link></li>
            <li className="nav-item"><Link to="/watchlist">Watchlist</Link></li>
          </ul>
          <div className="align-right">
            <ul className="nav-list">
              <li className="nav-item">
                <div
                  className="notification-icon"
                  onClick={handleBellIconClick}
                >
                  <FaBell />
                  {localStorage.getItem("unseenCount") > 0 && (
                    <span className="unseen-count">
                      {localStorage.getItem("unseenCount")}
                    </span>
                  )}
                </div>
                {showNotifications && (
                  <div className="notification-container">
                    {notifications.slice(0, 5).map((notification) => (
                      <div
                        key={notification.id}
                        className="notification-card"
                        onClick={() => handleNotificationClick(notification.id)}
                      >
                        <NotificationCard
                          key={notification.id}
                          notification={notification}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </li>

              <li className="nav-item">
                <Link to="/Search" className="search-icon">
                  <img
                    src="https://th.bing.com/th/id/OIP.UiS4rOL07L-Q_4WXu8ThswHaHa?w=980&h=980&rs=1&pid=ImgDetMain"
                    alt="Search"
                    style={{ height: "20px", width: "20px" }}
                  />
                </Link>
              </li>

              <li className="nav-item">
                <span className="profile-icon">&#128100;</span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavChild;