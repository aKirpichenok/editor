import { useState } from "react"
import Form from "./Form"
import EditNote from '../EditNote/EditNote'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from "react-redux"
import { showN } from "../../store/reducers/showNote/showNote"

const AddNote = () => {
    const [form, setForm] = useState(false)
    const dispatch = useDispatch()

    const showForm = () => {
        dispatch(showN({title: '', description: '',tags: ''}))
        setForm(prev => !prev)
    }


    return (
        <div className="add-note">
            <button onClick={showForm}><FontAwesomeIcon icon="plus" /></button>
            {/* {form && <Form />
            } */}
            {form && <div><EditNote show={showForm}/></div>}
        </div>
    )
}

export default AddNote