import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayOutRF = () => {
  const [count, setCount] = useState(1);
  
    useLayoutEffect(() => {
        console.log("re-render");
        if(count>3){
            setCount(0)
        }
        return () => {
          
        }
      
    }, [count]);
    return (
      <div>
        <input></input>
        <br />
        {count}
        <button onClick={() => setCount(count + 1)}>Click</button>
       
      </div>
    );
}

export default UseLayOutRF