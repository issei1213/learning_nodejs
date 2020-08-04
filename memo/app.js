console.log("app.js稼働開始");

const fs = require("fs");
const notes = require("./notes.js");
const e = require("express");
const yargs = require("yargs");
const argv = yargs.argv;
// const { argv } = require("process");

let command = process.argv[2];
// console.log("コマンド：", command);

console.log("yargs", argv);

if (command === "add"){
  notes.addNote(argv.title, argv.body);
} else if (command === "list"){
  console.log("メモを一覧表示します。");
} else if (command === "read"){
  console.log("メモを個別表示します。");
} else if (command === "remove"){
  console.log("メモを削除します。");
}