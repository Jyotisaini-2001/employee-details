import React, { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import employeeData from './employeeDetails'; 
import homeIcon from "../images/home.svg";
import userListIcon from "../images/user.png";
import image2 from "../images/Group 46.png";
import image1 from "../images/moptro logo.png";
import { Link } from 'react-router-dom';
import '../style/employee.css';

const UserListView = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  useEffect(() => {
    // Initialize employee list on component mount
    setEmployeeList(employeeData);
  }, []);

  const handleSearch = () => {
    const filteredList = employeeData.filter((employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setEmployeeList(filteredList);
  };

  return (
    <div className="employee-list-view">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <img src={image2} alt="Logo" className="dashboard-image-top-right" />
        <div className="dashboard-image-center">
          <img src={image1} alt="Style" />
          <div className="circle">4</div> {/* Notification circle */}
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search with name"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>

      <div className="employee-list">
        {employeeList.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <div className="employee-info">
              <p><strong>EMP ID </strong><strong>:</strong> {employee.id}</p>
              <p><strong>Name</strong><strong>:</strong> {employee.name}</p>
              <div className="employee-dob-line">
                <strong>DOB</strong><strong>:</strong> <span className="employee-dob">{employee.dob}</span>
              </div>
              <div className="employee-role-line">
                <strong>Role</strong><strong>:</strong>  <span className="employee-role">{employee.role}</span>
              </div>
            </div>
            <div className="employee-number">
              <span>{employee.number}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className='nav-container'>
      <ul>
        <li className={location.pathname === '/dashboard' ? 'active' : ''}>
          <Link to="/dashboard">
            <img src={homeIcon} alt="Dashboard" className="nav-icon" />
          </Link>
        </li>
        <li className={location.pathname === '/employee-list' ? 'active' : ''}>
          <Link to="/employee-list">
            <img src={userListIcon} alt="Employee List" className="nav-icon" />
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default UserListView;
