import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate = new Date(2021, 10,10);
    const expenseTitle = 'Grocery';
    const expenseAmount = 245.45;


    return (
        <div className="expense-item">
            <div>
            <div>{expenseDate.toISOString()}</div>
            </div>
            <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    )
  }
  
  export default ExpenseItem;
  