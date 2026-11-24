const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  res.end(
    JSON.stringify({
      status: "success",
      message: "ข้อความจำลองจาก Mock API (api.js)"
    })
  );
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}`);
});