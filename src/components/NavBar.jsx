import React from 'react';
import { NAV_BAR_DATA } from '../Constants';
import './stylesheet/NavBar.css'

export default function NavBar() {

  return (
    <div className='nav-bar'>
       <ul>
        <li>{NAV_BAR_DATA[0].home}</li>
        <li>{NAV_BAR_DATA[0].news}</li>
        <li>{NAV_BAR_DATA[0].about}</li>
        <li>{NAV_BAR_DATA[0].signin}</li>
        <li>{NAV_BAR_DATA[0].contact}</li>
       </ul>
    </div>
  )
}
