import { useDispatch } from 'react-redux'
import {Add,Remove} from "../store/action/cakeAction"

const ComponentTwo = () => {
    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => Add(dispatch,10)}>Add</button>
        <button onClick={() => Remove(dispatch,10)}>Remove</button>
    </div>
  )
}

export default ComponentTwo