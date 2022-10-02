import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'



const ModalDec = () => {
    const {peopData,isModalOpen,closeModalDec} = useGlobalContext()

    const singleInfo = peopData.filter((d) => {
        return (d.bMonth === "December")
    })
    return (
    <div className={isModalOpen.dec ? "modal-overlay show-modal" : "modal-overlay"}>
        
        <div className="modal-container">
            {singleInfo.map((s,index) => {
    
                    return (
                        <div className="modal-person" key={index}>
                            <div className="img-div"><img src={s.img} alt="sept" className="modal-img" /></div>
                            <h1 className="modal-name">{s.name}</h1>
                            <p className="modal-date">{s.bDate} {s.bMonth}</p>
                        </div>
                    )
                })
            }   
        </div>
        <button onClick={closeModalDec} className="close-btn"><FaTimes/></button>
        
    </div>
  )
}


export default ModalDec