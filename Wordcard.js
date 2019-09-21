import React, { Component } from 'react';
import './App.css';

export default class Wordcard extends Component {
    render() {
        return (
            <div>{this.props.value}</div>
        )
    }
}
export default Wordcard;