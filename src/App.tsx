import { useEffect, useState } from "react";
import { Loading } from "./component/Loading";

function App() {
const [user,setuser]=useState([])
const [Loding,setLoading]=useState(true)

const getuser = async ()=>{
  try {
    setLoading(false)
    const response =await fetch('https://api.github.com/users')
  setuser(await response.json())
  console.log(user)
  } catch (error) {
    console.log(error)
  }
}
    

useEffect(()=>{
   getuser();
 },[]) 

if(Loding){
  return<Loading />
}

  return (
    <>
      <h2 className="p-[20px] text-center sm:text-[2.4rem] text-[1.8rem]">List of github user</h2>
      <div className="container mx-auto my-0 p-[20px]">
        <div className="flex flex-wrap justify-between mt-5">

            {user.map((currentelemet,index)=>{
              return(
                <div className="sm:min-w-[33%] min-w-full" key={index}>
                 <div className="card bg-gray-700 flex mb-[20px] text-white rounded-md p-[10px]">
                 <div className="">
                  <img className="w-[115px]" src={currentelemet.avatar_url} alt="" />
                </div>
                  <div className="flex text-left flex-col">

                 <h4 className="text-left ml-2">{currentelemet.login}</h4>
                 <a className="ml-2" href={currentelemet.html_url}>View Profile</a>
                 <div className="p-[10px] mt-2 flex justify-between gap-2">
                 <div className="flex flex-col">
                  <span>article</span>
                  <span>32</span></div>
                 <div className="flex flex-col">
                  <span>Followers</span>
                  <span>32</span></div>
                 <div className="flex flex-col">
                  <span>Rating</span>
                  <span>32</span></div>
                 </div>
              </div>
            </div>
                </div>
               
              )
            })}
            
            
           
            

          </div>
        </div>
      
    </>
  )
}

export default App
