// var MongoClient = require('mongodb').MongoClient();
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// // MongoClient.connect(url, function(err, db) {
// //     if (err) throw err;
// //     var dbo = db.db("mydb");
// //     dbo.createCollection("users", function(err, res) {
// //       if (err) throw err;
// //       console.log("Collection created!");
// //       db.close();
// //     });
// //   });

// module.exports=function(){
//     this.insertUser=function insertUser(uname,ugender){
//         MongoClient.connect(url, function(err, db) {
//             if (err) throw err;
//             var dbo = db.db("mydb");
//             var myobj = { name: uname, gender: ugender };
//             dbo.collection("users").insertOne(myobj, function(err, res) {
//               if (err) throw err;
//               console.log("1 document inserted");
//               db.close();
//             });
//           });
          
//     };
// };
