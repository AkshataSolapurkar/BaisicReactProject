import React, { useState } from 'react';
import Menu from './Menu';
import Categories from"./Categories"
import items from './data';

function App() {
  const [MenuItems, setMenuItems] = useState(items)
  const [MenuCategories, setCategories] = useState(Categories)
  const FilterItems =( category )=>{
    if(category ==="all"){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((itemz)=> itemz.category ===  category)
    setMenuItems(newItems)
  }
  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories FilterItems={FilterItems} />
      <Menu items={MenuItems}/>
    </section>
  </main>
}

export default App;
