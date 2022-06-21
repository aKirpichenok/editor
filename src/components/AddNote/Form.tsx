import { useState } from "react"
import { useDispatch } from "react-redux"
import {addNote} from "../../store/reducers/notesReducer/notesReducer"


type FormDescription = {
    close: () => void
}

const Form = ({close}: FormDescription ) => {
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
        close()
    }

    return (
        <div className="add-note__form">
            <form onSubmit={addNotes}>
                <input className="add-note__form__title" 
                       type="text" 
                       placeholder="Title" 
                       value={title} 
                       onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                       className="add-note__form__description" 
                       placeholder="Description" 
                       value={description} 
                       onChange={(e) => setDiscription(e.target.value)}
                />
                <input 
                       type="submit" 
                       value="Add" 
                       className="add-note__form__button"
                />
            </form>
        </div>
    )
}

export default Form