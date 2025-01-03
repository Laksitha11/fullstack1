import { useMemo, useState } from "react"

var slowFunction = (number) =>{
    for (let i=0;i<10000000000;i++)
    {
        return number*2;
    }
}
var UseMemo = ()=>{
    var[num,setNum]=useState(0);
    var[theme,setTheme]=useState(true);
    var darkLight={ 
        backgroundColor:(theme)?"black":"white",
        color:(theme)?"white":"black",
    }
    var doublingNumber=useMemo(()=>{
        return slowFunction(num)
    },[num]);
    return(
        <section>
            <h1>This is an Example of UseMemo</h1>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>setTheme(theme = !theme)}>Toggle Theme</button>
            <h2 style={darkLight}>{doublingNumber}</h2>
        </section>
    )
}
export default UseMemo;





//UseMemo is used in changing theme from light to dark mode and vice-versa(toggling)
//used in slowfunction
//used in doubling number