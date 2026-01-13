const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>JogaAÍ Club OK</h1><p>Deploy funcionando.</p>");
});

app.listen(port, () => console.log("Listening on", port));
