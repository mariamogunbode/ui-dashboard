import { Fragment } from "react";
import { Icon } from "@iconify/react";
import { ProfileData } from "../data/profiledata";
import getProfileData from '../data/profiledata';
import './AllProject.css'

export function AllProjects() {
  const newProjects = getProfileData();

  return (
  <Fragment>
      <div className="profile-search">
        <p className="profile-overview">Profile/All projects</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>
      <div className="profile-data-container">
        <div className="profile-button-container">
          <div className="profile-picture-container">
            <img className="picture2"
              src="/images/image6.jpg" />
            <div className="name-position">
              <p className="name">Sayo Kravits</p>
              <p className="position">Public Relations</p>
            </div>
          </div>
          <div>
            <button className="appButton">App</button>
            <button className="messagesButton">Messages</button>
            <button className="settingsButton">Settings</button>
          </div>
        </div>
        <div className="awesomeProject-profile-container">
          <div className="awesome-project">Some of Our Awesome projects</div>

          <div className="container">

            {newProjects.map((item, index) => (
              <div key={index} className="profileData-container">
                {item.newProject ? (
                  <p className="new-project">New Project</p>
                ) : (
                  <div>
                    <div className="icon-profileName-container">
                      <div className="icon-profileName">
                        <div className="icons-container">
                          {item.profilePicture.label.startsWith('mdi:') ? (
                            <Icon icon={item.profilePicture.label} style={{ fontSize: '24px', color: item.profilePicture.color }} />
                          ) : (
                            <div style={{ backgroundColor: item.profilePicture.backgroundColor, color: item.profilePicture.color, padding: '10px', borderRadius: '5px', display: 'inline-block', fontWeight: 'bold', }}>
                              {item.profilePicture.label}
                            </div>
                          )}
                        </div>
                        <div className="profileName-picture-container">
                          <p className="profileName">{item.profileName}</p>
                          <div className="pictures-div">
                            {item.pictures && item.pictures.map((picture, index) => (
                              <img className="pictures" key={index} src={`/images/${picture.url}`} alt={picture.alt} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p>&#8942;</p>
                    </div>
                    <p className="profile-details">{item.profileDetails}</p>
                    <div className="number-date-container">
                      <div className="number-container">
                        <p className="data-number">{item.number}</p>
                        <p className="data-participant">{item.participant}</p>
                      </div>
                      <div className="date-container">
                        <p className="data-date">{item.date}</p>
                        <p className="due-date">{item.dueDate}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </Fragment>
      );
      }
