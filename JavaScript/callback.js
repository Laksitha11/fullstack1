
databaseSharing=()=>{
    console.log("Data stored successfully")
}
function submitForm(formMsg,dbs)   //dbs means database sharing or we can give any name
{  
    setTimeout(()=>{
    dbs()
    console.log(formMsg)
    },1000)
}
submitForm("Form submitted successfully",databaseSharing)