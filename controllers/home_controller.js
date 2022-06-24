module.exports.home= function(req,res){
    // sending o browesrres.end('<h1>Express is up for socialHub</h1>');
    //send the response
    return res.render('home' , {
        title: "Home"
    });
}

module.exports.dashboard = function(req,res) {
    res.end('<h1> Chcek the details of your dashboard </h1>');
}

// module.exports.actionName = function(req,res){ }