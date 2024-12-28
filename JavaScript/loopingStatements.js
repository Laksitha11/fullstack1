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