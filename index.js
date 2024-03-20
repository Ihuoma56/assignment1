
const http = require("http");

const server = http.createServer( (req, res) => {
  res.write("Ihuoma Maduabuchukwu here!!");
  res.end();
});

server.listen(8900, "localhost", () => {
  console.log("Server is running on port 8900");
});
