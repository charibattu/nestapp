const express =require('express');
const app = express();
const db = require('./appdb');
var fs = require('fs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(1623,()=>{
    console.log('connection is success')
});

app.get('/usereslist',(req, res)=>{
db.getuserlist()
.then((usereslist)=>{
res.send(usereslist)
})
.catch((err)=>{
    res.send(err)
})
});

app.put('/useredit',(req, res)=>{
    db.updateuser(req.body.username,req.body.password,req.body.userId)
    .then(()=>{
    res.send(req.body)
    })
    .catch((err)=>{
        res.send(err)
    })
 });

app.post('/loginuser',(req, res)=>{
    db.adduser(req.body.userId,req.body.username,req.body.password)
    .then((loginuser)=>{
    res.send(loginuser)
    })
    .catch((err)=>{
        res.send(err)
    })
 });

app.delete('/deleteuser',(req, res)=>{
    db.deleteuser(req.body.userId)
    .then((deleteuser)=>{
    res.send(deleteuser)
    })
    .catch((err)=>{
        res.send(err)
    })
 });