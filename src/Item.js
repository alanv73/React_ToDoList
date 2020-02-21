import React, { Component } from "react";
import './Item.css';

class Item extends Component {
    render() {
        return (
            <li><span><i onClick={() => this.props.handleDelete(this.props.index)} index={this.props.index} class='far fa-trash-alt'></i></span> {this.props.todoItem.todo}</li>
        );
    }
}

export default Item;