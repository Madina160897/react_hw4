import React, { Component } from 'react';
import { TodoList, Header } from "../component"
import { ITodo } from "../types"
import Input from '../component/SearchInput/InputTodo'
import AddInput from '../component/AddInput/AddInput'

interface IAppState {
  todos: ITodo[],
  searchText: string
}

export default class App extends Component<{}, IAppState> {

  state = {
    todos: [
      { id: 1, text: "learn react", done: false, important: false },
      { id: 2, text: "Drink Coffee", done: false, important: false },
      { id: 3, text: "Drink Soda", done: false, important: false }
    ],
    searchText: ''
  }

  onSearch = (value:string) => {
    this.setState ({searchText: value})
  }

  onChangeStateTodos = (id:number, field: string) => {
    console.log({id});
    
    this.setState((state) => {
      const todoIdx = this.state.todos.findIndex(item => item.id === id)
      const newTodo = {
        ...state.todos[todoIdx],
        //@ts-ignore
        [field]: !state.todos[todoIdx][field]
      }

      const before = state.todos.slice(0, todoIdx)
      const after = state.todos.slice(todoIdx + 1)

      return {
        todos: [...before, newTodo, ...after]
      }

    })
  }

  handleDelete = (id:number) => {
    console.log({id});

    this.setState((state) => {
      const todoIdx = this.state.todos.findIndex(item => item.id === id)
      const before = state.todos.slice(0, todoIdx)
      const after = state.todos.slice(todoIdx + 1)

      return {
        todos: [...before, ...after]
      }
      // const todoDeleteIdx = this.state.todos.filter(item => item.id !== id)
      // return {
      //   todos: todoDeleteIdx
      // }    
    })


  }

  onAddTask = (text:string) => {
    this.setState((state) => {
      const newTode: ITodo = {
        id:Math.random(),
        text: text,
        done: false,
        important: false
      }
      return {
        todos: [...state.todos, newTode]
      }
    })
  }

  render() {
    const {searchText, todos } = this.state
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()))
    return (
      <div>
        <Header title="Todo App" />
        <AddInput onAdd={this.onAddTask}/>
        <Input search={this.state.searchText}
        onSearch={this.onSearch}/>
        <TodoList 
        todos={filteredTodos} 
        onDone={(id) => this.onChangeStateTodos(id, 'done')} 
        onImportent={(id) => this.onChangeStateTodos(id, 'important')} 
        onDelete={ this.handleDelete} 
        />
      </div>
    )
  }
};

