import './App.css'
import { Link, useRoutes } from 'react-router-dom'
import routes from './routers/index'
import { Suspense } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppDispatch, useAppSelector } from './store'
import { changeMessageAction } from './store/modules/counter'

function App() {
  const { count, message } = useAppSelector(
    state => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()
  function handleMessage() {
    console.log('handle message')
    //如果想修改state：message，必须使用dispatch action
    dispatch(changeMessageAction('hhhhh'))
  }
  return (
    <div className='App'>
      <div>
        <h1>{count}</h1>
        <h1>{message}</h1>
        <button onClick={handleMessage}>update message</button>
      </div>

      <div className='nav'>
        <Link to='/discover'>发现音乐</Link>
        <Link to='/mine'>我的音乐</Link>
        <Link to='/focus'>关注</Link>
        <Link to='/download'>下载客户端</Link>
      </div>
      <Suspense fallback=''>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
