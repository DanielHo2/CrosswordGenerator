const {exec} = require('child_process');

function createCrosswordJson(keyword) {
    exec(`python3 findClues.py ${keyword}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: $stdout`);
    })
}