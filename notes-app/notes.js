const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return "Your notes...";
}

const readNote = (title) =>{

    const notes = loadNotes();
    note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.bgRed('No entry found for specified key'));
    }

}

const listNotes = () => {

    const notes = loadNotes();
    console.log(chalk.bgGreen('You notes'));
    
    notes.forEach(note => {

        console.log(note.title);
        
    });

}

const addNote = (title, body) => {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter((note) => note.title === title);

    const duplicateNote = notes.find((note) => note.title === title);

    if(duplicateNote){

        notes.push({
            title: title,
            body: body
        })

        console.log('New note was added');
        
    } else {
        
        console.log('Note title taken!');

    }

    saveNotes(notes);
}

const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json', dataJSON);

}

const loadNotes = function(){

    try{

        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        
        return JSON.parse(dataJSON);

    } catch(e){

        return [];

    }
}

const removeNote = (title) => {

    const notesBuffer = loadNotes();

    const arrayCountBefore = notesBuffer.length;

    const dataToSave = notesBuffer.filter((note) => note.title !== title);

    const arrayCountAfter = dataToSave.length;

    if(arrayCountBefore > arrayCountAfter){

        console.log(chalk.bgGreen('Note removed!'));

    } else {

        console.log(chalk.bgRed('No note found!'));

    }

    saveNotes(dataToSave);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}