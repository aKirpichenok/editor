import './styles/FontAwesomeIcons'
import AddNote from "./components/AddNote/AddNote"
import Notes from "./components/Notes/Notes"
import SearchInput from "./components/SearchInput/SearchInput"

const App = () => {


  return (
    <div>
      <SearchInput />
      <Notes />
      <AddNote />
    </div>
  )
}

export default App