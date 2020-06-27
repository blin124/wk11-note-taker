const fs = require('fs');
// util promisify functions
const util = require('util');
const { v4: uuidv4 } = require('uuid');

// const asyncRead = util.promisify(fe.Readfile)
// const asyncWrite = util.promisify(fe.Writefile)

const db = {
    
    read() {
        const read = fs.readFileSync("db/db.json", "utf8");
        return JSON.parse(read);
    },
    
    write(note) {
        // grab the array 
        const notes = this.read();
        
        // push the note to the array    
        note.id = uuidv4();
        
        notes.push(note);

        // save array again
        return fs.writeFileSync('db/db.json', JSON.stringify(notes));
    },


   

    delete(id){

        // grab the array
        const notes = this.read();
        

        // filter out the unwanted note
        const filtered = notes.filter((note) => {
            return note.id !== id
        })

        // save the array again
        return fs.writeFileSync('db/db.json', JSON.stringify(filtered));

    },

}

module.exports = db