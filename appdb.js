const mysql = require("mysql")
var con = mysql.createConnection({
  host: "127.0.0.1",       //This is your localhost IP
   user: "root",         // "newuser" created in Step 1(e)
   password: "123456789",  // password for the new user
   database: "kooplogin",      // Database name
   port: "3306"  
});

function getuserlist(){
   return new Promise((success, reject) => {
    con.query('SELECT * FROM userlogins',function(err,rows,col){
        if(err){
           reject(500);
        }else{
            success(rows);
        }
    })
   })
}
function adduser(id,name,pass){
    return new Promise((success, reject) => {
    con.query("INSERT INTO userlogins (userId, username, password) VALUES(?,?,?)",[id,name,pass],
    function(err, res){
        if(err){
            reject(500);
        }else{
            success(res);
        }
    })
})
}
function updateuser(name,pass,id){
    return new Promise((success, reject) => {
    con.query("UPDATE userlogins SET username=?,password=? WHERE userId=? ",[name,pass,id],
    function(err, res){
        if(err){
           success(500);
        }else{
            success(res);
        }
    })
})
}
function deleteuser(id){
    return new Promise((success, reject) => {
    con.query("DELETE FROM userlogins WHERE userId=? ",[id],
    function(err, res){
        if(err){
            success(500);
        }else{
            success(res);
        }
    })
})
}
module.exports = {
    getuserlist,deleteuser,updateuser,adduser
}
