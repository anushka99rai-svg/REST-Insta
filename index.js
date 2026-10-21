const express=require("express");
const app=express();
const PORT=8080;
const path=require("path");
const {v4:uuid} = require("uuid");
const multer=require("multer");
const methodOverride=require("method-override");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload= multer({storage:storage});
let posts=[
    {
        id:uuid(),
        username:"Love_Dogs",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZzm6FnMNjf53BKJPSsQZLHylxwiz70H7w8WojDormA&s",
        caption:"#Love them unconditionally"
    },
    {
        id:uuid(),
        username:"Family_Care",
        img:"https://res.cloudinary.com/jerrick/image/upload/v1678459920/640b441016713b001d851c82.jpg",
        caption:"#Love them unconditionally"
    }
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts/new",upload.single("img"),(req,res)=>{
    let {username , caption}=req.body;
    let newId=uuid();
    let img = req.file ? `/uploads/${req.file.filename}` : "";
    posts.push({
        id:newId,
        username:username,
        img:img,
        caption:caption
    })
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p)=>(id===p.id));
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs",{post});
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p)=>(id===p.id));
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("edit.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newCaption=req.body.caption;
    let post = posts.find((p)=>(id===p.id));
    post.caption=newCaption;
    res.redirect("/posts");
})

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})
app.listen(PORT,()=>{
    console.log(`App is listening at post ${PORT}`);
})