import { useDispatch, useSelector } from "react-redux"
import { getShowNote } from "../../store/reducers/selectors/getNotes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import { addNote } from "../../store/reducers/notesReducer/notesReducer"

const ViewNote = ({ show }: any) => {
    const note = useSelector(getShowNote)
    const dispatch = useDispatch()
    const [title,setTitle] = useState(note.title)
    const [description,setDiscription] = useState(note.description)

    const edit = () => {
        const tags = description.split(' ').filter((item: string) => item.includes('#') && item[0] === "#").join('')
        dispatch(addNote({id:note.id,title,description,tags}))
        show('edit',{})
    }

    return (
        <div className="fullscreen_note">
             <div id="view_note">
                 <button className="button" onClick={() => show('edit',{})}><FontAwesomeIcon icon="xmark" /></button>
                 <h1>Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></h1>
                 <p>
                     <textarea style={{width:'100%', height:'1100%', border:'none'}} 
                     value={description} 
                     onChange={(e) => setDiscription(e.target.value)} />

                </p>
                 <p style={{color:'blue', marginTop:'auto', padding: '1%'}}>{note.tags}</p>
                 <button className="save_edit" onClick={edit}><span>Save</span></button>
             </div>
             
        </div>
    )
}

export default ViewNote