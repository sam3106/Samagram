import React from 'react';
import './Body.css';

class Body extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="body">
        <div id="body-container">
          <div className="profile-info">
            <img
              id="profile-pic"
              src="https://www.absoluteanime.com/naruto/sasuke.jpg"
            />
            <div className="profile-user-info">
              <h2>Sasuke Uchiha</h2>
              <button id="edit-profile-button">Edit Profile</button>
              <a>
                <i class="big cog icon"></i>
              </a>
            </div>
            <div>
              <ul>
                <li>11 post</li>
                <li> 19 followers</li>
                <li>3 following</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
