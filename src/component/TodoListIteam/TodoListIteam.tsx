import React, { Component } from 'react';
import { ITodo } from "../../types";
import'./TodoListIteam.css'

interface ITodoListItemState{
    done: boolean, 
    important: boolean
}

interface ITodoListItemPops extends ITodo {
    onDoneClick: () => void
    onImportentClick: () => void
    onDeleteClick: () => void
}

export default class TodoListItem extends Component<ITodoListItemPops, ITodoListItemState> {

    state = {
        done: false,
        important: false,
    }


    // onUniversal = (nameState: 'done' | 'important') => {
    //     //@ts-ignore
    //     this.setState ((item) => {
    //         //@ts-ignore
    //         return {
    //             [nameState]: !item[nameState]
    //         }
    //     })
    // }

    render() {
        // console.log(this);

        const { text, done,  important} = this.props;

        let className = '';
        if(done) {
            className += 'done'
        }
        if(important) {
            className += 'important'
        }
        return (
            <li className={className}>
                {text}

                <button onClick={this.props.onDoneClick}>Done</button>
                <button onClick={this.props.onImportentClick}>Important</button>
                <button onClick={this.props.onDeleteClick}>Delete</button>
            </li>
        )
    }
}
