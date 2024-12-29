array=[11,12,13,[14.5,15.6],"abc",'l',true]
console.log(array)

//for...in loop

for(var a in array)
{
    console.log(a)        //prints the index of array
    console.log("Element is present in index",a,"is",array[a])         //prints the index along with the value
}

//for...of array

for(var b of array)
{
    console.log(b)        //prints the actual array value
}

//for each
//example 1

array.forEach((element,index) => {                                //the parameter for forEach is always an element(a/b/num/etc),index
    console.log("Element is",element,"and it's index is",index)
});                                                       

//example 2

obj1={
    "firstName":"Laksitha",
    "lastName":"Mani",
    "age":20
     }
console.log(obj1)

for(key in obj1){
    value=obj1[key]
    console.log(key,value)
}

/*obj1.forEach((value)=>{
    console.log(value.firstName)
});*/

for(const element in obj1){
    console.log(element)
}

for(const element of obj1)
    {
        console.log(element)      //obj1 is not iterable
    }
