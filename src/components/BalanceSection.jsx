import React from 'react'

function BalanceSection({transactions}) {
  
    const totalIncome = transactions.filter((item) => {
        if(item.amount > 0){
            return item
        }
    }).reduce((p ,c)=>{
        return p + c.amount
    },0)

    const totalExpense = transactions.filter((item) => {
        if(item.amount < 0){
            return item
        }
    }).reduce((p ,c)=>{
        return p + c.amount
    },0)


  
  
    return (
    <>
    
    <div id="current-status" className="main-section">
            <div id="income" className="balance">
                <span>
                    <p>Current Income</p>
                <h1>₹{totalIncome}</h1>
                </span>
            </div>

            <div id="expense" className="balance">
                <span>
                    <p>Current Expense</p>
                <h1>₹{totalExpense}</h1>
                </span>
            </div>
        </div>

    </>
  )
}

export default BalanceSection