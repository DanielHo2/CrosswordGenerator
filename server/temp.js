const fetch = require("node-fetch");

fetch(`http://localhost:52093/api/signin`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        googleID: "test123@gmail.com"
    })
})
.then(response => {
    console.log(response);
})
.catch(err => {
    console.log(err);
})


fetch(`http://localhost:52093/api/savePuzzle`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({googleID: "test123@gmail.com", puzzle: {
        dim: 16,
        clue_list: [
            {
                word: "CATS",
                clue: "Loopy game may see card-castle collapsing! (4-6)"
            },
            {
                word: "CATS",
                clue: "Loopy game may see card-castle collapsing! (4-6)"
            }
        ]
    }})
})
.then(response => {
    console.log(response.body);
})
.catch(err => {
    console.log(err);
})