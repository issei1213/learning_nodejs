console.log("notes.js開始");

const fs = require("fs");

let addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  let notesString = fs.readFileSync("notes-data.json");
  notes = JSON.parse(notesString);

  notes.push(note);
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let showAll = () => {
  console.log("全メモ一覧を表示");
};

let readNote = title => {
  console.log("個別メモ表示", title);
};

let removeNote = title => {
  console.log("メモ削除", title);
};

module.exports = {
  addNote,
  showAll,
  readNote,
  removeNote

};