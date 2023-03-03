export const empty_cell = ' '

//possible improvements
// - rank a larger list by common letters percentages, take a subset based off the best of that list

export function generateCrossword(MAX_SIZE, word_list, step) {
    let list = []

    //heaps_alg(word_list.length)
    list.push(word_list)
    let best_puzzle_size = 0
    let best_puzzle;
    let best_puzzle_clue_data;

    for (let p = 0; p < list.length; p += step) {
        word_list = list[p];
        crosswordAlg()
    }
    list = []

    /*DEBUG printPuzzleS*/
    printPuzzle(best_puzzle)
    console.log(best_puzzle_clue_data)

    return {
        puzzle: best_puzzle,
        clue_data: best_puzzle_clue_data
    };

    //Build crosswords :D
    function crosswordAlg() {
        const puzzle = []
        const placed_letters = new Map()
        let placed_count = 0
        let clue_data = []

        for (let x = 0; x <= MAX_SIZE; x++) {
            puzzle.push([])
            for (let y = 0; y <= MAX_SIZE; y++) {
                puzzle[x].push(empty_cell)
            }
        }

        placeWord(puzzle, word_list[0].toUpperCase(), -1, 0, 0, 1)

        for (let k = 1; k < word_list.length; k++) {
            const word = word_list[k]
            tryToPlaceWord(word.toUpperCase())
        }
        if (best_puzzle_size < placed_count) {
            best_puzzle = puzzle
            best_puzzle_size = placed_count
            best_puzzle_clue_data = clue_data
        }

        function tryToPlaceWord(c_word) {
            for (let g = 0; g < c_word.length; g++) {
                const letter = c_word.charAt(g)

                if (placed_letters.has(letter)) {
                    const cord_list = placed_letters.get(letter)
                    for (let f = 0; f < cord_list.length; f++) {
                        //console.log(validateSpaceVertical(puzzle, 'EXACTLY', i, element.x, element.y))
                        if (validateSpaceVertical(puzzle, c_word, g, cord_list[f].x, cord_list[f].y)) {
                            placeWord(puzzle, c_word, g, cord_list[f].x - g, cord_list[f].y, 1)
                            placed_count++;
                            return 1;
                        }
                        //console.log(validateSpaceHorizontal(puzzle, 'ELECTRIC', i, element.x, element.y))
                        if (validateSpaceHorizontal(puzzle, c_word, g, cord_list[f].x, cord_list[f].y)) {
                            placeWord(puzzle, c_word, g, cord_list[f].x, cord_list[f].y - g, 0)
                            placed_count++;
                            return 1;
                        }
                    }
                }
            }
        }

        function validateSpaceVertical(A, word, index, x, y) {
            let start_index = x - ((word.length - 1) - ((word.length - 1) - index)) + !!(index)
            let end_index = x + ((word.length - 1) - index) + !!(index)

            //check if it fits within size bounds
            if ((start_index < 0) || (end_index) > MAX_SIZE) {
                return false;
            }
            //check if a word is played directly infront of it
            if ((start_index - 1) >= 0) {
                if (A[start_index - 1][y] !== empty_cell) {
                    return false;
                }
            }
            //check if a word is played directly after of it
            if ((end_index + 1) < MAX_SIZE) {
                if (A[end_index + 1][y] !== empty_cell) {
                    return false;
                }
            }
            //check every letter
            for (let i = 0; i < word.length; i++) {
                //every letter
                if (!((A[start_index + i][y] === empty_cell) || (A[start_index + i][y] === word.charAt(i)))) {
                    return false;
                }
                //every letter to the side
                if (y > 0) {
                    if (A[start_index + i][y] === empty_cell) {
                        if ((A[start_index + i][y - 1] !== empty_cell)) {
                            return false;
                        }
                    }
                }
                //every letter to the other side
                if (y < MAX_SIZE - 1) {
                    if (A[start_index + i][y] === empty_cell) {
                        if ((A[start_index + i][y + 1] !== empty_cell)) {
                            return false;
                        }
                    }
                }
            }

            return true;
        }
        function validateSpaceHorizontal(A, word, index, x, y) {
            let start_index = y - ((word.length - 1) - ((word.length - 1) - index)) + !!(index)
            let end_index = y + ((word.length - 1) - index) + !!(index)

            //check if it fits within size bounds
            if ((start_index < 0) || (end_index) > MAX_SIZE) {
                return false;
            }
            //check if a word is played directly infront of it
            if ((start_index - 1) >= 0) {
                if (A[x][start_index - 1] !== empty_cell) {
                    return false;
                }
            }
            //check if a word is played directly after of it
            if ((end_index + 1) < MAX_SIZE) {
                if (A[x][end_index + 1] !== empty_cell) {
                    return false;
                }
            }
            //check every letter
            for (let i = 0; i < word.length; i++) {
                //every letter
                if (!((A[x][start_index + i] === empty_cell) || (A[x][start_index + i] === word.charAt(i)))) {
                    return false;
                }
                //every letter to the side
                if (x > 0) {
                    if (A[x][start_index + i] === empty_cell) {
                        if ((A[x - 1][start_index + i] !== empty_cell)) {
                            return false;
                        }
                    }
                }
                //every letter to the other side
                if (x < MAX_SIZE - 1) {
                    if (A[x][start_index + i] === empty_cell) {
                        if ((A[x + 1][start_index + i] !== empty_cell)) {
                            return false;
                        }
                    }
                }
            }

            return true;
        }

        //Precondition: word has been validated to fit in space and around neighbors
        // dir = 0 is horrizontal, dir = 1 is vertical, 
        // index = index that it is being added to ('WALTZ' being added to 'SHOWER' would be 3)
        function placeWord(A, word, index, x, y, dir) {
            clue_data.push({ word, x, y, dir })

            for (let i = 0; i < word.length; i++) {
                let c = word.charAt(i)
                A[x + (i * dir)][y + (i * !dir)] = c;

                let cords = { 'x': x + (i * dir), 'y': y + (i * !dir) }

                //remove letter being added on from map
                if (i === index) {
                    if (placed_letters.has(c)) {
                        if (placed_letters.get(c).length > 1) {
                            const get_cords = (element) => { return (element === cords); }
                            placed_letters.get(c).splice(placed_letters.get(c).findIndex(get_cords), 1)
                        } else {
                            placed_letters.delete(c)
                        }
                    }
                    //add other letters to map
                } else {
                    if (placed_letters.has(c)) {
                        placed_letters.get(c).push(cords)
                    } else {
                        placed_letters.set(c, [cords])
                    }
                }
            }
            return;
        }
    }
    function printPuzzle(A) {
        for (let x = 0; x < A.length; x++) {
            let row = ''
            for (let y = 0; y < A.length; y++) {
                row += A[x][y] + ' '
            }
            console.log(row)
        }
    }
    //creates all permutations of input
    //too expensive for browser :c
    /*function heaps_alg(k) {
        if (k === 1) {
            //list.push(word_list)
            return;
        }
        //make more permutations
        heaps_alg(k - 1);
        // Generate permutations for k-th swapped with each k-1 initial
        for (let i = 0; i < k - 1; i += 1) {
            // Swap choice dependent on parity of k (even or odd)
            if (k % 2 === 0) {
                swap(word_list, i, k - 1);
            } else {
                swap(word_list, 0, k - 1);
            }
            heaps_alg(k - 1);
        }
    }

    function swap(A, i, k) {
        const temp = A[i];
        A[i] = A[k];
        A[k] = temp;
    }*/
}