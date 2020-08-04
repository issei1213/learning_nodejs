console.log("notes.js開始");

let addNote = (title, body) => {
  console.log("メモを追加", title, body);
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