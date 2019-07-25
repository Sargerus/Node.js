const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return "Your notes...";
}

const addNote = function(title, body) {

    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })

    if(duplicateNotes.length === 0){

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

const saveNotes = function(notes){

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

const removeNote = function(title){

    const notesBuffer = loadNotes();

    const arrayCountBefore = notesBuffer.length;

    const dataToSave = notesBuffer.filter(function(note){
        return note.title !== title;
    });

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
    removeNote: removeNote
}