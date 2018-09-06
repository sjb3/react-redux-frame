 import React from 'react'

 export default ({todos, deleteTodo}) => {
   const todoList = todos.length ? (
     todos.map(todo => {
      return (
        <div className='collection-item' key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
   ) : (
     <p className='center'>Completed today's agenda!</p>
   )
   return (
     <div className='todos collection'>
       {todoList}
     </div>
   )
 }
