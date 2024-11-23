import React from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>DashBoard</span>
        </div> 
        <hr />

        <div className="bottom">
            <ul>
                <p className="title">MAIN</p>
                <li>
                <FontAwesomeIcon className='icon' icon={faBars} />
                    <span>DashBoard</span>
                </li>

                <p className="title">LISTS</p>
                
                <li>
                <FontAwesomeIcon className='icon' icon={faUserTie} />
                    <span>Users</span>
                </li>
                <li>
                <FontAwesomeIcon className='icon' icon={faCartShopping} />
                    <span>Products</span>
                </li>
                <li>
                <FontAwesomeIcon className='icon' icon={faStore} />
                    <span>Orders</span>
                </li>


                <p className="title">CHARTS</p>
                <li>
                <FontAwesomeIcon className='icon' icon={faChartSimple} />
                    <span>Stats</span>
                </li>
                <li>
                <FontAwesomeIcon className='icon' icon={faBell} />
                    <span>Notification</span>
                </li>


                <p className="title">SERVICE</p>
                <li>
                <FontAwesomeIcon className='icon' icon={faLaptopMedical} />
                    <span>System Health</span>
                </li>
                <li>
                <FontAwesomeIcon className='icon' icon={faGear} />
                    <span>Settings</span>
                </li>


                <p className="title">USER INTERFACE</p>
                <li>
                <FontAwesomeIcon className='icon' icon={faUser} />
                    <span>Profile</span>
                </li>
                <li>
                <FontAwesomeIcon className='icon' icon={faCalendarDays} />
                    <span>Calender</span>
                </li>
                <li>
                <FontAwesomeIcon className='icon' icon={faCircleQuestion} />
                    <span>Help</span>
                </li>
                <li>
                <FontAwesomeIcon className='icon' icon={faRightFromBracket} />
                    <span>LogOut</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar