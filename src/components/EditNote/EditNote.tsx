import { useDispatch, useSelector } from "react-redux"
import { getShowNote } from "../../store/reducers/selectors/getNotes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import { addNote } from "../../store/reducers/notesReducer/notesReducer"


    type ViewNoteDescription = {
        show : (a: string, b: any) => void
    }

const ViewNote = ({ show }: ViewNoteDescription) => {
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
        <div className="block">
        <div className="fullscreen_note">
             <div id="view_note">
                 <button className="button" onClick={() => show('edit',{})}><FontAwesomeIcon icon="xmark" /></button>
                 <h1>Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></h1>
                 <span style ={{paddingTop:'3%',marginLeft:'-85%'}}>DESCRIPTION:</span><p className="textarea">
                     <textarea 
                     value={description} 
                     onChange={(e) => setDiscription(e.target.value)} />
                    
                </p>
                 <p style={{color:'blue', marginTop:'auto', padding: '1%'}}>{note.tags}</p>
                 <button className="save_edit" onClick={edit}><span>Save</span></button>
             </div>  
        </div>
        </div>
    )
}

export default ViewNote