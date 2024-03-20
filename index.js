const http = require("http");
const port = 8900;
const hostname = "localhost";

const server = http.createServer( (req, res) => {
  res.write("Ihuoma Maduabuchukwu here!!");
  res.end();
});


server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname} ${port}`);
});
