import React , {useState} from "react"
import ExpensesFilter from "./components/ExpenseFilter";
import ExpenseItem from "./components/ExpenseItem";
import "./components/ExpenseItem.css"
import NewExpence from "./components/NewExpenses/NewExpence";

const dummy_expenses = [
  {
    title: "ration",
    amount : 600, 
    date : new Date(2020, 0, 15)
  },
  {
    title: "insurance",
    amount : 1500, 
    date : new Date(2021, 1, 10)
  },
  {
    title: "food",
    amount : 150, 
    date : new Date(2022, 1, 20)
  }
]

function App() {
    const[expenses , setExpenses] = useState(dummy_expenses)
    const[filterDate , setFilterDate] = useState("2022")
  
   function newItemHandler(expense) {
     setExpenses((oldExpenses)=>{
       return [expense , ...oldExpenses]
     })
  }
  let dateHandler =(date)=>{
      setFilterDate(date)
  }
  let filteredYear = expenses.filter(expense =>{
     return expense.date.getFullYear().toString() === filterDate
  })
  let expenseContent = <p>No Items found!</p>
  if(filteredYear.length > 0) {
    expenseContent = filteredYear.map(expense =>{
      return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
  })
  }
 
  return (
    <div className="expense">
      <NewExpence onNewExpense={newItemHandler}/>
      <ExpensesFilter selected={filterDate} onFilterdate={dateHandler}/>
      {expenseContent}
    </div>
  );
}

export default App;
