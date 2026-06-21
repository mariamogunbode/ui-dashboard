import { Icon } from "@iconify/react";
import { useState } from "react";
import './Teams.css'
import './MediaQueryT.css'

export function Teams() {
  const [checked, setChecked] = useState(false);

  const [checkedMembers, setCheckedMembers] = useState({});

  const handleCheck2 = (id) => {
    setCheckedMembers((prevChecked) => ({
      ...prevChecked,
      [id]: !prevChecked[id],
    }));
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const teamMembers = [{
    id: 'id1',
    image: 'images/image1.jpg',
    name: 'Olivia Rhye',
    email: 'Olivia@gmail.com'
  },
  {
    id: 'id2',
    image: 'images/image2.jpg',
    name: 'Phoenix Baker',
    email: 'Phoenix@gmail.com'
  },
  {
    id: 'id3',
    image: 'images/image3.jpg',
    name: 'Lana Steiner',
    email: 'Lana@gmail.com'
  },
  {
    id: 'id4',
    image: 'images/image4.jpg',
    name: 'Demi Wikinson',
    email: 'Demi@gmail.com'
  },
  {
    id: 'id5',
    image: 'images/image5.jpg',
    name: 'Candice Wu',
    email: 'Candice@gmail.com'
  }]

  return (
    <>
      <div className="profile-search">
        <p className="profile-overview">Project/Teams</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>

      <div className="team-management-container">
        <p className="team-management">Team management</p>
        <p className="manage-team">Manage your team members and their account permissions here</p>
        <div className="invite-team-member-container">
          <div className="invite-team-container">
            <p className="invite-team">Invite team members</p>
            <p className="your-project">Get your projects up and running faster by inviting your team to collaborate.</p>
          </div>
          <div>
            <div className="email-input-container">
              <Icon icon="mdi:email" className="email-icon" />
              <input className="email-input"
                type="email" placeholder="team@team.com" />
              <button className="read-only-button">Read-only
                <Icon icon="mdi:chevron-down" />
              </button>
            </div>
            <div className="email-input-container">
              <Icon icon="mdi:email" className="email-icon" />
              <input className="email-input"
                type="email" placeholder="team@team.com" />
              <button className="read-only-button">Read-only
                <Icon icon="mdi:chevron-down" />
              </button>
            </div>
            <div className="email-input-container">
              <Icon icon="mdi:email" className="email-icon" />
              <input className="email-input"
                type="email" placeholder="team@team.com" />
              <button className="read-only-button">Read-only
                <Icon icon="mdi:chevron-down" />
              </button>
            </div>
            <div className="another-invites-container">
              <div className="plus-another">
                <p className="plus">+</p>
                <p className="add-another">Add another</p>
              </div>
              <div className="email-send">
                <Icon className="send-email"
                icon="mdi:email" />
                <button className="invite-button">Send invites</button>
              </div>
            </div>
          </div>
        </div>
        <div className="team-member-profile-container">
          <div className="team-member-container">
            <p className="invite-team">Team members</p>
            <p className="your-project">Get your projects up and running faster by inviting your teams to collaborate</p>
          </div>
          <div className="checkInput-team-profile-container">
            <div className="check-name">
              <input
              className="name-check"
                type="checkbox"
                checked={checked}
                onChange={handleCheck}
              />
              <span className="na-me">Name</span>
            </div>
            <div className="check-member-profile-container">
              {teamMembers.map((member) => (
                <div className="check-member-profile"
                key={member.id}>
                  <input
                    type="checkbox"
                    checked={checkedMembers[member.id] || false}
                    onChange={() => handleCheck2(member.id)}
                  />
                  <div className="profile-buttons">
                    <div className="members-image">
                      <img className="team-images"
                      src={member.image} />
                      <div>
                        <p className="member-name">{member.name}</p>
                        <p className="member-email">{member.email}</p>
                      </div>
                    </div>
                    <div className="buttons-div">
                      <button className="admin-button">Admin</button>
                      <button className="delete-button">Delete</button>
                      <button className="edit-button">Edit</button>
                    </div>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </div>
      </div>
    </>
  );
}