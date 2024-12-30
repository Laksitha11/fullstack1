import React from 'react';

const Home=()=>{
     var styling = {
        fontSize:"40px",
        textDecoration:"italic",
        color:"red"
    }
    return (
        <div className='box-model'>       
            <h2 style ={styling}>This is my Home Page</h2>     
            <h2 id ="idSEg">Id Selector</h2>
            <h2 style={{color:"blue"}}>CSS Styling</h2>
        </div>
    );
}
export default Home;