import React, {Component} from 'react'

class Status extends Component {
    tell = () => {
        if (this.props.state.player1State.active) {
            return this.props.state.player1
        } else {
            return this.props.state.player2
        }
    };

    render() {
        return (
            <div>
                <h3>Player1 : {this.props.state.player1}</h3>
                <h3>Player2 : {this.props.state.player2}</h3>
                <h2>{this.props.message}{this.tell()}</h2>
                <hr />
            </div>
        )
    }
}

export default Status