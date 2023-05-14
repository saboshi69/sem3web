const http = require("http");
const calc = require("./sub");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Add" + calc.add(10, 20).toString() + "<br/>");
    res.write("Sub" + calc.subtract(10, 20).toString() + "<br/>");
    res.write("Mul" + calc.multiply(10, 20).toString() + "<br/>");
    res.write("Div" + calc.divide(10, 20).toString() + "<br/>");
    res.write("Mod" + calc.modulo(10, 20).toString() + "<br/>");
    res.write("Time" + calc.dateTime().toString() + "<br/>");
    res.end();
  })
  .listen(8080);

console.log("Server running at http://localhost:8080/");
