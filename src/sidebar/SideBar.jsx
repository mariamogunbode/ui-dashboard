import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react'
import './SideBar.css'
import './MediaQuerySB.css'

export function SideBar() {
  const [displayPages, setDisplayPages] = useState(false);
  const [profilePages, setProfilePages] = useState(false);
  const [userPages, setUserPages] = useState(false);
  const [accountPages, setAccountPages] = useState(false);
  const [projectPages, setProjectPages] = useState(false);


  const pagesDisplay = () => {
    setDisplayPages(!displayPages);
  };

  const profileDisplay = () => {
    setProfilePages(!profilePages);
  };

  const userDisplay = () => {
    setUserPages(!userPages);
  };

  const accountDisplay = () => {
    setAccountPages(!accountPages);
  };

  const projectDisplay = () => {
    setProjectPages(!projectPages);
  };

  return (
    <div className="sidebar-container">
      <img src="images/image11.png" />
      <ul>
        <li className="sidebar-pages-container">
          <Icon className="sidebar-icon"
          icon="mdi:home" />
          <NavLink className="sidebar-pages" to="/">Home</NavLink>
        </li>
        <li className="sidebar-pages-container2">
           <Icon className="sidebar-icon"
           icon="mdi:file-document" />
          <span className="page-link"
          onClick={pagesDisplay}>
            Pages
            <Icon className="icon"
            icon={displayPages ? 'mdi:chevron-up' : 'mdi:chevron-down'} /></span>
          {displayPages && (
            <ul className="parent-link">
              <li className="child-link">
                <span onClick={profileDisplay}>
                  Profile
                  <Icon className="icon"
                  icon={profilePages ? 'mdi:chevron-up' : 'mdi:chevron-down'} /></span>
                {profileDisplay && (
                  <ul className={`sub-menu ${profilePages ? 'show' : ''}`}>
                    <li>
                      <NavLink to="/profile-overview">Profile Overview</NavLink>
                    </li>
                    <li>
                      <NavLink to="/teams">Teams</NavLink>
                    </li>
                    <li>
                      <NavLink to="/all-projects">All Projects</NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li className="child-link">
                <span onClick={userDisplay}>
                  Users
                  <Icon className="icon"
                  icon={userPages ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
                </span>
                {userDisplay && (
                  <ul className={`sub-menu ${userPages ? 'show' : ''}`}>
                    <li>
                      <NavLink to="/reports">Reports</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new-user">New User</NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li className="child-link">
                <span onClick={accountDisplay}>
                  Account
                  <Icon className="icon"
                  icon={accountPages ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
                </span>
                {accountDisplay && (
                  <ul className={`sub-menu ${accountPages ? 'show' : ''}`}>
                    <li>
                      <NavLink to="/setting">Setting</NavLink>
                    </li>
                    <li>
                      <NavLink to="/billing">Billing</NavLink>
                    </li>
                    <li>
                      <NavLink to="/invoice">Invoice</NavLink>
                    </li>
                    <li>
                      <NavLink to="/security">Security</NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li className="child-link">
                <span onClick={projectDisplay}>
                  Project
                  <Icon className="icon"
                  icon={projectPages ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
                </span>
                {projectDisplay && (
                  <ul className={`sub-menu ${projectPages ? 'show' : ''}`}>
                    <li>
                      <NavLink to="/general">General</NavLink>
                    </li>
                    <li>
                      <NavLink to="/timeline">Timeline</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new-projects">New Project</NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li className="child-link">
                <NavLink className="sidebar-pages-container"
                to="/pricing-page">Pricing Page</NavLink>
              </li>

              <li className="child-link">
                <NavLink className="sidebar-pages-container"
                to="/charts">Charts</NavLink>
              </li>

              <li className="child-link">
                <NavLink className="sidebar-pages-container"
                to="/notification">Notification</NavLink>
              </li>

              <li className="child-link">
                <NavLink className="sidebar-pages-container"
                to="/chat">Chat</NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="sidebar-pages-container">
           <Icon className="sidebar-icon"
           icon="mdi:application" />
          <NavLink className="sidebar-pages" to="/">Applications</NavLink>
        </li>
        <li className="sidebar-pages-container">
           <Icon className="sidebar-icon"
           icon="mdi:shopping" />
          <NavLink className="sidebar-pages" to="/">E-commerce</NavLink>
        </li>
        <li className="sidebar-pages-container">
           <Icon className="sidebar-icon"
           icon="mdi:lock" />
          <NavLink className="sidebar-pages" to="/">Authentication</NavLink>
        </li>
      </ul>
    </div>
  );
}

