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
    console.log(element)
});                                                       

//example 2  (using foreach loop for printing objects)

obj1={
    "firstName":"Laksitha",
    "lastName":"Mani",
    "age":20
     }
     Object.entries(obj1).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });

//using for..in loop

for(const element in obj1){
    console.log(element)
}


