import './App.css'
import AddItems from './Tasks/AddItems'
import Counter from './Tasks/Counter'
import Toggle from './Tasks/Toggle'
import Typing from './Tasks/Typing'

function App() {

  return (
    <>
      <Toggle /><br /><br />
      <Counter /><br /><br />
      <Typing /><br /><br />
      <AddItems />
    </>
  )
}

export default App