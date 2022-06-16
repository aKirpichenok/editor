import { useState } from "react"

const SearchInput = () => {
    const [inputValue,setInputValue] = useState('')


    return (
        <div className="search">
            <input 
            type="text" 
            placeholder="Поиск заметок по тегу"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            />
            <button >Find</button>
        </div>
    )
}

export default SearchInput