import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from './redux/state'

const ListItem = ({ todo }) => {
    let dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [text, setText] = useState(todo.todo)
    return (
        <li>
            {editable ? (<input type="text" value={text} onChange={(e) => setText(e.target.value)} />) : todo.todo}
            <div>
                <i
                    title={editable ? "Update" : "Edit"}
                    className={editable ? "fas fa-save" : "fas fa-pen"}
                    onClick={() => {

                        if (editable) {
                            setText(todo.todo)
                            dispatch({
                                type: "UPDATE",
                                payload: {
                                    ...todos,todo:text
                                }
                            })
                        }
                        setEditable(!editable)

                    }
                    }
                ></i>
                <i
                    title="Delete"
                    className="fas fa-trash"
                    onClick={(e) => {
                        dispatch({ type: "DELETE", payload: todo.id })
                    }}
                ></i>
            </div>
        </li >

    )
}

export default ListItem
