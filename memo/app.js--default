console.log("app.js稼働開始");

const fs = require("fs");
const os = require("os");

// 独自で作成したファイルの呼び出し(相対パスになる)
const notes = require("./notes.js")
let result = notes.addNote();
console.log(result);


// osのusernameを返すオブジェクト
let user = os.userInfo();
console.log(user)

// greeting.txtがなければ作成し、あればHello, world!を追加するオブジェクト
// fs.appendFile("greeting.txt", "Hello," + user.username + "! あなたは" + notes.age + "才です。", function(err){
//   if(err){
//     console.log(err);
//   }
// })
