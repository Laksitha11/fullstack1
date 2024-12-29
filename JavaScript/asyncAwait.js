//async(used in a function)

async function fun1()
{
    console.log("Hello")
}

fun2=async()=>{
    console.log("Kec")
}
fun1()
fun2()

//with return(it is associated with promise)

async function fun3()
{
    return "Hello"
}

fun4=async()=>{
    return "Kec"
}
console.log(fun3())
console.log(fun4())

//with setTimeout

async function fun5()
{
    setTimeout(()=>{
            return "Hello"
    },1000)
   
}

fun6=async()=>{
    setTimeout(()=>{
        return "Kec"
},1000)
}
console.log(fun5())     //Output: Promise { undefined }   it shows undefined because within the timer the return is not done 
console.log(fun6())     //Output: Promise { undefined }   it shows undefined because within the timer the return is not done 

//to remove the promise

async function fun5()
{
    setTimeout(()=>{
            console.log("Hello") 
    },5000)
    console.log(await "Hello")
}

fun6=async()=>{
    setTimeout(()=>{
        console.log("Kec") 
},4000)
console.log(await "Kec")
}
fun5()     
fun6() 

