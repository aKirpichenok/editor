import { useDispatch, useSelector } from "react-redux"
import { getNotes } from "../../store/reducers/selectors/getNotes"
import { useState } from "react"
import ViewNote from "../ViewNote/ViewNote"
import ShowNote from "./ShowNote"
import EditNote from "../EditNote/EditNote"
import { showN } from "../../store/reducers/showNote/showNote"



const Notes = () => {
    const notes = Object.values(useSelector(getNotes))
    const dispatch = useDispatch()
    const [showNote, setshowNote] = useState(false)
    const [editNote,setEditNote] = useState(false)


    const show = (type: string,item: any) => {
        dispatch(showN(item))
        switch(type){
            case 'show':
                setshowNote(prev => !prev)
                break;
            case 'edit':
                setEditNote(prev => !prev)
                break;
        }
    }

    const edit = () => {
        setEditNote(prev => !prev)
    }

    return (
        <div className="notes"> 
            {notes.length > 0 ? notes.map((item: any) => <div key={item.id} className="note">
                <ShowNote item={item} show={show} edit={edit} />
                </div>) :
            <h1>Notes are empty</h1>
            }
            {showNote && <ViewNote show={show}/>}
            {editNote && <EditNote show={show}/>}
        </div>
    )
}

export default Notes