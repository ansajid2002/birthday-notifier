import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'



const ModalJan = () => {
    const {peopData,isModalOpen,closeModalJan} = useGlobalContext()

    const singleInfo = peopData.filter((d) => {
        return (d.bMonth === "January")
    })
    return (
    <div className={isModalOpen.jan ? "modal-overlay show-modal" : "modal-overlay"}>
        
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
        <button onClick={closeModalJan} className="close-btn"><FaTimes/></button>
        
    </div>
  )
}


export default ModalJan