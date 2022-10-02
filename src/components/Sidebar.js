import React, { useState } from 'react'
import {FaTimes} from "react-icons/fa"
import { useGlobalContext } from '../context'


const Sidebar = () => {

    const {isSidebarOpen,closeSidebar,openModalJan,openModalFeb,openModalMar,
        openModalApr,openModalMay,openModalJun,openModalJul,openModalAug,
        openModalSep,openModalOct,openModalNov,openModalDec} = useGlobalContext()
    return (
            <div className={isSidebarOpen ?  " sidebar show-sidebar" : " sidebar hide-sidebar"}>
                
    
                <div className='sidebar-flex'>
                <div className="months">
                    <h1 className="sidebar-title">Months</h1>
                    <ul className="sidebar-month-list">
                        <li className="sidebar-lists"><button onClick={openModalJan} className="sidebar-buttons">January</button></li>
                        <li className="sidebar-lists"><button onClick={openModalFeb} className="sidebar-buttons">February</button></li>
                        <li className="sidebar-lists"><button onClick={openModalMar} className="sidebar-buttons">March</button></li>
                        <li className="sidebar-lists"><button onClick={openModalApr} className="sidebar-buttons">April</button></li>
                        <li className="sidebar-lists"><button onClick={openModalMay} className="sidebar-buttons">May</button></li>
                        <li className="sidebar-lists"><button onClick={openModalJun} className="sidebar-buttons">June</button></li>
                        <li className="sidebar-lists"><button onClick={openModalJul} className="sidebar-buttons">July</button></li>
                        <li className="sidebar-lists"><button onClick={openModalAug} className="sidebar-buttons">August</button></li>
                        <li className="sidebar-lists"><button onClick={openModalSep} className="sidebar-buttons">September</button></li>
                        <li className="sidebar-lists"><button onClick={openModalOct} className="sidebar-buttons">October</button></li>
                        <li className="sidebar-lists"><button onClick={openModalNov} className="sidebar-buttons">November</button></li>
                        <li className="sidebar-lists"><button onClick={openModalDec} className="sidebar-buttons">December</button></li>
                    </ul>
                </div>    
                <button onClick={closeSidebar} className="close-btn"><FaTimes/></button>
                </div>
            </div>        
  )
}

export default Sidebar