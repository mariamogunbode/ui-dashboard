import { Icon } from '@iconify/react';
import './TimeLine.css'

export function TimeLine() {

  return (
    <>
    <div className="profile-search">
            <p className="profile-overview">Project/Timeline</p>
            <div className="search-bar-icon">
              <input type="text" placeholder="Search anything here"
                className="search-bar" />
              <Icon className="search-icon"
                icon="mdi:search" />
            </div>
          </div>

        <div className="timeline-dotted-line-container">
          <div className="timeline-dotted-line1">
            <p className="time-line">Timeline with dotted line</p>
            <div className="icon-paragraph-container">
              <div className="icon-container">
              <Icon className="bell"
              icon="mdi:bell" />
              <div className="line" />
              </div>
              <div className="design-changes-container">
                <p className="design-changes">$8900, Design changes</p>
                <p class="time">12 Dec 9:00 PM</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="design-button">Design</button>
              </div>
              </div>

            <div className="icon-paragraph-container">
              <div className="icon-container">
              <Icon className="mobile-phone"
              icon="mdi:mobile-phone" />
              <div className="line" />
              </div>
              <div>
                <p className="design-changes">New order #1832412</p>
                <p className="time">12 Dec 9:00 PM</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="order-button">Order</button>
                <button className="number-button">#1832</button>
              </div>
              </div>

              <div className="icon-paragraph-container">
              <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 302"><path fill="#27346a" d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.39 13.39 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971l-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221c.366-1.873.683-3.696.957-5.477q-2.334-1.236 0 0c3.671-23.407-.025-39.34-12.686-53.765"/><path fill="#27346a" d="M102.397 68.84a11.7 11.7 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a102 102 0 0 1 6.177 1.182a90 90 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287c3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.72 11.72 0 0 1 6.509-8.74"/><path fill="#2790c3" d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48l9.173-58.136l.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55c4.503-23.15 2.173-42.478-9.739-56.054c-3.613-4.112-8.1-7.508-13.327-10.28c-.283 1.79-.59 3.604-.957 5.477"/><path fill="#1f264f" d="M216.952 72.128a90 90 0 0 0-5.818-1.49a110 110 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.6 11.6 0 0 0-5.053 1.149a11.68 11.68 0 0 0-6.51 8.74l-15.582 98.798l-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221c.367-1.873.675-3.688.958-5.477q-4.682-2.47-10.14-4.279a83 83 0 0 0-2.77-.865"/></svg>
              <div className="line" />
              </div>
              <div>
                <p className="design-changes">Server payments for April</p>
                <p className="time">21 Dec 9:34 PM</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="server-button">Server</button>
                <button className="payment-button">Payment</button>
              </div>
              </div>

            <div className="icon-paragraph-container">
              <div className="icon-container">
              <Icon className="file-document"
              icon="mdi:file-document" />
              <div className="line" />
              </div>
              <div>
                <p className="design-changes">New card added for order #4395133</p>
                <p className="time">20 Dec 2:20AM</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="card-button">Card</button>
                <button className="button-number">#439</button>
              </div>
              </div>

            <div className="icon-paragraph-container">
              <div className="icon-container">
              <Icon className="shield-check"
              icon="mdi:shield-check" />
              <div className="line" />
              </div>
              <div>
                <p className="design-changes">Unlock packages for development</p>
                <p className="time">18 Dec 4:54 AM</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="decelop-button">Decelop</button>
              </div>
              </div>

            <div className="icon-paragraph-container">
              <div className="icon-container">
              <Icon className="shield-check2"
              icon="mdi:shield-check" />
              <div className="line" />
              </div>
              <div>
                <p className="design-changes">New message unread</p>
                <p className="time">16 Dec</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="message-button">Message</button>
              </div>
            </div>
          </div>

          <div className="timeline-dotted-line2">
            <p className="time-line2">Timeline with dotted line</p>
            <div className="icon-paragraph-container">
              <div className="icon-container">
              <Icon className="bell"
              icon="mdi:bell" />
              <div className="line" />
              </div>
              <div className="design-changes-container">
                <p className="design-changes2">$8900, Design changes</p>
                <p class="time">12 Dec 9:00 PM</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="design-button">Design</button>
              </div>
              </div>

            <div className="icon-paragraph-container">
              <div className="icon-container">
              <Icon className="mobile-phone"
              icon="mdi:mobile-phone" />
              <div className="line" />
              </div>
              <div>
                <p className="design-changes2">New order #1832412</p>
                <p className="time">12 Dec 9:00 PM</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="order-button">Order</button>
                <button className="number-button">#1832</button>
              </div>
              </div>

              <div className="icon-paragraph-container">
              <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 302"><path fill="#27346a" d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.39 13.39 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971l-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221c.366-1.873.683-3.696.957-5.477q-2.334-1.236 0 0c3.671-23.407-.025-39.34-12.686-53.765"/><path fill="#27346a" d="M102.397 68.84a11.7 11.7 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a102 102 0 0 1 6.177 1.182a90 90 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287c3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.72 11.72 0 0 1 6.509-8.74"/><path fill="#2790c3" d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48l9.173-58.136l.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55c4.503-23.15 2.173-42.478-9.739-56.054c-3.613-4.112-8.1-7.508-13.327-10.28c-.283 1.79-.59 3.604-.957 5.477"/><path fill="#1f264f" d="M216.952 72.128a90 90 0 0 0-5.818-1.49a110 110 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.6 11.6 0 0 0-5.053 1.149a11.68 11.68 0 0 0-6.51 8.74l-15.582 98.798l-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221c.367-1.873.675-3.688.958-5.477q-4.682-2.47-10.14-4.279a83 83 0 0 0-2.77-.865"/></svg>
              <div className="line" />
              </div>
              <div>
                <p className="design-changes2">Server payments for April</p>
                <p className="time">21 Dec 9:34 PM</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="server-button">Server</button>
                <button className="payment-button">Payment</button>
              </div>
              </div>

            <div className="icon-paragraph-container">
              <div className="icon-container">
              <Icon className="file-document"
              icon="mdi:file-document" />
              <div className="line" />
              </div>
              <div>
                <p className="design-changes2">New card added for order #4395133</p>
                <p className="time">20 Dec 2:20AM</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="card-button">Card</button>
                <button className="button-number">#439</button>
              </div>
              </div>

            <div className="icon-paragraph-container">
              <div className="icon-container">
              <Icon className="shield-check"
              icon="mdi:shield-check" />
              <div className="line" />
              </div>
              <div>
                <p className="design-changes2">Unlock packages for development</p>
                <p className="time">18 Dec 4:54 AM</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="decelop-button">Decelop</button>
              </div>
              </div>

            <div className="icon-paragraph-container">
              <div className="icon-container">
              <Icon className="shield-check2"
              icon="mdi:shield-check" />
              <div className="line" />
              </div>
              <div>
                <p className="design-changes2">New message unread</p>
                <p className="time">16 Dec</p>
                <p className="people-care">People care about how you see the world,how you think,what motivates you,what your're struggling with or afraid of.</p>
                <button className="message-button">Message</button>
              </div>
            </div>
          </div>
          </div>
    </>
  );
}