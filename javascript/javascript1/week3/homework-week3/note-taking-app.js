const notes = [];
const saveNote = (content, id) => {
  notes.push({ content, id });
};

saveNote('work', 1);
saveNote('study', 2);
saveNote('buy food', 3);
console.log(notes);

const getNote = (id) => {
  if (id === undefined) {
    console.error('ID Not Found');
    return null;
  }
  if (typeof id !== 'number') {
    console.error(`Id is not a number`);
    return null;
  }
  const foundNote = notes.find((note) => {
    return id === note.id;
  });
  if (foundNote) {
    return foundNote;
  }
  console.error(`Note with id:${id} not found`);
  return null;
};

const firstNote = getNote(1);
const secondNote = getNote(2);
console.log(firstNote);
console.log(secondNote);

notes.forEach((note) => {
  const notesId = note.id;
  const notesContent = note.content;
  console.log(`The note with id:${notesId}, has the following note text: ${notesContent}`);
});
