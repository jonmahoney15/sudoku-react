import React, {Component} from 'react';
import "../styles/Square.css";
import Numpad from "./numpad";

class Square extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false,
            value: this.props.value
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
          active: !state.active
        }));
    }

    changeValue(inputValue) {
        console.log(this.state.value);
        this.setState({
            value: inputValue
        });
        console.log(this.state.value);
    }

    render(){
        const {active, value} = this.state;
        return(
            <div onClick={this.handleClick} className={active ? "Square Active" : "Square"}>
                {value === 0 ? " " : value}
                {active ? <Numpad change={this.changeValue.bind(this)}/> : null}
            </div>
        );
    }
}

export default Square;