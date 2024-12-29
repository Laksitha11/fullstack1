//Location finder example

//condition for if(resolve)i.e.,train=7

function locationFinder()
{
    train=7
    return new Promise((resolve,reject)=>{
         if(train == 7)
         {
            resolve("Train has arrived")
         }
         else
         {
            reject("Trained hasn't arrived yet")
         }
    })
}
console.log(locationFinder())         // o/p:Promise { 'Train has arrived' }

locationFinder().then((resolveMsg)=>{
     console.log(resolveMsg)             // o/p:Train has arrived
})

//condition for else(reject)i.e.,train=8

function locationFinder()
{
    train=8
    return new Promise((resolve,reject)=>{
         if(train == 7)
         {
            resolve("Train has arrived")
         }
         else
         {
            reject("Trained hasn't arrived yet")
         }
    })
}
//locationFinder()                       //no output
//console.log(locationFinder())          //{UnhandledPromiseRejection}

//to remove the error and only printing the reject message and also promise(use then and catch)
locationFinder().then((resolveMsg)=>{
     console.log(resolveMsg)            
}).catch(function(rejectedMsg){
     console.log(rejectedMsg)
})

//Actual example of LocationFinder

function isTimeConsumption(t)
{
    time=999
    return time<=t;
}
function isValidLocation(loc)
{
    location = "blr"
    return loc == location
}
function locationFinder()
{
    loc="blr"
    time=1000
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
             if(isValidLocation(loc) && isTimeConsumption(time)){
                locFound("Location Found")
             }
             else{
                locNotFound("Location Not Found")
             }
        }),time
    })
}
locationFinder().then((resolveMsg)=>{
    console.log(resolveMsg)            
}).catch(function(rejectedMsg){
    console.log(rejectedMsg)
})
    
