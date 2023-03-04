import React from "react";

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

class WhiteCellButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'white', hovered: true, selected: false, value: '' }
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this)
        this.handleOnMouseExit = this.handleOnMouseExit.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
        this.handleDeselect = this.handleDeselect.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    };
    handleOnMouseEnter(event) {
        this.setState({ color: '#c5dfd2', hovered: true })
    }
    handleOnMouseExit(event) {
        this.setState({ color: 'white', hovered: false })
    }
    handleOnClick(event) {
        if (this.props.show_solution) {
            return
        }
        else if (this.state.hovered) {
            this.setState({ selected: true })
        }
        else {
            this.setState({ selected: false })
        }
    }
    handleDeselect(event) {
        this.setState({ selected: false })
    }
    handleKeyPress(event) {
        if (this.state.selected && isLetter(event.key)) {
            this.setState({ value: event.key.toUpperCase() })
        } else if (event.keyCode === 8 || event.keyCode === 46 || event.charCode === 8 || event.charCode === 46) {
            //delete keys
            this.setState({ value: '' })
        } else {
            //disable tab selecting and other default behavior
            event.preventDefault()
        }
    }

    render() {
        //Update text of cell based on the show solution prop should be shown
        let cell_text;
        if (this.props.show_solution) {
            cell_text = this.props.solution
        } else {
            cell_text = this.state.value
        }
        return (
            <div style={{ width: this.props.size, height: this.props.size }}>
                <button
                    style={
                        {
                            position: 'absolute',
                            width: this.props.size,
                            height: this.props.size,
                            border: 1,
                            background: this.state.color,
                            outline: 'none'
                        }
                    }
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseExit}
                    onClick={this.handleOnClick}
                    onKeyDown={this.handleKeyPress}
                >
                    <h5 style={{ position: "absolute", userSelect: false, top: 0, left: 0 }}>{this.props.hint_number}</h5>
                    {cell_text}
                </button>
            </div>

        );
    };
};

export default WhiteCellButton;