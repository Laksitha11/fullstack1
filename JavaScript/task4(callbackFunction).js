function status(){
    console.log("task completed")
}
function task(msg,sts){
    console.log(msg)
    sts();
}
task("given task:callback",status)