import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routers/index'

function App() {
  return (
    <div>
      <div className='App'>{useRoutes(routes)}</div>
    </div>
  )
}

export default App
