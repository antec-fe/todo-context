import './App.css'
import ProviderComponent from './store/ToDoContext'
import Form from './components/Form'
import List from './components/List'

function App() {
  return (
    <ProviderComponent>
      <Form/>
      <List/>
    </ProviderComponent>
  )
}

export default App
