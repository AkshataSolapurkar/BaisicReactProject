import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setindex]=useState(0)
  const {name,job,image,text}=people[index]
  const randomnumber=()=>{
    let randonnum = Math.floor(Math.random() * people.length) 
    console.log(randonnum);
    if(randonnum === index){// for the repitation avoidance 
      randonnum = index + 1
    }
    setindex(checknumber(randonnum))
  }
   const checknumber=(number)=>{
    if(number > people.length - 1) {
      return 0
    }
    if(number < 0){
      return people.length - 1
    }
    return number
   }
  const nextperson =()=>{
     setindex((index)=>{
     let newIndex = index + 1
     return checknumber(newIndex)
     })
  }
  const prevperson =()=>{
    
    setindex((index)=>{
      let newIndex = index-1
     return checknumber(newIndex)
    })
 }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={image}  className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
        
      </div>
      <h4 className='author'>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
      <button className="prev-btn" onClick={prevperson}>
        <FaChevronLeft />
      </button>
      <button className="prev-btn" onClick={nextperson}>
        <FaChevronRight />
      </button>
      
      </div>
      <button onClick={randomnumber} className='random-btn'>Suprise me</button>
    </article>
  )
};

export default Review;
