import React from 'react'
import './widget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'

const Widget = ({type}) => {

    let data;

    /// temp
    const amount = 500
    const diff = 30

    switch (type) {
        case 'customer':
            data = {
                title: 'CUSTOMER',
                isMoney: false,
                link: "See detail",
                icon: <FontAwesomeIcon className='icon' style={{color:'crimson' , backgroundColor: '#ff000033' }}  icon={faUser} />
            }        
            break;
            case 'order':
            data = {
                title: 'ORDER',
                isMoney: false,
                link: "view all Order",
                icon: <FontAwesomeIcon className='icon' style={{color:'goldenrod' , backgroundColor: '#daa52033' }} icon={faCartShopping} />  
            }        
            break;
            case 'earnings':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: "View net earning",
                icon: <FontAwesomeIcon className='icon' style={{color:'green' , backgroundColor: '#00800033' }} icon={faCircleDollarToSlot} />
            }        
            break;
            case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: "Withdraw money",
                icon: <FontAwesomeIcon className='icon' style={{color:'purple' , backgroundColor: '#80008033' }} icon={faBuildingColumns} />
            }        
            break;
                
    
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount} </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage">
            <FontAwesomeIcon  icon={faAngleUp} />
            {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget