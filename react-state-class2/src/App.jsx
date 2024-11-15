import LudoBoard from "./LudoBoard.jsx"
import './App.css'
import TodoList from "./TodoList.jsx"
import Lottery from "./Lottery.jsx"
import Ticket from "./Ticket"

function App() {
  return(
     <>
      <Lottery n={4} winningSum={20}/>
     </>

  );
}

export default App
