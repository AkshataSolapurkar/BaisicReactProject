import React, { useState } from 'react';
import Menu from './Menu';
import Categories from"./Categories"
import items from './data';

function App() {
  const [MenuItems, setMenuItems] = useState(items)
  const [MenuCategories, setCategories] = useState(Categories)
  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories/>
      <Menu items={MenuItems}/>
    </section>
  </main>
}

export default App;
