var express = require("express"),
    test = express(),
    server = require("http").createServer(test),
    io = require("socket.io").listen(server);
    server.listen(3000);
    test.get("/", function(req, res){
      res.sendFile(__dirname + "/welcome.html");
    });


io.sockets.on("connection", function(socket){
            socket.on("sent", function(data){
                        io.sockets.emit("receive", data);
            });
});
