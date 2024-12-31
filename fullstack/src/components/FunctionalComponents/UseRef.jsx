import {useEffect, useRef,useState} from 'react';

/*var UseRef = () =>{
    var[text,setText]=useState("");
    var prevText=useRef();
    useEffect(()=>{
          prevText.current=text
    },[text])   
    return(
        <section>
            <h1>This is an Example of UseRef </h1>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
            <h2>My Currrent Render is {text}</h2>
            <h2>My Previous Render is {prevText.current}</h2>
        </section>
    );
};*/

//for implementing number

var UseRef = () =>{
    var[number,setNumber]=useState(0);
    var prevNumber=useRef();
    useEffect(()=>{
          prevNumber.current=number
    },[number])   
    const handleChange = (e) => {
        setNumber(Number(e.target.value)); // Convert the input value to a number
      };
    return(
        <section>
            <h1>This is an Example of UseRef </h1>
            <input type="number" value={number}onChange={handleChange}  />
            <h2>My Currrent Render is {number}</h2>
            <h2>My Previous Render is {prevNumber.current}</h2>
        </section>
    );
};
export default UseRef;


