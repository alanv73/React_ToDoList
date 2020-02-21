import React, { Component } from "react";
import Item from "./Item";
import './List.css';

class List extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = { todolist: [] };
    }

    getTasks() {
        var todoList = [];
        this.setState({ todolist: todoList });
    }

    hideClick() {
        let taskInput = document.querySelector('input[type=text]');

        if (taskInput.style.display === "none") {
            taskInput.style.display = "block";
        } else {
            taskInput.style.display = "none";
        }
    }

    deleteItem(e) {
        var todoList = this.state.todolist;

        todoList.splice(e, 1);
        this.setState(todoList);
    }

    handleChange(e) {
        if (e.key === 'Enter') {
            var todoList = this.state.todolist;

            todoList.push({ todo: e.target.value });
            this.setState(todoList);
            e.target.value = '';
        }
    }

    componentDidMount() {
        this.getTasks();
    }

    render() {
        console.log(this.state.todolist);
        var todoListItems = this.state.todolist.map((item, index) => {
            console.log(item);
            return (
                <Item handleDelete={this.deleteItem} todoItem={item} index={index} />
            );
        });


        return (
            <div id="container">
                <h1>To-Do List<i onClick={this.hideClick} class="fas fa-plus"></i></h1>
                <input onKeyDown={this.handleChange} type="text" placeholder="Add New Todo" />
                <ul>
                    {todoListItems}
                </ul>
            </div>
        );
    }
}

export default List;