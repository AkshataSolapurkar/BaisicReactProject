import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
 const [loading,setLoading]=useState(true)
 const [tour,setTour]=useState([])

 const FetchTour =async ()=>{//there are shit whole chances of error happening here therefore we use the try andc catch method
  setLoading(true)
  try {
    const temp =await fetch(url)
    const tour= await  temp.json();
    console.log(tour)
    setLoading(false)
    setTour(tour)
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
 }
 
 useEffect(()=>{//renders the data on every time the component is renderd
  FetchTour()
  console.log("renders")
 },[])

 if(loading){
  return <main>
    <Loading />
  </main>
 }
 return <main>
  <Tours Tours={tour}/>
 </main>
}

export default App
