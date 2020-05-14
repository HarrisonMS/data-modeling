const server = require("./api/server.js");

const port = process.env.port || 5512;

server.listen(port, () => {
  consol.log(
    `\n******* Api server is up and running on ${port} congrats go take a breaksies you have come so far ******\n`
  );
});
