import { useState } from "react"
import Form from "./Form"

const AddNote = () => {
    const [form, setForm] = useState(false)

    const showForm = () => {
        setForm(prev => !prev)
    }


    return (
        <div>
            <button onClick={showForm}>AddNote</button>
            {form && <Form />
            }
        </div>
    )
}

export default AddNote