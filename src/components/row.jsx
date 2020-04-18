import React, {Component} from 'react';
import Square from './square';
import '../styles/Row.css';

class Row extends Component{

    renderSquare(value, key) {
        return (
          <Square value={value} key={key}/>
        );
    }
    
    render(){
        let row = [];
        let key = 0;
        for(let i = 0; i < this.props.boardRow.length; i++)
        {
            row.push(this.renderSquare(this.props.boardRow[i], key));
            key++;
        }
        return (<div className="Row">{row}</div>);
    }
}

export default Row;