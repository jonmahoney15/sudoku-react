import React, {Component} from 'react';
import "../styles/Number.css";
class Number extends Component{
    render(){
        return (<button value={this.props.value} className="NumberButton">{this.props.value}</button>);
    }
}

export default Number;