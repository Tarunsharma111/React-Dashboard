import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './customer.scss'
import Navbar from '../../components/navbar/Navbar'
import DataTable from '../../components/dataTable/DataTable'

const Customer = () => {
  return (
    <div className="customers">
      <Sidebar />

      <div className="customerContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  )
}

export default Customer