import { useState } from "react";

const OneWayBinding = () => {
    const handleChange = (e:any) => {
        setChange(e.target.value);
    }
    const [change,setChange] = useState<string>('')
  return (
    <>
    <h1>{change}</h1>
    <input type="text" onChange={(e)=>handleChange(e)} />
    </>
  )
}

export default OneWayBinding