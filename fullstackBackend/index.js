var express =require('express')
var app=express()
const PORT =3001         // 1 means generally denotes backend it can also be any number
app.get('/',(req,res)=>{
    //res.send("Welcome to  Backend server")
    res.json({server:"Welcome to  Backend server",url:"locallhoost",port:"PORT"})        //comes with pretty print
    
})

app.get('/static',(req,res)=>{
    res.sendFile('')
})

app.listen(PORT,()=>{                   //listen must always be at the last
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`)
    //console.log("Backend Created Successfully")       //when the link need not be visible
})