import React from 'react';
import './Header.css';
class Header extends React.Component {
  render() {
    return (
      <div id="wrap-all-header">
        <div id="header-container">
          <div className="header-sections">
            <i className="big instagram icon"></i>
            <div id="vl"></div>
            <h2>Samagram</h2>
          </div>
          <div className="header-sections">
            <div class="input-icons">
              <i class="small search icon search-icon"></i>
              <input
                class="input-field"
                type="input"
                placeholder="Search"
              ></input>
            </div>
          </div>
          <div className="header-sections">
            <a href="#" className="nav-icon-anchor">
              <i className="big compass outline icon"></i>
            </a>
            <a href="#" className="nav-icon-anchor">
              <i className="big heart outline icon"></i>
            </a>
            <a href="#" className="nav-icon-anchor">
              <i className="big user outline icon"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
