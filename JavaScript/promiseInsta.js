// instapromise

async function LikeCode()
{
    return new Promise((Like)=>{
        Like("Liked the post successfully")
    })
}
async function commentCode()
{
    return new Promise((CommentPosted)=>{
        CommentPosted("Comment posted successfully in the post")
    })
}
async function createPost()
{
    var post=new Promise((cPost)=>{
        cPost("Post created successfully")
    })
    var [posts,comment,like] = await Promise.all([post,commentCode(),LikeCode()])
    console.log(posts)
    console.log(comment)
    console.log(like)
}
createPost()