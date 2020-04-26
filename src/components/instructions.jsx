import React, {Component} from 'react';

class Instructions extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
          active: !state.active
        }));
    }

    render(){
        const {active} = this.state;
        return(
            <div onClick={this.handleClick} className={active ?  "Instructions Open" : "Instructions"}>
                <h3 className={active ? "" : "rotate"}>Instructions: </h3>
                {active ? 
                    <div className="instructList">
                        <ul>
                            <li>Play: To input a number click the square. 
                                Please make a selection. 
                                The pad will go away and the selection will appear in the square
                            </li>
                            <br/>
                            <li>New Game: 
                                Make a selection in the bottom box and hit 'Submit' for a game of that difficulty to be created.
                            </li>
                        </ul> 
                    </div> 
                : null}
            </div>
        );
    }
} 

export default Instructions;