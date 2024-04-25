const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "..");

const express = require("express");
const app = express();

const swaggerHandler = require("./swagger");
swaggerHandler.handle(app);

app.listen(1313, () => {
  console.log(`Example app listening on port 1313`);
});
