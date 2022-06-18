import { deleteNote } from "../../store/reducers/notesReducer/notesReducer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from "react-redux"

const ShowNote = ({ item, show }: any) => {
    const dispatch = useDispatch()

    return (
        <>
        <h1>{item.title}</h1> 
                <p>{item.description}</p>
                <p>Tags: {item.tags}</p>
                <div>
                    <button onClick={() => show('show',item)}><FontAwesomeIcon icon="eye" /></button>
                    <button onClick={() => show('edit',item)}><FontAwesomeIcon icon="pen" /></button>
                    <button onClick={() => dispatch(deleteNote({id: item.id}))}><FontAwesomeIcon icon="trash-can" /></button>
                </div>
        </>
    )
}

export default ShowNote