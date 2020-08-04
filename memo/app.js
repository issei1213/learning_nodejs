console.log("app.js稼働開始");

const fs = require("fs");
const notes = require("./notes.js");
const e = require("express");
const yargs = require("yargs");
const argv = yargs.argv;
// const { argv } = require("process");

let command = argv._[0];

if (command === "add"){
  notes.addNote(argv.title, argv.body);
} else if (command === "list"){
  notes.showAll();
} else if (command === "read"){
  notes.readNote(argv.title);
} else if (command === "remove"){
  notes.removeNote(argv.title)
}