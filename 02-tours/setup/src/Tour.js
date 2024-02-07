import React, {  useState } from 'react';

const Tour = ({id,price,info,name,image,removeTour}) => {
  const [showmore,setshowmore] = useState(false)

  return (
    <section className='single-tour'>
      <img src={image} alt={name} />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <div>
        <div className='Parabtn'>
        <p>{showmore?info :`${info.substring(0,200)}...`}
        <button onClick={()=>setshowmore(!showmore)}>{showmore? `Show Less` : `Show More`}</button>
        </p>
        
        </div>
      
      <button onClick={()=>removeTour(id)} className='delete-btn'>Not Intrested</button>
      </div>
    </section>
  )
};

export default Tour;
