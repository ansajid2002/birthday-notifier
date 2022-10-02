import React, { useEffect } from 'react'
import {useGlobalContext} from "../context"
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Countdown from "react-countdown"
const Upbd = () => {
  
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
          if (peopData[i].bDate > currdate) {
            return (
              upbd.push(peopData[i])  
              )   
          }}
          else if ( months.indexOf(peopData[i].bMonth) === currmonth + 1 ) {
              if (peopData[i].bDate > 0) {
                return (
                  upbd.push(peopData[i])  
                  )   
              } 
          }
        }
  }
  p()  //gives me upcoming person object
  let indexDate=peopData.indexOf(upbd[0]) //gives me upcoming person objects index
  console.log(upbd)
  let newArr = peopData.slice(indexDate,indexDate+5) //give newArr with length=5
  
  let missingnum = 5 - newArr.length  //give how much objects are less
 
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
  //----------------SLIDER---------------//

  const [index,setIndex] = React.useState(0)
 
  
  useEffect(() => {
    const lastIndex = newArr.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, newArr]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="upbd-section">
      
      <div className="slider">
        {newArr.map((singlePeop,peopIndex) => {

          const {name,img,bDate,bMonth} = singlePeop

          let position = "nextSlide"

          if(peopIndex === index) {
            position = "activeSlide"
          }
           
          if (peopIndex === index - 1 || 
            (index === 0 && peopIndex === newArr.length - 1) ){
            position = "prevSlide"
          }
          ////FOR FINDING OUT TIME FOR COUNTDOWN
          let year=day.getFullYear()
          const bdStr= `${bMonth} ${bDate}, ${year}`
          console.log(bdStr)

          let timeTillNow = Date.now()
          let timeTillBd = Date.parse(bdStr)
          let remainingTime;
          
          if (timeTillNow<timeTillBd) {
            remainingTime = timeTillBd - timeTillNow
          }
          else {
            year=year + 1
            remainingTime = Date.parse(`${bMonth} ${bDate}, ${year}`) - timeTillNow
          }
          ///////////////////////////////////////////////////////////////////
          return (
            <article className={position}>
              
              <img src={img} alt="iii" className="slider-img"/>
              <h2 className="slider-name">{name}</h2>
              <p className="slider-info">{bDate} {bMonth}</p>
              <div className="countdown-grid">
                  <p className="countdown-info">
                  Birthday in : 
                  </p>
                  <div className="countdown-number"><Countdown date={Date.now()  + remainingTime} >
                                  <p className="countdown-msg">s</p>
                  </Countdown> 
                  </div>
                  <p className="countdown-notation">Days : Hrs : Mins : sec</p>
              </div>
               
                   
            </article>
          )
        })}
        
      </div>
      <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
    </section>
  )
}

export default Upbd