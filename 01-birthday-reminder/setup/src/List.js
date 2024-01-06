import React from 'react';

const List = ({people}) => {//if the main list function to be exportedis a arrow function then the paramiter has to be passed in {}
  return (
    <>
    {people.map((person)=>{
      const {id,name,age,image}=person
      return(
        <article key={id} className='person'>
          <img src={image} alt="" />
          <div>
            <h3>{name}</h3>
            <p>{age}</p>
          </div>
        </article>
      )
    })}
    </>
  );
};

export default List;
