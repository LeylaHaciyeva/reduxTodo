import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

const Lists = () => {
    const todos = useSelector(state => state)
   localStorage.setItem("reduxStore", JSON.stringify(todos))
    useEffect(() => {
        localStorage.setItem("reduxStore", JSON.stringify(todos))
    }, [todos])
    return (
        <ul>
            {
                todos.map((todo, index) => {
                    return (<ListItem key={index} todo={todo} />)
                })
            }
        </ul>
    )
}

export default Lists
