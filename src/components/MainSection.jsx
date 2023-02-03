import {useState} from 'react'
import { toast } from 'react-toastify'

function MainSection({transactions , saveTransaction}) {
 
  const [text , setText]  = useState("")
  const [amount , setAmount]  = useState("")


  const balance = transactions.reduce((p,c)=>{
    return p + c.amount
  },0)

  const handleSubmit = (e) => {
    e.preventDefault()

    const transaction ={
      text : text,
      amount : amount
    }

    if(text || amount === ""){
      toast.error("Please Fill All Inputs" , {
        position : 'top-center'
      })
    }else{
      saveTransaction(transaction)
    }

   
    setAmount("")
    setText("")
  }



  return (
    <div className="main-section">


    <div id="current-bal" className="balance">
        <span>
            <p>Current Balance</p>
        <h1>₹{balance}</h1>
        </span>
        <i className="fa-solid fa-wallet"></i>
    </div>


    <form className="transaction-form" onSubmit={(e)=>handleSubmit(e)}>
        <input value={text} type="text" placeholder="Enter Your Transaction" onChange={(e)=> setText(e.target.value)}/>
        <input value={amount} type="number" placeholder="Enter Amount"onChange={(e)=> setAmount(e.target.value)}/>
        <button>Save Transaction<i className="fa-solid fa-floppy-disk"></i></button>
    </form>

</div>

  )
}

export default MainSection