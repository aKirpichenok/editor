import { useSelector } from "react-redux"
import { getShowNote } from "../../store/reducers/selectors/getNotes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ViewNote = ({ show }: any) => {

    const note = useSelector(getShowNote)


    const close = (e: any) => {
        if(e.target.className === 'fullscreen_note' || e.target.className === 'block') show('show',{})
    }

    return (
        <div className="block" onClick={close}>
        <div className="fullscreen_note">
             <div id="view_note">
                 <button className="button" onClick={() => show('show',{})}><FontAwesomeIcon icon="xmark" /></button>
                 <h1>Title: {note.title}</h1>
                 <p className="textarea">{note.description}</p>
                 <p className="view-tags">{note.tags && note.tags.split('#').map((item: any) => 
                     <button>{item.length > 0 && "#" + item}</button>
                 )}
                 </p>
             </div>
        </div>
        </div>
    )
}

export default ViewNote