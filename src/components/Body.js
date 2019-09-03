import React from 'react';
import './Body.css';
import ImageArray from './ImageArray';

class Body extends React.Component {
  constructor() {
    super();
  }
  renderContent = i => {
    console.log();
  };
  render() {
    const mpZero = {
      margin: 0,
      padding: 0
    };
    const active = {
      borderTop: '1px solid black'
    };
    return (
      <div id="body">
        <div id="body-container">
          <div id="profile-image">
            <img src="https://www.absoluteanime.com/naruto/sasuke.jpg" />
          </div>
          <div id="profile-user-info">
            <h2>Sasuke Uchiha</h2>
            <button>Edit Profile</button>
            <a>
              <i className="big cog icon"></i>
            </a>
            <ul>
              <li>
                <span>11 </span> post
              </li>
              <li>
                <span>19 </span> followers
              </li>
              <li style={mpZero}>
                <span>3 </span> following
              </li>
            </ul>
          </div>
        </div>
        <div id="post-nav">
          <ul>
            <a style={active}>
              <li>
                <i
                  className=" images outline
              icon"
                ></i>

                <h5>POSTS</h5>
              </li>
            </a>
            <a>
              <li>
                <i className="tv icon"></i>
                <h5>IGTV</h5>
              </li>
            </a>
            <a>
              <li>
                <i className="flag outline icon"></i>
                <h5>SAVED</h5>
              </li>
            </a>
            <a>
              <li style={mpZero}>
                <i className="id badge outline icon"></i>
                <h5>TAGGED</h5>
              </li>
            </a>
          </ul>
        </div>
        <div id="image-array">
          <ul>{ImageArray}</ul>
        </div>
      </div>
    );
  }
}

export default Body;
