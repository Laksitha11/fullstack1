import { useContext } from "react";
import { ThemeProvider } from "../UseContext";
var StudentResults=()=>
{
    const result=useContext(ThemeProvider);
    return(
        <section>
            <h3>Your result is {result.sgpa} and CGPA is {result.cgpa} </h3>
        </section>
    );
}
export default StudentResults;