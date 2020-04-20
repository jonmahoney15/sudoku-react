import React, {Component} from 'react';
import ReactToPrint from 'react-to-print';
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        this.newGame();
    }

    async newGame(){
        const {difficulty} = this.state;
        console.log(API+difficulty);
        const response = await fetch(API+difficulty);
        console.log(response);
        const data = await response.json();
        this.setState({board: data.board, isLoading: false});
        console.log(this.state.board);
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.setState({isLoading: true});
        this.newGame();
    }

    handleChange(event) {
        this.setState({
          difficulty: event.target.value
        });
    }

    capitilizeFirst(string) 
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderRow(board){
        return <Row boardRow={board}/>;
    }

    render(){
        const {board, isLoading} = this.state;
        if(isLoading)
        {
            return(
            <div className="Content"> 
                <p className="loading">Loading...</p>
            </div>
            );
        }
        return (
            <div className="Content">
                <div className="Instructions">
                    <h3>Instructions: </h3>
                    <ul>
                        <li>Play: To input a number click the square. 
                            Please make a selection. 
                            The pad will go away and the selection will appear in the square
                        </li>
                        <br/>
                        <li>New Game: 
                            Make a selection in the bottom box and hit 'New Game' for a game of that difficulty to be created.
                        </li>
                    </ul>
                </div>
                <ReactToPrint
                    trigger={() => <button className='print'>Print board!</button>}
                    content={() => this.componentRef}
                />
                <p>Difficulty: {this.capitilizeFirst(this.state.difficulty)}</p>
                <div className="boardContainer" ref={el => (this.componentRef = el)}>
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
                </div>
                <div className="newGameContainer">
                    <h3>Select a New Game: </h3>
                    <form onSubmit={this.handleSubmit}>
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
                            <button className="new-game" type="submit" value="Submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
        
    }
}

export default Board;