import { useSelector } from "react-redux"

const ComponentOne = () => {
    const state = useSelector(state => state)

  return (
    <div>{state.cake}</div>
  )
}

export default ComponentOne