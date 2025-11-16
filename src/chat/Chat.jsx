import { Icon } from "@iconify/react";
import { chatData, user1, user2, bars } from "../data/chat";
import './Chat.css'


export function Chat() {

  return (
    <>
      <div className="profile-search">
        <p className="profile-overview">Chat</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>
      <div className="mark-david-image-container">
        <div className="image-and-para">
          <img className="image-4"
            src="/images/image4.jpg" />
          <div>
            <p className="mark-name">Mark David</p>
            <p className="mark-email">markdavid@gmail.com</p>
          </div>
        </div>
        <div>
          <button className="appButton2">App</button>
          <button className="messageButton">Message</button>
          <button className="settingButton">Setting</button>
        </div>
      </div>
      <div className="chat-data-divs-container">
        <div className="search-chatdata-container">
          <div className="search-div">Search</div>
          <div className="chatdata-container">
            {chatData.map((chatdata) => (
              <div className="ipsum-chatdata-container">
                <div key={chatdata.id} className="chatdata-div">
                  <div className="chatdata-profile">
                    <img className="chatdata-image" src={chatdata.image} />
                    <div>
                      <p className="chatdata-name">{chatdata.name}</p>
                      <p className="chatdata-role">{chatdata.role}</p>
                    </div>
                  </div>
                  <p class="five-minute">5m</p>
                </div>
                <p className="ipsum-dolor">Lorem ipsum dolor sit amet</p>
              </div>
            ))}
          </div>
        </div>
        <div className="chats-container">
          <div className="empty-august-container">
            <div className="chat-empty-div"></div>
            <p className="august-21">August 21</p>
            <div className="chat-empty-div"></div>
          </div>
          {user1.map((user1) => (
            <div className="user1-div">
              <img className="user1-image"
              src={user1.image} />
              <div className=" conversation-container">
                <p className="user1-conversation">{user1.conversation}</p>
                <p className="user1-time">{user1.time}</p>
              </div>
            </div>
          ))}
          {user2.map((user2) => (
            <div className="user2-div">
              <div className=" conversation-container">
                <p className="user2-conversation">{user2.conversation}</p>
                <p className="user2-time">{user2.time}</p>
              </div>
              <img className="user2-image"
              src={user2.image} />
            </div>
          ))}
          <div className="voice-message-container1">
            <div class="voice-message">
              <div className="play-icon">
                <Icon icon="mdi:play" width="20" height="20" color="white" />
              </div>
              <div>
                <div className="waveform">
                  {bars.map((bar, index) => (
                    <div
                      key={index}
                      className="bar"
                      style={{
                        height: `${bar.height}px`,
                        backgroundColor: index < 33 ? 'purple' : 'grey',
                      }}
                    />
                  ))}
                </div>
                <span className="duration">0:56</span>
              </div>

            </div>
            <p className="time2">06:00 pm</p>
          </div>
          <div className="voice-message-container2">
            <div class="voice-message">
              <div className="play-icon">
                <Icon icon="mdi:play" width="20" height="20" color="white" />
              </div>
              <div>
                <div className="waveform">
                  {bars.map((bar, index) => (
                    <div
                      key={index}
                      className="bar"
                      style={{
                        height: `${bar.height}px`,
                        backgroundColor: index < 33 ? 'purple' : 'grey',
                      }}
                    />
                  ))}
                </div>
                <span className="duration">0:56</span>
              </div>

            </div>
            <p className="time2">06:00 pm</p>
          </div>
          {user2.map((user2) => (
            <div className="user2-div">
              <div className=" conversation-container">
                <p className="user2-conversation">{user2.conversation}</p>
                <p className="user2-time">{user2.time}</p>
              </div>
              <img className="user2-image"
              src={user2.image} />
            </div>
          ))}
          {user1.map((user1) => (
            <div className="user1-div">
              <img className="user1-image"
              src={user1.image} />
              <div className=" conversation-container">
                <p className="user2-conversation">{user1.conversation}</p>
                <p className="user1-time">{user1.time}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}