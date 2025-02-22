
import React,{useState} from "react";
import './../styles/App.css';
import citiesArr  from "./citiesData.js"




const App = () => {

  const [sub, setSub] = useState("")
  const [fileredCities, setFileredCities] = useState("")


  function updateSub(e) {
    let value = e.target.value
    setSub(value)
   let arr =  citiesArr.filter(city => city.toLowerCase().includes(value.toLowerCase()))
   setFileredCities(arr)
  }
 
  return (
    <div className="main">
      <form>
         <input type="text"  placeholder="enter someting ... "
           onChange={updateSub}
           value={sub}
         
         />
      </form>

      <ul className="suggestions">
        {
         
         fileredCities && fileredCities.length>0 &&  fileredCities.map((city, index) => {
                return (
                    <li key={index}>
                        {city}  
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default App
