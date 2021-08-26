import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
const AddItem = () => {
  let dispatch = useDispatch()
  const [text, setText] = useState("")
  const onsubmit = (e) => {
    e.preventDefault()
    if(text.trim() !==""){
    dispatch({ type: "ADD_TODO", payload: { id: uuid(), todo: text}})
    }
  }
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
         // value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" >Create</button>
      </form>
    </div>
  )
}

export default AddItem
