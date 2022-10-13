import {useSelector,useDispatch} from 'react-redux'
import { Remove } from '../store/reducer/TodoSlicer';

const ForShow = () => {

    const {Todo} = useSelector(state => state)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(Remove({id:id}))
    }

  return (
    <div>
        {
            Todo.map(i => <div style={{display:"flex" , justifyContent:"space-between" ,alignItems:"center"}} key={i.id}>
                <p>{i.name}</p>
                <p>{i.phone}</p>

               <div>
                <button onClick={handleDelete.bind(null,i.id)}>Delete</button>
               </div>
            </div>)
        }
    </div>
  )
}

export default ForShow