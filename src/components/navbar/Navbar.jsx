import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">

        <div className="search">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon  icon={faMagnifyingGlass} />
        </div>

        <div className="items">
          <div className="item">
            <FontAwesomeIcon className='icon' icon={faGlobe} />
            <span>English</span>
          </div>

          <div className="item">
            <div className="form-check form-switch icon">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            </div>
          </div>
          

          <div className="item">
          <FontAwesomeIcon className='icon' icon={faExpand} />
          </div>

          <div className="item">
          <FontAwesomeIcon className='icon' icon={faBell} />
            <div className="counter">5</div>
          </div>

          <div className="item">
          <FontAwesomeIcon className='icon' icon={faMessage} />
            <div className="counter">4</div>
          </div>

          <div className="item">
            <img className="profileimg" src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
