const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRouter = require("./api/routes/product");


//----------server database-------------
mongoose
  .connect(
      "mongodb+srv://jamshy:jamshy@123@cluster0.ecruf.mongodb.net/lilac-assignment?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )  .then(
    () => {
      console.log(
        "========database connected============"
      ); /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    },
    (err) => {
      console.log(err);
      console.log(
        "========database not connected=========="
      ); /** handle initial connection error */
    }
  );



//---------------local database--------------
// mongoose
//   .connect("mongodb://localhost:27017/lilac", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   })
//   .then(
//     () => {
//       console.log(
//         "========database connected============"
//       ); /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
//     },
//     (err) => {
//       console.log(err);
//       console.log(
//         "========database not connected=========="
//       ); /** handle initial connection error */
//     }
//   );

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 app.use("/product", productRouter);


module.exports = app;
