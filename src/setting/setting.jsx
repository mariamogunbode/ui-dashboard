import { Icon } from "@iconify/react";
import { useState } from "react";
import './setting.css'
import './MediaQueryS.css'

export function Setting() {
  const [file, setFile] = useState(null)
    const [dragging, setDragging] = useState(false);
    
    const handleDragEnter = (event) => {
    event.preventDefault();
    setDragging(true);
  };
  
  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragging(false);
  };
  
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
  event.preventDefault();
  setDragging(false);
  const droppedFile = event.dataTransfer.files[0];
  setFile(droppedFile);
};

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  setFile(selectedFile);
};

  return (
    <>
      <div className="profile-search">
        <p className="profile-overview">Account/Setting</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>
      <div className="setting-update-button-container">
        <div className="setting-update-container">
        <p className="setting-detail">Setting Details</p>
        <p className="your-photo">Update your photo and personal details here.</p>
        </div>
        <div className="cancel-save-buttons">
          <button className="cancel">Cancel</button>
          <button className="save">Save</button>
        </div>
      </div>
      <div className="personalInfo-yourPhoto-container">
      <div className="personal-info-inputs-container">
        <div className="personal-info-div">
        <p className="personal-info">Personal information</p>
        </div>
        
        <div className="inputs-divs">
          <div className="left-inputs-container">
            <div className="input-label-div">
              <p className="input-label">Full Name</p>
              <input className="input-text"
              type="text" placeholder="Enter your full name" />
            </div>
            <div className="input-label-div">
              <p className="input-label">Email Address</p>
              <input className="input-text"
              type="text" placeholder="Enter email address" />
            </div>
            <div className="input-label-div">
              <p className="input-label">Phone No</p>
              <input className="input-text"
              type="text" placeholder="Enter phone no" />
            </div>
            <div className="input-label-div">
              <p className="input-label">Country Name</p>
              <input className="input-text"
              type="text" placeholder="Enter country name" />
            </div>
            <div className="input-label-div">
              <p className="input-label">Bio <span className="span-para">(Write a short introduction)</span></p>
              <input className="input-text"
              type="text" placeholder="Normal text" />
            </div>
          </div>
           <div className="right-inputs-container">
            <div className="input-label-div">
              <p className="input-label">Last Name</p>
              <input className="input-text"
              type="text" placeholder="Enter last name" />
            </div>
            <div className="input-label-div">
              <p className="input-label">Username</p>
              <input className="input-text"
              type="text" placeholder="Enter username" />
            </div>
            <div className="input-label-div">
              <p className="input-label">City</p>
              <input className="input-text"
              type="text" placeholder="Enter your city" />
            </div>
            <div className="input-label-div">
              <p className="input-label">Zip code</p>
              <input className="input-text"
              type="text" placeholder="Enter zip code" />
            </div>
          </div>
        </div>
        <div className="lorem-ipsum-div">
            <p className="lorem-ipsum">Lorem ipsum,in graphical and tectual context,refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from Latin "dolorem ipsum" roughly translated as "pain itsel".</p>
          </div>
          <div className="input-label-div2">
              <p className="input-label">Timezone</p>
              <input className="input-text"
              type="text" placeholder="Pacific Standard Time" />
            </div>
      </div>
      <div className="your-photo-google-container">
        <div className="your-photo-container">
        <p className="your-photo2">Your Photo</p>
        <div className="edit-photo-container">
          <img className="photo"
          src="images/image4.jpg" />
          <div>
            <p className="edit">Edit your photo</p>
            <button className="delete">Delete</button>
            <button className="update">Update</button>
          </div>
        </div>
        <div className="file-input-container2">
          <div
      className={`file-upload2 ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="upload-container">
       <Icon className="upload-icon"
       icon="mdi:cloud-upload" />
      </div>
      <p className="drag-drop">
        <span className="click-to-upload"
        onClick={() => document.getElementById('file-input').click()}>Click to upload</span> or drag and drop</p>
      <p className="image-types">SVG, PNG, JPG or GIF (max, 800x400px)</p>
          <input type="file" id="file-input" onChange={handleFileChange} />
          {file && <p>File uploaded: {file.name}</p>}
        </div>
          </div>
          </div>
          <div className="google-container">
            <div className="google-icon-connected">
              <Icon icon="logos:google" />
            <button className="connec-ted">Connected</button>
            </div>
            <p className="use-google">Use Google to sign in to your account.<span className="click-here-span">Click here to learn more.</span></p>
          </div>
        </div>
      </div>
    </>
  );
}