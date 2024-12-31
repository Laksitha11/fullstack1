import React,{useState} from 'react';
const Gallery = () => {
    var [count,setCount]=useState(0);
    function increment()
    {
        setCount(count+1);
    }
    function decrement()
    {
        setCount(count-1);
    }
    function reset()
    {
        setCount(0);
    }
    return (
       <section>
       <h2>This is my Gallery Page</h2>
       <h3>Learning State Concept</h3>
       <h3>The state of my variable counter is {count}</h3>
       <button onClick={increment}>CLick me to Increment</button>
       <br></br>
       <button onClick={decrement}>Click me to Decrement</button>
       <br></br>
       <button onClick={reset}>Click me to Reset</button>
       </section>
);
};
export default Gallery;