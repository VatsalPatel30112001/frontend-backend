const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.urlencoded());
app.use(bodyparser.json());
const schema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});
app.use(cors());
const model = mongoose.model("narnarayan", schema);
app.get("/", (req, res) => {
  res.send("jay swaminarayan prabhu");
});
// app.post('/',(req,res)=>{
//     const saving=new model(req.body)
//     saving.save().then(console.log(req.body)).catch((err)=>{console.log(err)})
// })

app.post("/", (req, res) => {
  const data = new model(req.body);
  data
    .save()
    .then(console.log(data))
    .catch((err) => {
      console.log(err);
    });
});
app.listen(80);
