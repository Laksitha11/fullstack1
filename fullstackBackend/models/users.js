var mdb=require('mongoose')
var UserSchema=mdb.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String

})
var user_Schema=mdb.model("users",UserSchema)
module.exports=user_Schema