import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import './home.scss'
import Widget from '../widgets/Widget'
import Featured from '../featured/Featured'
import Chart from '../chart/Chart'
import List from '../List/List'
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
            <div className="charts" >
              <Featured />
              <Chart title='Last 6 months (Revenue)' aspect= {1.9/1} />
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <List />
            </div>
        </div>
    </div>
  )
}

export default Home