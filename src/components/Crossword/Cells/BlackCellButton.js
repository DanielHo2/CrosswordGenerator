import React from "react";

class BlackCellButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleBehavior = this.handleBehavior.bind(this)
    };

    handleBehavior(event) {
        event.preventDefault();
    }
    render() {
        return (
            <button style={
                {
                    width: this.props.size,
                    height: this.props.size,
                    background: 'black',
                    borderColor: 'black',
                    outline: 'none'
                }
            }
                onClick={this.handleBehavior}
                onKeyDown={this.handleBehavior}
            />
        );
    };
};

export default BlackCellButton;