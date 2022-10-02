import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'



const ModalMar = () => {
    const {peopData,isModalOpen,closeModalMar} = useGlobalContext()

    const singleInfo = peopData.filter((d) => {
        return (d.bMonth === "March")
    })
    return (
    <div className={isModalOpen.mar ? "modal-overlay show-modal" : "modal-overlay"}>
        
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
        <button onClick={closeModalMar} className="close-btn"><FaTimes/></button>
        
    </div>
  )
}


export default ModalMar