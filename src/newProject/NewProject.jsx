import { Icon } from '@iconify/react';
import { useState } from 'react';
import './NewProject.css'

export function NewProjects() {
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
        <p className="profile-overview">Profile/New project</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>

      <div className="newproject-inputs">
        <p className="new-project">New project</p>
        <p className="create-project">Create new project</p>

        <div className="inputs-container">
        <div className="name-title">
           <div className="project-input">
          <p className="project-name">Project Name</p>
          <input className="all-input"
          type="text" />
        </div>

        <div className="title-input">
          <p className="project-title">Project Title</p>
          <input type="text" 
          className="all-input"/>
        </div>
        </div>

        <div className="tags-input">
          <p className="project-tags">Project Tags</p>
          <input type="text" 
          className="all-input"/>
        </div>

        <div className="start-end">
           <div className="date-input">
          <p className="start-date">Start Date</p>
          <label>
          <input type="text" placeholder="Please select start date" onFocus={(e) => e.target.type = 'date'}
          className="start-input"/>
          </label>
        </div>

        <div className="endDate-input">
          <p className="end-date">End Date</p>
          <label>
          <input type="text" placeholder="Please select end date" onFocus={(e) => e.target.type = 'date'}
          className="end-input"/>
          </label>
        </div>
        </div>

        <div className="file-input-container">
          <p className="starting-file">Starting File</p>
          <div
      className={`file-upload ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div>
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
        </div>
    </>
  );
}