const chalk = require('chalk');
const Notes = require('./notes.js');
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { Notes.addNote(argv.title, argv.body); }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { Notes.removeNote(argv.title); }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler() { 
        Notes.listNotes();
     }
})

// Create read command
yargs.command({
    command: "read",
    describe: "Reding the note",
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) { Notes.readNote(argv.title); }
})

yargs.parse();