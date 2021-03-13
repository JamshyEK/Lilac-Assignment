const mongoose = require("mongoose");
const Product=require('../models/product')

//product add
exports.addProduct = (req, res, next) => {
    console.log(req);
    console.log("testing");
    console.log(req.body.name);

              const product = new Product({
                _id: new mongoose.Types.ObjectId(),
                id: req.body.id.trim(),
                name: req.body.name.trim(),
                category: req.body.category.trim(),
                quantity: req.body.quantity.trim(),
                price: req.body.price.trim(),
              });
  
              product.save().then((result) => {
                console.log("Saved");
                res.status(201).json({
                  id: result._id,
                  pr_id: result.id,
                  name: result.name,
                  category: result.category,
                  quantity: result.quantity,
                  price:result.price,
                
                });
              })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  };
  


  
//products fetch
  exports.getProducts = (req, res, next) => {
    Product.find({})
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  };




  
// product update
exports.updateProduct = (req, res, next) => {
  let prdt_id = req.body.prdt_id.trim();
  let id = req.body.id.trim();
  let name = req.body.name.trim();
  let price = req.body.price.trim();
  let category = req.body.category.trim();
  let quantity = req.body.quantity.trim();


  Product.updateOne(
        { _id: prdt_id },
        {
          id: id,
          name: name,
          price: price,
          category: category,
          quantity: quantity,
        }
      )
        .exec()
        .then((result) => {
          res.json({ result: result, msg: "Product Updated" });
        })
   
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};




//product delete
exports.deleteProduct = (req, res, next) => {
  console.log("testing")
  prdt_id = req.params.id;
  Product.deleteOne({ _id: prdt_id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};