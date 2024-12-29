//implement share,unshare,unpost,unlike,uncomment
//using flag or true/false(boolean)

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
async function ShareCode()
{
    return new Promise((Share)=>{
        Share("Shared the post successfully")
    })
}
async function createPost()
{
    var post=new Promise((cPost)=>{
        cPost("Post created successfully")
    })
    var [posts,comment,like,share] = await Promise.all([post,commentCode(),LikeCode(),ShareCode()])
    console.log(posts)
    console.log(comment)
    console.log(like)
    console.log(share)
}
createPost()

// unpost,unlike,uncomment,unshare

async function UnlikeCode() {
    return new Promise((Unlike, Reject) => {
        Unlike("Unlike action completed successfully");
    });
}

async function UncommentCode() {
    return new Promise((Uncomment, Reject) => {
        Uncomment("Uncomment action completed successfully");
    });
}

async function UnshareCode() {
    return new Promise((Unshare, Reject) => {
        Unshare("Unshare action completed successfully");
    });
}

async function Unpost() {
    return new Promise((Unpost, Reject) => {
        Unpost("Post deleted successfully");
    });
}

async function deletePost() {
    try {
        const [unpost, uncomment, unlike, unshare] = await Promise.all([
            Unpost(),
            UncommentCode(),
            UnlikeCode(),
            UnshareCode(),
        ]);

        console.log(unpost);
        console.log(uncomment);
        console.log(unlike);
        console.log(unshare);
    } catch (error) {
        console.error(error);
    }
}
deletePost();
