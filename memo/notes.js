console.log("notes.js開始");

const fs = require("fs");

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);

  } catch(e){
    return [];
  };
  
};

let saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};


let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicatedNotes = notes.filter(note => note.title === title) 
  if (duplicatedNotes.length === 0 ){
    notes.push(note);
    saveNotes(notes);
    return note;
  };

};

let showAll = () => {
  console.log("全メモ一覧を表示");
};

let readNote = title => {
  console.log("個別メモ表示", title);
};

let removeNote = title => {
  // 既存のデータを取得
  let notes = fetchNotes();
  // 因数を元に検索し、見つかったら削除
  let filteredNotes = notes.filter(note => note.title !== title);
  // 削除後のデータを削除
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote,
  showAll,
  readNote,
  removeNote

};