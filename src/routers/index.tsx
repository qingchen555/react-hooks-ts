import { Navigate } from 'react-router-dom'
import { RouteObject } from 'react-router-dom'
import Discover from '@/views/discover/index'
import Mine from '@/views/mine'
import Focus from '@/views/focus'
import Download from '@/views/download'
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/discover' />
  },
  {
    path: '/discover',
    element: <Discover /> //http://localhost:3002/#/discover can launch the discover page
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]
export default routes
