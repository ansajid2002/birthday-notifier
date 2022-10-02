import React,{useContext,createContext,useState} from "react";
import data from "./daja"

export const myContext= createContext()

    
export default function ConPro(props) {
    
    const [arr,setArr] = useState(data)
    
/////////////////////////////////////////////////////////////////
    const peopData = arr;
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
             'July', 'August', 'September', 'October', 'November', 'December'];

    const sorter = (a, b) => { 
        if (a.bMonth !== b.bMonth) {
        return months.indexOf(a.bMonth) - months.indexOf(b.bMonth)
        }
        else {
            return (a.bDate - b.bDate)
        }
    }
    peopData.sort(sorter)
///////////////////////////////////////////////////////////////////
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    
    const openSidebar =() => {
        setIsSidebarOpen(true)
    }
    const closeSidebar =() => {
        setIsSidebarOpen(false)
    }

    //modals
    const [isModalOpen,setIsModalOpen] = useState({
        jan:false,
        feb:false,
        mar:false,
        apr:false,
        may:false,
        jun:false,
        jul:false,
        aug:false,
        sep:false,
        oct:false,
        nov:false,
        dec:false,

    })
    const openModalJan =() => {
        setIsModalOpen((prev) => {return {...prev,jan:true}})
    }
    const openModalFeb =() => {
        setIsModalOpen((prev) => {return {...prev,feb:true}})
    }
    const openModalMar =() => {
        setIsModalOpen((prev) => {return {...prev,mar:true}})
    }
    const openModalApr =() => {
        setIsModalOpen((prev) => {return {...prev,apr:true}})
    }
    const openModalMay =() => {
        setIsModalOpen((prev) => {return {...prev,may:true}})
    }
    const openModalJun =() => {
        setIsModalOpen((prev) => {return {...prev,jun:true}})
    }
    const openModalJul =() => {
        setIsModalOpen((prev) => {return {...prev,jul:true}})
    }
    const openModalAug =() => {
        setIsModalOpen((prev) => {return {...prev,aug:true}})
    }
    const openModalSep =() => {
        setIsModalOpen((prev) => {return {...prev,sep:true}})
    }
    const openModalOct =() => {
        setIsModalOpen((prev) => {return {...prev,oct:true}})
    }
    const openModalNov =() => {
        setIsModalOpen((prev) => {return {...prev,nov:true}})
    }
    const openModalDec =() => {
        setIsModalOpen((prev) => {return {...prev,dec:true}})
    }
    
    ///////////////close Modals////////////////////////////////
    const closeModalJan =() => {
        setIsModalOpen((prev) => {return {...prev,jan:false}})
    }
    const closeModalFeb =() => {
        setIsModalOpen((prev) => {return {...prev,feb:false}})
    }
    const closeModalMar =() => {
        setIsModalOpen((prev) => {return {...prev,mar:false}})
    }
    const closeModalApr =() => {
        setIsModalOpen((prev) => {return {...prev,apr:false}})
    }
    const closeModalMay =() => {
        setIsModalOpen((prev) => {return {...prev,may:false}})
    }
    const closeModalJun =() => {
        setIsModalOpen((prev) => {return {...prev,jun:false}})
    }
    const closeModalJul =() => {
        setIsModalOpen((prev) => {return {...prev,jul:false}})
    }
    const closeModalAug =() => {
        setIsModalOpen((prev) => {return {...prev,aug:false}})
    }
    const closeModalSep =() => {
        setIsModalOpen((prev) => {return {...prev,sep:false}})
    }
    const closeModalOct =() => {
        setIsModalOpen((prev) => {return {...prev,oct:false}})
    }
    const closeModalNov =() => {
        setIsModalOpen((prev) => {return {...prev,nov:false}})
    }
    const closeModalDec =() => {
        setIsModalOpen((prev) => {return {...prev,dec:false}})
    }
    return (
        <myContext.Provider value={{
            peopData,
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            isModalOpen,
            openModalJan,
            openModalFeb,
            openModalMar,
            openModalApr,
            openModalMay,
            openModalJun,
            openModalJul,
            openModalAug,
            openModalSep,
            openModalOct,
            openModalNov,
            openModalDec,
            closeModalJan,
            closeModalFeb,
            closeModalMar,
            closeModalApr,
            closeModalMay,
            closeModalJun,
            closeModalJul,
            closeModalAug,
            closeModalSep,
            closeModalOct,
            closeModalNov,
            closeModalDec
        }}>
            {props.children}
        </myContext.Provider>
    )
}
export const useGlobalContext =() => {
    return useContext(myContext)
}