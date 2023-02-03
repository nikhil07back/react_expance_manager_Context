import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import BalanceSection from "./components/BalanceSection";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [transactions , setTransaction] = useState([])
  

const saveTransaction = (transaction) =>{
  const newTransaction = {
    id : uuidv4(),
    text : transaction.text,
    amount : parseInt(transaction.amount)
  }

  console.log(newTransaction)

  setTransaction([...transactions , newTransaction])

}

const deleteTransaction = (id) => {
  setTransaction(transactions.filter(item => item.id !== id))
}

  
  return (
    <>
      <Navbar />
      <div className="container">
        <MainSection transactions={transactions} saveTransaction={saveTransaction}/>
        <BalanceSection transactions={transactions}/>
        <ListGroup transactions={transactions} deleteTransaction={deleteTransaction}/>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
