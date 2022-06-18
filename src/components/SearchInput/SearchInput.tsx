import { useState } from "react"
import { useSelector } from "react-redux"
import { getNotes } from "../../store/reducers/selectors/getNotes"
import Notes from "../Notes/Notes"

const SearchInput = () => {
    const notes = Object.values(useSelector(getNotes))
    const tags = Array.from(new Set(Object.values(useSelector(getNotes))
    .filter((item: any) => item.tags !== '')
    .map((item: any) => item.tags)
    .join('').split('#').map(item => '#'+item).splice(1)))
    const [selectTag,setSelectTag]: any = useState({})

    const filter = (arr: any) => {
        console.log(arr)
        if(arr.length < 1) return notes
        return notes.filter((item:any) => item.tags !== '')
        .filter((item: any) => item.tags.split('#').length < 2 ? 
                                                    arr.join('').includes(item.tags) 
                                                    : item.tags.split('#').splice(1)
                                                                          .find((item: any) => arr.join('').includes(item)))   
    }

    const select = (item: any,e: any) => {
        selectTag[item] ? setSelectTag((prev: any) => {
            const newArr = {...prev}
            delete newArr[item]
            return newArr
        }) : setSelectTag((prev: any) => {
            const newArr = {...prev}
            return {...newArr,[item]:item}
        })
        e.currentTarget.className === 'active' ? e.currentTarget.className = '' : e.currentTarget.className = 'active'
    }
    return (
        <>
            <div className="tags">{tags.length>0 && tags.map(item =><button onClick={(e) => select(item,e)}>{item}</button>)}</div>
            <Notes notes={filter(Object.values(selectTag))}/>
        </>
    )
}

export default SearchInput