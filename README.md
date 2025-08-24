# Web-Sockets-Demo (A real time Chat App)

## A look alike of Whatsapp (will create a full Whatsapp clone later)

## This is a real-time group chat application built using Node.js, Express, and Socket.io. It mimics the WhatsApp Web interface and allows users to:

### Join a chat room with a username

### Send and receive messages in real-time

### See notifications when a user joins

### Get chat bubbles styled like WhatsApp

## ⚡ Tech Stack

Frontend: HTML, CSS, Vanilla JS

Backend: Node.js, Express

Real-time Communication: Socket.io

Server: HTTP module wrapped with Express

## 🔧 Setup & Installation

### 1.) Clone the repository

### 2.) Install dependencies

npm install


### 3.) Run the server

node index.js / npm start


### 4.) Open in browser

http://localhost:3000

## ⚙️ How It Works

### 1.) Server setup

Uses http module to create a raw HTTP server.

Wraps it with Express for handling routes and static files.

Integrates Socket.io to enable WebSocket connections.

### 2.) Socket.io events

user_connected: Broadcasts when a new user joins.

chat_message: Handles real-time messaging between clients.

### 3.)Client-side

Prompts for a username on page load.

Sends messages using socket.emit.

Listens for messages and displays them as chat bubbles.



## 📸 Preview

ScreenShots : 
User - Keshav:
<img width="1917" height="967" alt="image" src="https://github.com/user-attachments/assets/40aeda1d-08fc-4ce2-ae74-ef9af19dd824" />

User - Harshit:
<img width="1919" height="923" alt="image" src="https://github.com/user-attachments/assets/e5aacbde-0368-463a-b492-d51decfe8d93" />


Source : https://socket.io/get-started/chat
