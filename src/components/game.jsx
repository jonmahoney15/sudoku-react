import React, {Component} from 'react';
import Board from './board';
import '../styles/App.css';
class Game extends Component{

    render(){
        return(
            <div>
                <Board/>
            </div>
        );
    }
}

export default Game;