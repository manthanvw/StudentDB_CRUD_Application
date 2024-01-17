const http = require('http');
const readline = require('readline');

// Create a readline interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user to input the port number
rl.question('Enter the port number: ', (port) => {
  // Close the readline interface
  rl.close();

  // Create a simple HTTP server
  const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  });

  // Listen on the specified port
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
});




// const http = require("http");
// const readline = require("readline");
// const r = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r.question("Enter port on which you want to run the server: ", (port) => {
//     r.close();
//   const server = http.createServer((req, res) => {
//     res.end("Hello User");
//   });
//   server.listen(port, () => {
//     console.log("Server is running on port: ", port);
//   });
// });
