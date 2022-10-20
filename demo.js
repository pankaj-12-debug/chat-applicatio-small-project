const express= require('express');
const fs=require('fs');
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
//const data=[];
app.get('/login',(req,res,next)=>{
   // console.log('hi');
   fs.readFile('username.txt',(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    res.send(`${data}<form action="/detail"  onsubmit="localStorage.setItem('username', document.getElementById('username').value)" method="POST"><input  id="message" type="text" name="message" placeholder="message"> <input id="username" type="text" name="username"><button type="submit">login</button></form>`);
   })
  //  res.send(`${data}<form action="/detail"  onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" method="POST"><input  id="message" type="text" name="message" placeholder="message"> <input id="username" type="text" name="username"><button type="submit">login</button></form>`);
})
app.post('/detail',(req,res,next)=>{
 //data.push(`{${req.body.username}:${req.body.message}}`)
    console.log(req.body);
   console.log(`{${req.body.username}:${req.body.message}}`);
   console.log('hi');
   fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag: 'a'},(err)=>{
    console.log(err);
    res.redirect('/login');
   });
   // res.redirect('/login');
})
app.get('/',(req,res,next)=>{
  //  console.log('chalo');
  res.send('<h1>hello</h1>');
})

app.listen(4000);