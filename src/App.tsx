import './styles/FontAwesomeIcons'
import AddNote from "./components/AddNote/AddNote"
import SearchInput from './components/SearchInput/SearchInput'

const App = () => {


  return (
    <div>
      <SearchInput />
      <AddNote />
    </div>
  )
}

export default App