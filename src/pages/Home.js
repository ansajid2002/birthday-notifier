import React from 'react'
import { useGlobalContext } from '../context'
const Home = () => {

const {peopData} =useGlobalContext()
  
  const day= new Date()
  const currdate=day.getDate()
  const currmonth = day.getMonth()
  console.log(currdate,currmonth )
  
  const months =["January","February","March","April","May","June","July","August","September","October","November","December"]
//////////////////////////////////////////////
  let upbd =[]
  const  p =() => {
    
      for (let i=0;i<peopData.length;i++) {
        if ( months.indexOf(peopData[i].bMonth) === currmonth ) {
          
          if (peopData[i].bDate === currdate) {
            
              upbd.push(peopData[i])  
                 
          }}}
  }
  p()  //gives me upcoming person object
  let indexDate=peopData.indexOf(upbd[0]) //gives me upcoming person objects index
  console.log(upbd)

  let newArr = peopData.slice(indexDate,indexDate+10) //give newArr with length=5
  
  let missingnum = 10 - newArr.length  //give how much objects are less
 
////////for continuation/////////////////////
  const continuation = () => {
    
      if (newArr.length < 5) {
        for (let i=0;i<missingnum;i++) {
          newArr.push(peopData[i])       
      }   
    }
  }
  continuation()
  /////////////////////////////////////////// 
  console.log(newArr)
  
  return (
    <div className="hbd-container">
      {newArr.map((n,index) => {
        return (
          <div key={index}>{(months.indexOf(n.bMonth) === currmonth && n.bDate === currdate) && <HappyBd {...n}/>}</div>
        )
      })}

    <h2 className={newArr ? "no-check-bd" :"check-bd"}>Check for the upcoming birthdays</h2>
    </div>
  )
}

const HappyBd = ({name,img,bDate,bMonth}) => {
  return (
    <section className="hbd-info">
      <p className='hbd-title'>Happy Birthday</p>
      <img src={img} alt="dd"  className="hbd-img"/>        
      <h1 className="hbd-name">{name}</h1>
      <p className="hbd-date"> {bDate} {bMonth}</p>
  </section>
  )
   
}

export default Home