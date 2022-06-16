export const customMiddleware = (store: any) => (next: any) => (action: any) => {
    switch (action.type) {
        case 'notes/addNote': {
            const {id, title, description, tags} = action.payload
            if(localStorage.notes){
                const notes = JSON.parse(localStorage.notes)
                notes[id] = {
                    id,
                    title,
                    description,
                    tags: tags,
                }
                localStorage.notes = JSON.stringify(notes)
            }else {
                localStorage.notes = JSON.stringify({
                    [id]: {
                        id,
                        title,
                        description,
                        tags,
                    }
                })
            }
            next(action)
            break;
        }
        case 'notes/deleteNote': {
            const {id} = action.payload
            const notes = JSON.parse(localStorage.notes)
            delete notes[id]
            localStorage.notes = JSON.stringify(notes)
            break;
        }
        default: break;
    }
    next(action)
}