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
  
  };

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