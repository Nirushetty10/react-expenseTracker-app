import React, {useState} from 'react'
import data from "../data.json"
import Details from './Details'
import "./App.css"
import DetailsForm from './DetailsForm';

function App() {
   let[details, setDetails] = useState(data)
   let handletNewDetails =(data)=>{
      setDetails((oldDetails)=>{
         return [data, ...oldDetails]
      })
   }


  return (
    <div className="card-box">
        <div className="newDeatails">
            <DetailsForm getDetailsFromForm={handletNewDetails}/>
        </div>
        <div className="detailsBox">
         {details.map((detail)=>{
            return <Details key={detail.id} name={detail.name} phone={detail.phone} place={detail.place}/>
         })}
        </div>
        
    </div>
  )
}

export default App