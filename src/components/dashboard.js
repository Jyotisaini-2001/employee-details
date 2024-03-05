// Inside Dashboard.js
import React from "react";
import { Link } from "react-router-dom";
import "../style/dashboard.css";
import image1 from "../images/Group 46.png";
import image2 from "../images/moptro logo.png";
import homeIcon from "../images/home.svg";
import userListIcon from "../images/user.png";

const Dashboard = () => {
  const productivityData = [
    { day: "Monday", percentage: 4 },
    { day: "Tuesday", percentage: 92 },
    { day: "Wednesday", percentage: 122 },
    { day: "Thursday", percentage: 93 },
    { day: "Friday", percentage: 89 },
    { day: "Saturday", percentage: 98 },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <img src={image1} alt="Logo" className="dashboard-image-top-right" />
        <div className="dashboard-image-center">
          <img src={image2} alt="Style" />
          <div className="circle">4</div> {/* Circle */}
        </div>{" "}
      </div>
      <div className="dashboard-heading">
        <h2 className="dashboard-title">Employee Productivity Dashboard</h2>
      </div>

      <div className="content">
        {productivityData.map((data) => (
          <div className="progress-bar-container" key={data.day}>
            <div className="progress-bar-label">
              Productivity on {data.day}:{/* Add space here */}
              <span className="percentage">{data.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-inner"
                style={{ width: `${Math.min(data.percentage, 100)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">
                <img src={homeIcon} alt="Home" className="nav-icon" />
              </Link>
            </li>
            <li>
              <Link to="/employee-list">
                <img src={userListIcon} alt="User List" className="nav-icon" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
