import http from "http";
import predict from "./predict.js";

const port = 6666;
const hostname = "127.0.0.1";

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const searchParams = new URLSearchParams(req.url.split("/")[1]);
  const number = searchParams.get("number");
  if (number) {
    const predicted = await predict(Number(number));
    res.statusCode = 200;
    const json = JSON.stringify({ result: predicted });
    res.end(json);
  } else {
    res.statusCode = 400;
    res.end('{"error":"Invalid number"}');
  }
  console.log("conflict");
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
