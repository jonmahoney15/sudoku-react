import React, {Component} from 'react';
import Row from './row';
import "../styles/Board.css";


const API = 'http://sugoku.herokuapp.com/board?difficulty=';

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            board : [],
            isLoading: true,
            active: false,
            difficulty: 'easy'
        };
        this.handleChange = this.handleChange.bind(this);
        this.newGame = this.newGame.bind(this);
    }

    /*async componentDidMount(){
        const response = await fetch(API+'easy');
        const data = await response.json();
        this.setState({board: data.board, isLoading: false});
        console.log(this.state.board);
    }*/

    async newGame(){
        this.newGame.preventDefault();
        
        const response = await fetch(API+this.state.difficulty);
        const data = await response.json();
        this.setState({board: data.board, isLoading: false});
        this.setState(state => ({
            active: !state.active
        }));
        console.log(this.state.board);
    }

    handleChange(event) {
        this.setState({
          difficulty: event.target.value
        });
    }

    renderRow(board){
        return <Row boardRow={board}/>;
    }

    render(){
        const {board, isLoading, active} = this.state;
        if(isLoading)
        {
            return(
            <div className="Content"> 
                <p className="loading">Loading...</p>
                <div className="newGameContainer">
                <form onSubmit={this.newGame}>
                    <div className="form-check">
                        <label>
                        <input
                            type="radio"
                            value="easy"
                            checked={this.state.difficulty === 'easy'}
                            onChange={this.handleChange}
                        />
                            Easy
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                        <input
                            type="radio"
                            value="medium"
                            checked={this.state.difficulty === 'medium'}
                            onChange={this.handleChange}
                        />
                            Medium
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                        <input
                            type="radio"
                            value="hard"
                            checked={this.state.difficulty === 'hard'}
                            onChange={this.handleChange}
                        />
                            Hard
                        </label>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary mt-2" type="submit">
                            New Game
                        </button>
                    </div>
                </form>
            </div>
        </div>
            );
        }
        return (
            <div className="Content">
                <p>{this.state.difficulty}</p>
                {active ? <div className="boardContainer">
                    {this.renderRow( board[0])}
                    {this.renderRow( board[1])}
                    {this.renderRow( board[2])}
                    {this.renderRow( board[3])}
                    {this.renderRow( board[4])}
                    {this.renderRow( board[5])}
                    {this.renderRow( board[6])}
                    {this.renderRow( board[7])}
                    {this.renderRow( board[8])}
                    <br/>
                </div> : null}
                <div className="newGameContainer">
                    <form onSubmit={this.newGame}>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                value="easy"
                                checked={this.state.difficulty === 'easy'}
                                onChange={this.handleChange}
                            />
                                Easy
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                value="medium"
                                checked={this.state.difficulty === 'medium'}
                                onChange={this.handleChange}
                            />
                                Medium
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                value="hard"
                                checked={this.state.difficulty === 'hard'}
                                onChange={this.handleChange}
                            />
                                Hard
                            </label>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary mt-2" type="submit">
                                New Game
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
        
    }
}

export default Board;