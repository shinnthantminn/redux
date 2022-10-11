import { useSelector,useDispatch } from "react-redux";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import { toggle } from "./store/action/toggleAction"; 

const App = () => {

  const state = useSelector(state => state)
  const dispatch = useDispatch()

  return (
   <>
   <ComponentOne/>
   <ComponentTwo/>
   {state.toggle && <h1>Ok Na Sa</h1>}
   <button onClick={() => toggle(dispatch)}>Toggle</button>
   </>
  )
}

export default App

// store => reducer => action 