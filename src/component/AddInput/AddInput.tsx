import React, { Component, ChangeEvent } from 'react'

interface IAddInputProps {
    onAdd: (text:string) => void
}

export default class AddInput extends Component<IAddInputProps> {

    state = {
        text: ''
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({text:event.target.value})        
    }

    onSumbit = () => {
        this.props.onAdd(this.state.text);
        this.setState({text: ''})
    }

    render() {
        // const { onAdd } = this.props
        return (
            <div>
                <input type="text" 
                value={this.state.text}
                onChange={this.handleChange}/>
                <button disabled={this.state.text.length === 0} onClick={ this.onSumbit}>Add</button>
            </div>
        )
    }
}
