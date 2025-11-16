import { Icon } from '@iconify/react';
import './Security.css'

export function Security() {
  const passwordRules = [
    'Minimum of 8 characters',
    'At least one special character',
    'At least one number',
    "Can't be the same as previous",
  ];

  const devices = [
    { name: 'iPhone 11', location: 'London, UK-Oct12 at 2:30AM' },
    { name: 'Galaxy 18', location: 'Berlain, Nov23 at 2:30AM' },
    { name: 'Vivo y21', location: 'London, UK-Oct12 at 2:30AM' },
    { name: 'iPhone 12', location: 'London, UK-Oct12 at 2:30AM' },
    { name: 'Samsung', location: 'Karachi, PAK-Oct12 at 2:30AM' },
  ];

  return (
    <>
      <div className="profile-search">
        <p className="profile-overview">Account/Security</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>
      <div className="security-setting">
        <p>Security Setting</p>
      </div>
      <div className="password-device">
        <div className="password-container">
          <p className="pass-word">Password</p>
          <p className="pass-password">The Last Pass password generator creates random password based on parameters set by you</p>
          <div className="password-input-container">
            <p className="password-para">Current password</p>
            <input className="password-input"
              type="password" placeholder="Current password" />
          </div>
          <div className="password-input-container">
            <p className="password-para">New password</p>
            <input className="password-input"
              type="password" placeholder="New password" />
          </div>
          <div className="password-input-container">
            <p className="password-para">Comfirm password</p>
            <input className="password-input"
              type="password" placeholder="Comfirm password" />
          </div>
          <div className="rules-container">
            <p className="password-rules">Rules for password</p>
            <p className="create-new-password">To create a new password, you have to meet all of the following requirements</p>
            {passwordRules.map((rule) => (
              <div className="dot-para">
                <p className="dot">&#183;</p>
                <p className="paragraph">{rule}</p>
              </div>
            ))}
          </div>
          </div>

          <div className="devices-container">
            <p className="devices">Devices</p>
            <div className="para-button-container">
            <p className="password-generator">The Last Pass password generator creates random password based on parameters set by you</p>
            <button className="signOut-button">Sign out from all devices</button>
            </div>
            {devices.map((device) => (
              <div className="phones-dots-container">
                <div className="phones-location">
                  <p className="phones">{device.name}</p>
                  <p className="vertical-dots">&#8942;</p>
                </div>
                <p className="location">{device.location}</p>
              </div>
            ))}
            <button className="help-button">Need help?</button>
          </div>
        </div>


      </>
      );
}