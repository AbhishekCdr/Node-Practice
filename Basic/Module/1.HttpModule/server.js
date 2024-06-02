const http = require("node:http");

const server = http.createServer((req, res) => {
  const url = req.url;

  const method = req.method;

  if (url === "/") {
    if (method === "GET" || method === "POST") {
      res.end("WELCOME TO HOMEPAGE");
    } else {
      res.statusCode = 404;
      res.end("cannot /" + method);
    }
  } else if (url === "/fitness") {
    res.write("Nice Fitness");
    res.end("\nWelcome to Fitness");
  }
});

server.listen(8080, () => {
  console.log("server started at port 8080");
});

/*
RESPONSE OBJECT

1. WE CAN WRITE TO RESPONSE MULTIPLE TIMES
2. IN THE NED WE CAN END THE RESPONSE
3. AFETR res.end() NEVER WRITE res.write() OR res.write()


REQUEST OBJECT
1. IT CONTAINS URL, METHOD and other things


*********** PROBLEM WITH NODEJS SERVER ************
1. MANAGEMENT OF ROUTING
2. CODE STRUCTURE
*/
