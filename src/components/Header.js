import React,{useState} from 'react'
import {FaBars} from "react-icons/fa"
import {Link} from "react-router-dom"
import { useGlobalContext } from '../context'

const Header = () => {

    const {openSidebar} = useGlobalContext()
  return (
    <header className="header">
        <button className="sidebar-toggle" onClick={openSidebar}>
            <FaBars/>
        </button>
        <ul className="pages">
            <li className="pages-list">
                <Link to="/home" className="pages-link">HOME</Link>
            </li>
            <li className="pages-list">
                <Link to="/Upbd" className="pages-link">UPCOMING BIRTHDAYS</Link>
            </li>
            <li className="pages-list">
                <Link to="/peoples" className="pages-link">PEOPLES</Link>
            </li>
            <li className="pages-list">
                <Link to = "/update" className="pages-link">UPDATE</Link> 
            </li>
        </ul>
    </header>
  )
}

export default Header