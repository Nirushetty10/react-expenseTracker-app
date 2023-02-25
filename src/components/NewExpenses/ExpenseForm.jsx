import React from 'react'
import "./ExpenseForm.css"
import { useState } from 'react';

function ExpenseForm(props) {
    const[title, setTitle] = useState("")
    const[amount, setAmount] = useState("")
    const[date, setDate] = useState("")

    function titleChangeHandler(event) {
         setTitle(event.target.value)
    }
    function amountChangeHandler(event) {
        setAmount(event.target.value)
   }
   function dateChangeHandler(event) {
    setDate(event.target.value)
}

  function submitHandler(event) {
    event.preventDefault();
    const expenseDetails = {
        title: title,
        amount : amount,
        date : new Date(date)
    }
    props.onNewDataFromForm(expenseDetails)
    setTitle("")
    setAmount("")
    setDate("")
  }


  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label >Title</label>
            <input type="text" value={title} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label >Amount</label>
            <input type="number" value={amount} min="5" step="5" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label >Date</label>
            <input type="Date"  value={date} min="2021-01-01" max="2023-05-10" onChange={dateChangeHandler}/>
        </div>
        <div className="new-expense__actions">
            <button onClick={props.data}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
        </div>
    </form>
  )
}

export default ExpenseForm