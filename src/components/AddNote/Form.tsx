import { useState } from "react"
import { useDispatch } from "react-redux"
import {addNote} from "../../store/reducers/notesReducer/notesReducer"

const Form = () => {
    const [title,setTitle] = useState('')
    const [description,setDiscription] = useState('')

    const dispatch = useDispatch()

    const addNotes = (e :any) => {
        e.preventDefault()
        if(description.length < 1) return alert('Descriprion is empty')
        if(title.length < 1) return alert('Title is empty')
        const tags = description.split(' ').filter(item => item.includes('#') && item[0] === "#").join('')
        dispatch(addNote({id:Math.random(),title,description,tags}))
        setTitle('')
        setDiscription('')
    }

    return (
        <div>
            <form onSubmit={addNotes}>
                <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="text" value={description} onChange={(e) => setDiscription(e.target.value)}/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Form