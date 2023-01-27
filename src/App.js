import logo from './logo.svg';
import './App.css';
import Expense from './Components/Expense'


const expenses = [
  {id:1,name:"iphone",price:996},
  {id:1,name:"iphone",price:996},
  {id:1,name:"hatdog",price:996},
  {id:1,name:"hahahdb",price:996},
  {id:1,name:"fgfg",price:996}
]

function App() {
  return (
    <div className="">
      {expenses.map((expense) => {
        return (
          <Expense key={expense.id} name={expense.name} price={expense.price} />
      )

      })}
    </div>
  );
}

export default App;
