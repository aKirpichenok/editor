const getNotes = () => {
    try{
        if(localStorage.notes !== '') {
            const notes = JSON.parse(localStorage.notes)
            return {
                notes: {
                    ...notes
                }
            }
    }
    }catch(e) {
        return undefined
    }
    }

export default getNotes