import { useState } from "react"
import Form from "./Form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from "react-redux"
import { showN } from "../../store/reducers/showNote/showNote"


type FunctionDescription = () => void


const AddNote = () => {
    const [form, setForm] = useState(false)
    const dispatch = useDispatch()

    const close: FunctionDescription = () => {
        setForm(prev => !prev)
    }

    const showForm: FunctionDescription = () => {
        dispatch(showN({title: '', description: '',tags: ''}))
        close()
    }


    return (
        <div className="add-note">
            <button onClick={showForm}><FontAwesomeIcon icon="plus" /></button>
            {form && <Form close={close}/>}
        </div>
    )
}

export default AddNote