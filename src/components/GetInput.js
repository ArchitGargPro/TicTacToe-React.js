import React, {Component} from "react";

class GetInput extends Component {
    state = {
        player1: '',
        player2: ''
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    };

    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.updatePlayers(this.state);
    };

    render() {
        return (
            <div className="InputBox">
                <form onSubmit={this.submit}>
                    <h2>{this.props.message}</h2>
                    <div className="box">
                        <label htmlFor="Player1">Player 1 </label>
                        <input type="text" id="player1" onChange={this.handleChange}/>
                    </div>
                    <div className="box">
                        <label htmlFor="Player2">Player 2 </label>
                        <input type="text" id="player2" onChange={this.handleChange}/><br/>
                    </div>
                    <button type="submit" id="play" value="play" onClick={this.submit}>PLAY</button>
                </form>
                <hr />
            </div>
        )
    }
}

export default GetInput;