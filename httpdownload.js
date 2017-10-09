var exp = require("express");
var app = exp();
app.get("/", function(req, res){
	res.send("<html><body><h1>You called root path</h1></body></html>");
});

app.get("/data", function(req, res){
	res.send("You called data");
});

app.get("/download", function(req, res){
	res.download("./package.json", function(){
		console.log("download is over");
	});
});

var port =  process.env.port||3000;

app.listen(port, function(){
	console.log("Server is ON at " + port);
});
//response:u add somthing to response,server side
//response.write->just adding more stuff,not commiting
//end->
//res.send():// will send to client

//res.download-> giving a path that to download, allow downld in clientside within browesewr, wen downlod finsised ,then in serverside it wil print