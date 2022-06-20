import { useState } from "react"
import Form from "./Form"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddNote = () => {
    const [form, setForm] = useState(false)

    const showForm = () => {
        setForm(prev => !prev)
    }


    return (
        <div>
            <button onClick={showForm}><FontAwesomeIcon icon="plus" /></button>
            {form && <Form />
            }
        </div>
    )
}

export default AddNote