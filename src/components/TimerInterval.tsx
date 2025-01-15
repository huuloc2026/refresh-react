import { useEffect, useState } from "react";

const TimerIntervalTest = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
      const intervalVar = setInterval(()=>{setCount((prev)=>prev+1)
        console.log("re-render");
      },1000)
      return () => {
        clearInterval(intervalVar);
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
};

export default TimerIntervalTest;
