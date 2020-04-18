import React, {Component} from 'react';
import "../styles/Numpad.css";
class Numpad extends Component {
    render(){
        return (
            <div className="NumPad">
                Input Value: 
                <br/>
                <button onClick={() => this.props.change('1')}>1</button>
                <button onClick={() => this.props.change('2')}>2</button>
                <button onClick={() => this.props.change('3')}>3</button>
                <br/>
                <button onClick={() => this.props.change('4')}>4</button>
                <button onClick={() => this.props.change('5')}>5</button>
                <button onClick={() => this.props.change('6')}>6</button>
                <br/>
                <button onClick={() => this.props.change('7')}>7</button>
                <button onClick={() => this.props.change('8')}>8</button>
                <button onClick={() => this.props.change('9')}>9</button>
                <br/>
                <button className="remove-button" onClick={() => this.props.change('')}>Remove</button>
            </div>
        );
    }           
}
export default Numpad;