import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import './home.css'
import Widget from '../widgets/Widget'
import Featured from '../featured/Featured'
import Chart from '../chart/Chart'
const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="widgets">
            <Widget type="customer" />
            <Widget type="order" />
            <Widget type="earnings" />
            <Widget type="balance" />
            </div>
            <div className="charts">
              <Featured />
              <Chart />
            </div>
        </div>
    </div>
  )
}

export default Home