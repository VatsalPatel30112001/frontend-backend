const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.urlencoded({
  extended:false
}));
app.use(express.json());
const schema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true ,min:10},
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
