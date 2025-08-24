//Earlier we learned about setting up a basic Express server. Now, let's integrate Socket.io for real-time communication.
//how we used to set up the server in the beginning - using http module , then we started using express . NOW we will add socket.io to the mix.

//Here we need both http and express module:
//1.) Why http? because while using socket.io, we need to create an HTTP server to attach the WebSocket functionality to it.ie we need access to the original Http server instance , hence we use the http module.
//2.) Why express? just for handling requests
// because socket.io works seamlessly with express, allowing us to easily integrate WebSocket functionality into our existing express routes and middleware.
//we can use http only but our code will be more organized and easier to manage with express.
const express = require('express');
const http = require('http');



//acquiring a server from socket io
const{Server} = require('socket.io');//destructuring assignment to extract the Server class from the socket.io module
//NOTE : Server and server are two different things

const path = require('path');

//create an instance of express application by calling express() function
const app = express();



//create an HTTP server
const server = http.createServer(app);//hard coding server


//creating an instance of socket.io server
const io = new Server(server);//io handles websocket connections and app handles HTTP requests
app.use(express.static("public"));//to serve static files like html , css , js and even images files from a directory named 'public'


io.on('connection', (socket) => {//socket is basically a client
  console.log('A user connected',socket.id);
  //socket object contains
  // 1.) id : unique identifier for each socket connection( handled internally)
  // 2.) handshake : contains information about the connection
  // 3.) emit : to send messages to the server
  // 4.) on : to listen for messages from the server
  //and many more things
  socket.on("user_connected", (username) => {
    console.log("User connected:", username);
    io.emit("user_connected", username);
  });
  socket.on("chat_message", (message) => {//recieving data from client as socket.on event listener
    console.log("Message received:", message);
    //now we need to send this data to all the other clients , we use emit  for this purpose
    io.emit("chat_message", message);//can listen this in client side script
  });
});//NOTE : Make sure your socket.io is installed on frontend too in the index.html




app.get('/', (req, res) => {
  return res.sendFile(path.resolve("index.html"));//express doesnt pass static files as such , we need to use a middleware for it to passing static files of a directory while using express
});
 


//listen server
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});