import axios from 'axios';
import {useEffect, useState} from "react";
import Card from "./components/Card";
const App=()=> {
  const[burgers,setBurgers]=useState(null)
  const fetchData= async ()=>{
      const burgerData=await  axios.get('http://localhost:8000/burgers')
      const data=Object.keys(burgerData.data.data).map(burger=>burgerData.data.data[burger])
      setBurgers(data)
    }
  useEffect(()=>{
      fetchData()
  },[])
    console.log(burgers)
  return (
    <div className="App">
        <h1>My Favorite Burgers</h1>
        <div className="burger-feed">
            {burgers?.map(burger=><Card key={burger.id} burger={burger}/>)}
        </div>
    </div>
  )
}

export default App;
