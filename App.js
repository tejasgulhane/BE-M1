const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<h1>Tejas</h1>");
    res.write("</html>");
    return res.end();
  } else if (url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<h1>Welcome to Home</h1>");
    res.write("</html>");
    return res.end();
  } else if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<h1>Welcome to About</h1>");
    res.write("</html>");
    return res.end();
  } else if (url === "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<h1>Welcome to Node Server</h1>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<h1>Tejas</h1>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
