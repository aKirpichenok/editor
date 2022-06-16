import { useDispatch, useSelector } from "react-redux"
import { deleteNote } from "../../store/reducers/notesReducer/notesReducer"
import { getNotes } from "../../store/reducers/selectors/getNotes"

const Notes = () => {
    const notes = Object.values(useSelector(getNotes))
    const dispatch = useDispatch()

    return (
        <div className="notes">
            {notes.length > 0 ? notes.map((item: any) => <div key={item.id} className="note">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>Tags: {item.tags}</p>
                <button onClick={() => dispatch(deleteNote({id: item.id}))}>delete</button>
                </div>) :
            <h1>Notes are empty</h1>
            }
        </div>
    )
}

export default Notes