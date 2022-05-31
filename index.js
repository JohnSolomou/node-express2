const express = require("express");
const app = express();
const port = 8080;
const wiki = require("./wiki.js");
app.use("/wiki", wiki);
app.use(express.json());
//middleware to parse json data
app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "best summer ever",
    size: "medium",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "we need a logo!" });
  }
  res.send({
    tshirt: `shirt with your ${logo} and ${id}`,
  });
});

app.listen(port, () => console.log(`server running on ${port}`));
