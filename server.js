const express =require('express');
const mongoose = require ('mongoose');
const posts=require ("./router/api/posts.js")
const profil=require ("./router/api/profil.js")
const users=require ("./router/api/users.js")




const app=express();
const db =require ('./config/keys.js').mongoURI;
mongoose.connect(db)
.then(()=>console.log("mongoDB connected"))
.catch(err=>console.log(err))
app.use('/api/posts',posts)
app.use('/api/profil',profil)
app.use('/api/users',users)
app.get("/",(req,res)=>{res.send("hello")});
const port=process.env.PORT || 5000;
app.listen(port,()=>{console.log(`server run a port ${port}`)});