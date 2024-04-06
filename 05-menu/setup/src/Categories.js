import React from 'react';

const Categories = ({FilterItems}) => {
  return <div className="btn-container">
    <button className="filter-btn" onClick={()=> FilterItems('all')}>All</button>
    <button className="filter-btn" onClick={()=> FilterItems('breakfast')}>BreakFast</button>
    <button className="filter-btn" onClick={()=> FilterItems('lunch')}>Lunch</button>
    <button className="filter-btn" onClick={()=> FilterItems('shakes')}>Shakes</button>
  </div>;
};

export default Categories;
