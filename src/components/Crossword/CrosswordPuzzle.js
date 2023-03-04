import React from "react";
import WhiteCellButton from "./Cells/WhiteCellButton.js";
import BlackCellButton from "./Cells/BlackCellButton.js";
import { empty_cell } from "./CrosswordAlgorithm.js";

class CrosswordPuzzle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show_solution: false }
        this.handleShowPuzzle = this.handleShowPuzzle.bind(this)
        this.getHintNumber = this.getHintNumber.bind(this)
        this.handleSavePuzzle = this.handleSavePuzzle.bind(this)
    };
    handleSavePuzzle(event) {
        //TODO: save this.props.clue_list
        console.log('TODO: SAVE PUZZLE')
    }
    handleShowPuzzle(event) {
        this.setState({ show_solution: !this.state.show_solution })
    }
    getHintNumber(x, y) {
        for (let i = 0; i < this.props.crossword.clue_data.length; i++) {
            if ((this.props.crossword.clue_data[i].x === x) && (this.props.crossword.clue_data[i].y === y)) {
                return this.props.crossword.clue_data[i].id
            }
        }
    }
    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <div style={{ margin: 20 }}>
                        <button onClick={this.handleShowPuzzle} className="btn-green">Show Solved Puzzle</button>
                    </div>
                    <div  style={{ margin: 20 }}>
                        <button onClick={this.handleSavePuzzle} className="btn-green">Save Puzzle</button>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {
                        this.props.crossword?.puzzle.map((row, x) => {
                            return <div style={{ display: 'flex', flexDirection: 'row' }} key={x}>
                                {
                                    row.map((cell, y) => {
                                        if (cell === empty_cell) {
                                            return <BlackCellButton size={this.props.size} key={`x:${x},y${y}`} />
                                        }
                                        //make white cell with hint num
                                        let hint_num = this.getHintNumber(x, y)
                                        if (hint_num > 0) {
                                            return <WhiteCellButton
                                                solution={cell}
                                                size={this.props.size}
                                                key={`x:${x},y:${y}`}
                                                hint_number={`${hint_num}`} s
                                                show_solution={this.state.show_solution}
                                            />
                                        }
                                        //make white cell without hint num
                                        return <WhiteCellButton
                                            solution={cell}
                                            size={this.props.size}
                                            key={`x:${x},y:${y}`}
                                            show_solution={this.state.show_solution}
                                        />
                                    })
                                }
                            </div>
                        })
                    }
                </div>
            </div>
        );
    };
};

export default CrosswordPuzzle;