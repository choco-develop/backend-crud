const bodyParser = require('body-parser');
const { urlencoded, json } = require('body-parser');
const { application } = require('express');
const express=require('express');
const  fs  = require('fs');
const { type } = require('os');
const { dirname } = require('path');
//const cors=require('cors')
//const bodyParser=require('body-parser') ***deprecated**
const app= express();
const PORT = process.env.PORT || 8000



const singers= {
    mercychinwo:{
    "user":"mercy chinwo",
    "zzzz":"Nigeria",
    "yyyy":"Obinasome"
    },
    blessed:{
        "user":"mercyisblessed",
        "zzzz":"Nigeria",
        "yyyy":"amazing God"
        },
   judik:{
            "user":"judik",
            "zzzz":"Nigeria",
            "yyyy":"halleluyah"
        },
    angel:{
            "user":"angel",
            "zzzz":"Nigeria",
            "yyyy":"dimosibinigwe"
            }   
        

    
 }
 //app.use(cors)
app.use(express.json())
app.use(express(urlencoded({extended:true})))
app.get('/',(req,res)=>{
     res.sendFile(__dirname+'/index.html')
})
app.get('/api',(req,res)=>{
    res.sendFile(__dirname +'/singers.json')
    //sends the json file 
})
app.get('/api/:name',(req,res)=>{
   let artist= req.params.name.toLowerCase()
   if((singers[artist])){
    res.json(singers[artist])
    console.log(singers[artist])
   }
   else{
    res.send('NOT on liST')
   }
})
app.post('/singers',(req,res)=>{
   //'content-type:application/x-www-form-urlencodeded' ***automatically loads the body object.
   //{'Content-Type:application/json'}
   let data =req.body
   console.log('DONE................................')

   console.log(data)
    
})

app.listen(PORT,()=>{console.log('LISTENING ON PORT 8000!bla bla bla .........')})