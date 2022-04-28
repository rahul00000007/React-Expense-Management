import ExpenseItem from "./ExpenseItem"


function ExpensesList(props){
    if(props.fExpenses.length ===0){
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }
    let expensesContent =<p>No Items found</p>

return(
    <ul className="expenses-list">
        {expensesContent= props.fExpenses.map((expense)=>(
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
           
       
    ))}
    </ul>
)

}

export default ExpensesList