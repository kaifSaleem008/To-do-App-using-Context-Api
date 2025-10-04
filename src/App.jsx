import { useState ,useEffect} from 'react'
import { TodoContextProvider } from "./contexts/TodoContext"
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos,setTodos]= useState([])
  console.log(todos);
  



  const addTodo= (todo)=>{
    setTodos((prev)=> ([{id:Date.now(),...todo},...prev]))
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=> prev.map((prevtodo)=> (prevtodo.id===id)? todo :prevtodo))
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  const toggleCompleted =(id)=>{
    setTodos((prev)=> prev.map((todo)=> (todo.id ===id)? {...todo,completed:!todo.completed}: todo))

  }

  useEffect(() => {
    if (todos && todos.length>0){
      const todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
   
  }, [])
  
  

  return (
    <TodoContextProvider value={{addTodo,deleteTodo,updateTodo,toggleCompleted}}>
      <div className="bg-[#3e5270] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-[#8da4c8]">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 font-serif">List your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=>(
                <div key={todo.id} className='w-full'>
                   <TodoItem todo={todo}/>
                </div>
              ))
            }

          
          </div>
        </div>
      </div>

    </TodoContextProvider >
  )
}

export default App
