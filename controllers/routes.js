var express = require("express");
var router = express.Router();
let burger = require("../models/burgers");

router.get("/", function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index", {burger_data});
        
    })
})


// api route that pushe
router.put("/api/update" , function(req,res){
    burger.update(req.body.burger_id, function(result){
      console.log(result);
      res.redirect("/");
    })
})

router.post("/api/create" , function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect("/");
    })
})

module.exports = router;