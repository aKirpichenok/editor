import { useSelector } from "react-redux"
import { getShowNote } from "../../store/reducers/selectors/getNotes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ViewNote = ({ show }: any) => {

    const note = useSelector(getShowNote)

    return (
        <div className="fullscreen_note">
             <div id="view_note">
                 <button className="button" onClick={() => show('show',{})}><FontAwesomeIcon icon="xmark" /></button>
                 <h1>Title: {note.title}</h1>
                 <p>{note.description}</p>
                 <p className="view-tags">{note.tags && note.tags.split('#').map((item: any) => 
                     <button>{item.length > 0 && "#" + item}</button>
                 )}
                 </p>
             </div>
        </div>
    )
}

export default ViewNote