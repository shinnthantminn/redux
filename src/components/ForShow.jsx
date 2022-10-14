import {useSelector,useDispatch} from 'react-redux'
import { Remove,edit } from '../store/reducer/TodoSlicer';

const ForShow = () => {

    const {Todo} = useSelector(state => state)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(Remove({id:id}))
    }

    const handleEdit = (id) => {
      const name = prompt("Enter yout edit name")
      const phone = prompt("Enter your phone number")

      if(name && phone){

        dispatch(edit({id:id,name:name,phone:phone}))
      }
    }

  return (
    <div>
        {
            Todo.map(i => <div style={{display:"flex" , justifyContent:"space-between" ,alignItems:"center"}} key={i.id}>
                <p>{i.name}</p>
                <p>{i.phone}</p>

               <div>
                <button onClick={handleDelete.bind(null,i.id)}>Delete</button>
                <button onClick={handleEdit.bind(null,i.id)}>Edit</button>
               </div>
            </div>)
        }
    </div>
  )
}

export default ForShow