const exp=require("express");
const mongoose=require("mongoose");
const expressLayouts = require('express-ejs-layouts');
const bodyParser=require("body-parser");
const ejs=require("ejs");
const _=require("lodash");
const path = require("path");

const app=exp();

app.set("view engine","ejs");            //this is for rendering the views
app.set("views",path.join(__dirname+'/views'));
app.use(exp.static("./public"));

app.set("layout extractStyles",true)     //this is for layoutss
app.set("layout extractScripts",true);
app.use(expressLayouts);

app.use(bodyParser.urlencoded({extended:true}));   // this is for body-parser

mongoose.connect("mongodb+srv://uttu_gupta:uttu7434@cluster0.z6cc9x6.mongodb.net/detailDB",{useNewUrlParser:true});
const detailSchema={
     name:String,
     email:String,
     num:Number,
     address:String,
     box:String
};
const Detail=mongoose.model("Detail",detailSchema);
const loginSchema={
  name:String,
  email:String,
  password:String
};
const Login=mongoose.model("Login",loginSchema);

app.get("/",function(req,res){
  res.render('home')
});
app.get("/team",function(req,res){
  res.render('team')
});
app.get("/contact",function(req,res){
  res.render('contact')
});
app.get("/blog",function(req,res){
  res.render('blog')
});
app.get("/client",function(req,res){
  res.render('client')
});
app.get("/description",function(req,res){
  res.sendFile(__dirname + '/views/description.html')
});

app.post("/contact",function(req,res){
     const detail=new Detail({
       name:req.body.name,
       email:req.body.email,
       num:req.body.num,
       address:req.body.address,
       box:req.body.box
     });
     detail.save()
        .then(function(){
          res.redirect("/contact");
        })
        .catch(function(err){
          console.log(err);
        });
});

app.listen(3000,function(){
  console.log("Server Started on Port 3000");
});
