import { Icon } from '@iconify/react';
import './Notification.css'

export function Notification() {
  return (
    <>
      <div className="profile-search">
        <p className="profile-overview">Notification</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>

      <div className="divs-container">
        <div className="alert-divs-container">
          <p className="alert">Alert</p>
          <div className="div-1">
            <p>A simple primary alert with an <a href="#" className="alert-link">example link</a>. Give it a click if you like.
            </p>
             <p className="times">&times;</p>
            </div>
          <div  className="div-2">
             <p>A simple primary alert with an <a href="#" className="alert-link">example link</a>. Give it a click if you like.
            </p>
             <p className="times">&times;</p>
          </div>
          <div  className="div-3">
             <p>A simple primary alert with an <a href="#" className="alert-link">example link</a>. Give it a click if you like.
            </p>
             <p className="times">&times;</p>
          </div>
          <div  className="div-4">
             <p>A simple primary alert with an <a href="#" className="alert-link">example link</a>. Give it a click if you like.
            </p>
             <p className="times">&times;</p>
          </div>
          <div className="div-5">
             <p>A simple primary alert with an <a href="#" className="alert-link">example link</a>. Give it a click if you like.
            </p>
             <p className="times">&times;</p>
          </div>
          <div  className="div-6">
             <p>A simple primary alert with an <a href="#" className="alert-link">example link</a>. Give it a click if you like.
            </p>
             <p className="times">&times;</p>
          </div>
          <div  className="div-7">
             <p>A simple primary alert with an <a href="#" className="alert-link">example link</a>. Give it a click if you like.
            </p>
             <p className="times">&times;</p>
          </div>
          <div  className="div-8">
             <p>A simple primary alert with an <a href="#" className="alert-link">example link</a>. Give it a click if you like.
            </p>
             <p className="times">&times;</p>
          </div>
        </div> 

        <div className="notification-divs-container">
          <p className="notification">Notification</p>
          <p className="notification-para">Notifications on this page use Toasts from Botstrap. Read more details here.</p>
          <div className="notification-divs">
            <div className="success">Success Notification</div>
            <div className="warning">Warning Notification</div>
            <div className="danger">Danger Notification</div>
            <div className="secondary">Secondary Notification</div>
          </div>
        </div>
      </div>
    </>
  );
}
