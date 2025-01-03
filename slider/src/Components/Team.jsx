import React, { useState } from 'react'
import teams from './data';
import './Team.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Team = () => {

const [index,setIndex]=useState(0);
const {image,text}=teams[index];

const checkNumber=(number)=>{
    if(number>teams.length-1){
        return 0;
    }
    if(number<0){
        return teams.length-1;
    }
    return number;
}

const previous=()=>{
setIndex((index)=>{
    let newIndex=index-1;
    return checkNumber(newIndex);
})
}

const next=()=>{
    setIndex((index)=>{
        let newIndex=index+1;
        return checkNumber(newIndex);
    })
}

  return (
    
    
        <div className="container">
             <div className="img-container">
                <img src={image} alt="" />
                </div>
            <div className="text-container">
           <p>{text}</p>
                </div>
                <div className="button-container">
                    <button className="prev-btn" onClick={previous}>
                        <FaChevronLeft />
                    </button>
                    <button className="next-btn" onClick={next}> 
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        
  

  )
}

export default Team