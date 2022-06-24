module.exports.profile = function(req,res){
   res.end("<h1> User Profile </h1>");
}


//controller for posts rendered for /users/posts

module.exports.posts = function(req,res){
    res.end('<h1> Yuppie check out your posts</h1>');
}


//controller for posts rendered for /users/friends

module.exports.friends = function(req,res){
    res.end('<h1> Hey, here are the list of your friends </h1>');
}

