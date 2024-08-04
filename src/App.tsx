import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routers/index'
import { Suspense } from 'react'
import AppHeader from './components/app-header'

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Suspense fallback=''>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
