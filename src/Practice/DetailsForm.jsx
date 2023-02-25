import React,{useState} from 'react'

function DetailsForm(props) {
    let[name, setName] =useState("")
    let[phone, setPhone] =useState("")
    let[place, setPlace] =useState("")

    let handleNameChange = (event)=>{
        setName(event.target.value)
     }
     let handlePhoneChange = (event)=>{
        setPhone(event.target.value)
     }
     let handlePlaceChange = (event)=>{
        setPlace(event.target.value)
     }
     let handleSubmitForm = (event) =>{
         event.preventDefault();
         let details = {
            id: Math.random().toString(),
            name : name,
            phone :phone,
            place : place
         }
         props.getDetailsFromForm(details);
     }

  return (
    <form onSubmit={handleSubmitForm}>
        <label htmlFor="">Enter Name</label>
        <input type="text" id="" onChange={handleNameChange}/>
        <label htmlFor="">Enter phone number</label>
        <input type="text" id="" onChange={handlePhoneChange}/>
        <label htmlFor="">Enter place</label>
        <input type="text" id="" onChange={handlePlaceChange}/>
        <button type="submit">submit</button>
    </form>
  )
}

export default DetailsForm