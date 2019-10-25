import React, {Component} from 'react'
import './gameBoard.css'

class GameBoard extends Component {

    state = {
        moves: {
            1: ' ',
            2: ' ',
            3: ' ',
            4: ' ',
            5: ' ',
            6: ' ',
            7: ' ',
            8: ' ',
            9: ' '
        },
        won: false
    };

    ox = ['O', 'X'];
    getOX = () => {
        if(this.props.active) {
            return this.ox[0];
        } else {
            return this.ox[1];
        }
    };

    declareWon = () => {
        this.setState({
            ...this.state,
            won: true
        });
        this.props.end();
        console.log('someone won')
    };

    check = () => {
        const winCases = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
        const array = ['0','0','0','0','0','0','0','0','0'];
        for ( let i = 0; i < 9; i++) {
            array[i] = this.state.moves[i];
        }

        let promise = new Promise(function(resolve, reject) {
            for (let i = 0; i < 8; i++) {
                if ((array[winCases[i][0]] === 'O' && array[winCases[i][1]] === 'O' && array[winCases[i][2]] === 'O') || (array[winCases[i][0]] === 'X' && array[winCases[i][1]] === 'X' && array[winCases[i][2]] === 'X')) {
                    resolve(true);
                }
            }
            reject(false);
        });
        promise.then(()=>{
            this.declareWon();
        }).catch(() => {
                this.props.switchPlayer();
            }
        );
    };

    play = (e) => {
        // if (!this.state.won) {
        const a = this.getOX();
        console.log(a);
        this.setState({
                moves: {
                    ...this.state.moves,
                    [e]: a
                }
            }, this.check);
    };

    render() {
        return (
            <div id='gameBoard'>
                <div className="Row1" >
                    <Square id="1" state={this.state.moves} play={this.play} won={this.state.won}/>
                    <Square id="2" state={this.state.moves} play={this.play} won={this.state.won}/>
                    <Square id="3" state={this.state.moves} play={this.play} won={this.state.won}/>
                </div>
                <div className="Row2" >
                    <Square id="4" state={this.state.moves} play={this.play} won={this.state.won}/>
                    <Square id="5" state={this.state.moves} play={this.play} won={this.state.won}/>
                    <Square id="6" state={this.state.moves} play={this.play} won={this.state.won}/>
                </div>
                <div className="Row3" >
                    <Square id="7" state={this.state.moves} play={this.play} won={this.state.won}/>
                    <Square id="8" state={this.state.moves} play={this.play} won={this.state.won}/>
                    <Square id="9" state={this.state.moves} play={this.play} won={this.state.won}/>
                </div>
            </div>
        )
    }
}

class Square extends React.Component {
    state = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    };

    click = () => {
        if(!this.state[this.props.id] && !this.props.won) {
            this.props.play(this.props.id);
            this.setState({
                ...this.state,
                [this.props.id]: true
            });
        } else {

            console.log('invalid move');

        }
    };

    getVal = () => {
        if (this.props.state[this.props.id] === ' ') {
            return <div>&nbsp;</div>;
        } else {
            return this.props.state[this.props.id];
        }
    };

    render() {
        return (
            <button className="square" onClick={this.click} > {this.getVal()} </button>
        );
    }
}

export default GameBoard