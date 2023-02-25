import React , {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpence.css"

function NewExpence(props) {
  let[isEditing , setEditing] = useState(false)
  function onDataHandler(expense) {
    const newExpense =  {
      ...expense
    }
    props.onNewExpense(newExpense)
    setEditing(false)
  }
  let isEditingHandler =()=>{
     setEditing(true)
  }
  let isEditingCancelhandler =()=>{
     setEditing(false)
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={isEditingHandler}>Add New Expenses</button>}
      {isEditing && <ExpenseForm onNewDataFromForm={onDataHandler} data={isEditingCancelhandler}/>}
    </div>
  )
}

export default NewExpence