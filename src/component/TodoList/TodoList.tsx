import TodoListItem from "../TodoListIteam/TodoListIteam"
import { ITodo } from "../../types"
import { FC } from "react"

interface ITodoListPops {
    todos: ITodo[]
    onDone: (id:number) => void
    onImportent: (id:number) => void
    onDelete: (id:number) => void
}

const TodoList: FC<ITodoListPops> = (props) => {
   
    return (
        <ul>
            {/* {props.todos.map(item => <TodoListItem text={item.name} done={item.done} important={item.important}/>)} */}
            {props.todos.map(item => (
                <TodoListItem key={item.id} {...item}
                    onDoneClick={() => props.onDone(item.id)}
                    onImportentClick={() => props.onImportent(item.id)}
                    onDeleteClick={() => props.onDelete(item.id)}
                />
            ))}
            {/* <TodoListItem text="learn react" />
            <TodoListItem text="execute Task" /> */}
        </ul>
    )
}
export default TodoList