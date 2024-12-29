//variables 
// var,let,char

//Arrow function

arrowFun=(stud)=>{
     console.log(stud)
}
arrowFun(["IT","CSE","AIML"])


arrowFun=(stud)=>{
    return stud[1]
}
console.log(arrowFun(['IT','CSE']))

//destructuring operator

var marks=[99,96,94]
var[m1,m2,m3]=marks
console.log(m1)
console.log(m2)
console.log(m3)

//Ternary operator

a=10
out=(a%2==0)?"Even":"Odd"
console.log(out)

//spread operator             //combine and give the results it knows the no of parameters

Studentslist=["A","B","C","D","E","F","G","H"]
newStudents=["I","J","K","L","M"]
Combinedstudents=[...Studentslist,...newStudents]
console.log(Combinedstudents)

//rest operator      //used within the function and it doesnt know the no of parameters
 
function rest(...a)
{
    return (a)
}
console.log(rest([1,2,3]))
console.log(rest([1,2,3,4,5]))

//scope

var a=10
const pi=3.14
console.log("outside",pi)
console.log("outside",a)
{
    let a=20
    let b=30
    console.log("block",a)
    console.log("block",b)
}
console.log("outside",pi)
console.log("outside",a)

//Hoisting

console.log(num) 
const num=3.14
console.log(num)    //Output:Reference error:cannot access 'a' before initialization

console.log(num1)
let num1=10
console.log(num1)    //Output:Reference error:cannot access 'a' before initialization

console.log(num2)
var num2=10
console.log(num2)    
