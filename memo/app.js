console.log("app.js稼働開始");

const fs = require("fs");
const notes = require("./notes.js");
const e = require("express");
const yargs = require("yargs");
const argv = yargs.argv;
// const { argv } = require("process");

let command = argv._[0];

if (command === "add"){
  let note = notes.addNote(argv.title, argv.body);
  if (note){
    console.log("保存されました。");
    notes.logNotes(note);
  } else {
    console.log("タイトルが重複しています。");
  }
} else if (command === "list"){
  notes.showAll();
} else if (command === "read"){
  let note = notes.readNote(argv.title);
  if (note){
    console.log("見つかりました。");
    notes.logNotes(note);
  } else {
    console.log("データが見つかりませんでした。");
  }

} else if (command === "remove"){
  let noteRemoved = notes.removeNote(argv.title)
  let message = noteRemoved ? "削除されました。" : "見つかりませんでした。";
  console.log(message);
}