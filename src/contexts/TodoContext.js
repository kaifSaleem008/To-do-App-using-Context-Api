import {createContext,useContext} from "react"

const todoContext = createContext({
    todos:[
        {
            id:1,
            todo:"msg",
            completed:false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
})

const TodoContextProvider=todoContext.Provider

const useTodo=()=>{
    return useContext(todoContext)
}

export {TodoContextProvider,useTodo,todoContext}