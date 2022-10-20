const express= require('express');
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
const data=[];
app.get('/login',(req,res,next)=>{
   // console.log('hi');
    res.send('<form action="/detail"  onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" method="POST"><input  id="message" type="text" name="message" placeholder="message"> <input id="username" type="text" name="username"><button type="submit">login</button></form>');
})
app.post('/detail',(req,res,next)=>{
 //app.push(`{${req.body.username}:${req.body.message}}`)
    //console.log(req.body);
  //  console.log(`{${req.body.username}:${req.body.message}}`);
    res.redirect('/');
})
app.get('/',(req,res,next)=>{
  //  console.log('chalo');
  res.send('<form action="/"  onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" method="POST"><input  id="message" type="text" name="message" placeholder="message"> <input id="username" type="text" name="username"><button type="submit">login</button></form>');
})
app.post('/',(req,res,next)=>{
    data.push(`{${req.body.username}:${req.body.message}}`);
    console.log(req.body);
   console.log(`{${req.body.username}:${req.body.message}}`);
   res.redirect(`/`)
})
app.listen(4000);