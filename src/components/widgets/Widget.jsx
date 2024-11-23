import React from 'react'
import './widget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Widget = (type) => {
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">CUSTOMER</span>
            <span className="counter">711</span>
            <span className="link">see detail</span>
        </div>
        <div className="right">
            <div className="percentage">
            <FontAwesomeIcon  icon={faAngleUp} />
            45%
            </div>
            <FontAwesomeIcon className='icon' icon={faUser} />
        </div>
    </div>
  )
}

export default Widget