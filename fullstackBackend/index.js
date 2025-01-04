var express = require('express');                             
var path = require('path');
var mdb = require('mongoose');
var User=require('./models/users');
var app = express();
const PORT = 3001;
app.use(express.json())

mdb.connect("mongodb://localhost:27017/").then(() => {
    console.log("MongoDB Connection Successful")
}).catch(() => {
    console.log("Check your connection String")
})

app.get('/', (req, res) => {
    res.send("welcome to backend server")
})

app.get('/json', (req, res) => {
    res.json("welcome to backend ")
})

app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/signup',(req,res)=>{
     var {firstname,lastname,email,password}=req.body
    
     try{
         var newUser=new User({
             firstname:firstname,
             lastname:lastname,
             email:email,
             password:password
         })
         var newUser=new User(req.body)
         console.log(req.body.password);
         newUser.save()
         console.log("UserAdded Successfully")
         res.status(200).send("User Added Successfully")
 
     }
     catch(err)
     {
         console.log(err);
     }
 })

 app.get('/getsignup',async(req,res)=>{
     try{
         var allSignUpRecords =await User.find()
         res.json(allSignUpRecords)
         console.log("all data fetched")
     }
     catch(err){
         console.log("err")
         res.send(err)
     }
 })

 app.post('/login',async(req,res)=>
{
    var {email,password}=req.body
    try{
        var existinguser=await User.findOne({email:email})
        console.log(existinguser);
        if(existinguser)
        {
            if(existinguser.password==password){
        res.json({message:"Login successful",loggedIn:true})
            }
            else{
                res.json({message:"Invalid Password",loggedIn:false})
            }
        }
        else{
            res.json({message:"Invalid Email or Password",loggedIn:false})
        }
    }
    catch(err)
    {
        console.log("Login Failure")
    }
})
 
 app.listen(PORT, () => {
     console.log(`backend server started\nUrl: http://localhost:${PORT}`);
 });