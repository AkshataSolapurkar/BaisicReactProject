import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople]= useState(data);
  return <main>
    <section className='container'>
      {people.length} Birthdays Today
      <List people={people} /*the data of people accepted by the usestate ispassed to the list to iterate ans=d show though a prop named people */ />
      <button onClick={()=>setPeople([])}>Clear All</button>
    </section>
  </main>;
}

export default App;
