import React, {Component} from 'react';
import GetInput from "./components/GetInput"
import About from "./components/About";
import Status from "./components/Status";
import ToolBar from "./components/ToolBar";
import GameBoard from "./components/GameBoard";

class App extends Component {
  state = {
    player1 : '',
    player2 : '',
    started: false,
    player1State: {
      active: true
    },
    player2State: {
      active: false
    },
    won: false
  };

  updatePlayers = (names) => {
    this.setState({
      player1: names.player1,
      player2: names.player2,
      started: true
    });
  };

  switchPlayer = () => {
    this.setState({
      player1State: {
        active: !this.state.player1State.active
      },
      player2State: {
        active: !this.state.player2State.active
      }
    });
  };

  end = () => {
      this.setState({
        won: true
      })
  };

  render() {
    return (
        <div className="App">
          <About/>
          <hr />
          {
            !this.state.started ?
              <GetInput id="input" message="Enter player's names" updatePlayers={this.updatePlayers}/> :
              <div>
                {
                  !this.state.won ?
                      <Status message="Your turn => " state={this.state} /> :
                      <Status message="You Won " state={this.state} />
                }
                <GameBoard active={this.state.player1State.active} switchPlayer={this.switchPlayer} end={this.end}/>
                <ToolBar />
              </div>
          }
        </div>
    );
  }
}

export default App;
