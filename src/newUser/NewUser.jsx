import { Icon } from "@iconify/react";
import './NewUser.css'
import './MediaQueryNU.css'

export function NewUser() {
  return (
    <>
      <div className="profile-search">
        <p className="profile-overview">Users/New User</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>
      <div className="userInfo-aboutMe-container">
        <div className="user-info-container">
          <div className="button-user">
           <div className="empty-button-div">
            <button className="empty-button"/>  
            <div className="empty-div"/>     
            </div>
            <p className="user-info">User Info</p>
          </div>
          <div className="button-user">
            <div  className="empty-button-div">
            <button className="empty-button2"/>
            <div className="empty-div"/>
            
            </div>
<p className="user-info">Address</p>
          </div>
          <div className="button-user">
            <div className="empty-button-div">
            <button className="empty-button2"/>
            <div className="empty-div"/>
            
            </div>
             <p className="user-info">Socials</p>
          </div>
          <div className="button-user">
            <div className="empty-button-div">
            <button className="empty-button2"/>
            </div>
            <p className="user-info">Profile</p>
          </div>
        </div>
        <div className="aboutme-input-container">
          <div>
            <p className="about-me">About me</p>
            <p className="mandatory">Mandatory information</p>
          </div>
          <div className="aboutMe-inputs-container">
            <div className="first-input-divs">
              <div className="about-me-input">
                <p className="input-label2">First name</p>
                <input className="aboutMe-input"
                type="text" placeholder="e.g Malik" />
              </div>
              <div className="about-me-input">
                <p className="input-label2">Company</p>
                <input className="aboutMe-input" type="text" placeholder="e.g TeamUXD" />
              </div>
              <div className="about-me-input">
                <p className="input-label2">Password</p>
                <input className="aboutMe-input" type="password" placeholder="e.g ma56k190" />
              </div>
            </div>
              <div className="second-input-divs">
                <div className="about-me-input">
                <p className="input-label2">Last name</p>
                <input className="aboutMe-input" type="text" placeholder="e.g Ali" />
              </div>
              <div className="about-me-input">
                <p className="input-label2">Email Address</p>
                <input className="aboutMe-input" type="password" placeholder="e.g Team@gmail.comd" />
              </div>
              <div className="about-me-input">
                <p className="input-label2">Repeat password</p>
                <input className="aboutMe-input" type="text" placeholder="e.g ma56k190" />
              </div>
              </div>
          </div>
        </div>
        <button className="next-button">Next</button>
      </div>
    </>
  );
}