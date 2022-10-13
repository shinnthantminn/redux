import { useState } from "react"
import { useDispatch } from "react-redux"
import { Add } from "../store/reducer/TodoSlicer";

const Form = () => {

    const dispatch = useDispatch();


    // form Data
    const [formData,setFormData] = useState({
        name:"",
        phone:""
    })

    // formData validation
    const [formDataError,setFormDataError] = useState({
        name:null,
        phone:null,
    })

    const handleFormChange = (e) => {
            setFormData(pre => ({
                ...pre,[e.target.name]:e.target.value
            }) )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = Math.random(Date.now() * 20 ) * 1000000000 

        if(!formData.name){
            setFormDataError(pre => ({
                ...pre,name:"name is required",
            }))
        }
        
        if(!formData.phone){
            setFormDataError(pre => ({
                ...pre,phone:"Phone is required"
            }))
        }

        if(formData.name && formData.phone){
            const data = {
                id,
                ...formData
            }
            dispatch(Add(data))

            setFormData({
                name:"",
                phone:""
            })
        }

 
    }

    console.log(formDataError);


  return (
    <div>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input onChange={handleFormChange} value={formData.name} type="text" name="name" />
                {formDataError.name && <p style={{color:"red"}}>{formDataError.name}</p>}
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input onChange={handleFormChange} value={formData.phone} type="number" name="phone" />
                {formDataError.phone && <p style={{color:"red"}}>{formDataError.phone}</p>}
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form


// class => className =?