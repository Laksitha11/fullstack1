import React,{useState} from 'react';
const Gallery = () => {
    var [count,setCount]=useState(0);
    function increment()
    {
        setCount(count+1);
    }
    function deccrement()
    {
        setCount(count-1);
    }
    return (
       <section>
       <h2>This is my Gallery Page</h2>
       <h3>Learning State Concept</h3>
       <h3>The state of my variable counter is {count}</h3>
       <button onClick={increment}>CLick me to Increment</button>
       <button onClick={deccrement}>Click me to Decrement</button>
       </section>
);
};
export default Gallery;