var express = require('express');
var app = express();
// var http = require("http").createServer(app);
// var io = require("socket.io")(http);

// join -
// spaceinfo -
// end -
// leave -
// login -
// logout -
// prehistory -
// message -
// speaks -
// reads -
// reads -
// emp -
// payload -
// memberinfo -
// token -
// disconnecting;
app.use(express.static(__dirname + '/public'))

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// io.on("connection", (socket) => {
//   console.log("connection socket : " + socket);
//   socket.emit("connection_success", "socket connected!!");

//   socket.on("chat message", (msg) => {
//     console.log("message : " + msg);
//     io.emit("chat message", msg);
//   });

//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

http.listen(3000, () => {
  console.log("listening on *:3000");
});
