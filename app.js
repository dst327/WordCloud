const express = require("express");
const body_parser = require("body-parser");
const commonRouter = require("./server/router/common");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use("/", commonRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
