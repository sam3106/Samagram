import React from 'react';
import './Body.css';

class Body extends React.Component {
  constructor() {
    super();
    const Style = {
      fontSize: '84px',
      textAlign: 'center'
    };
  }

  render() {
    return (
      <div id="body">
        <div id="body-container">
          <div id="profile-image">
            <img src="https://www.absoluteanime.com/naruto/sasuke.jpg" />
          </div>
          <div className="profile-user-info">
            <h2>Sasuke Uchiha</h2>
            <button id="edit-profile-button">Edit Profile</button>
            <a>
              <i class="big cog icon"></i>
            </a>
            <ul>
              <li>
                <span>11 </span> post
              </li>
              <li>
                <span>19 </span> followers
              </li>
              <li id="lastLi">
                <span>3 </span> following
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
