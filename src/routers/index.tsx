import { RouteObject } from 'react-router-dom'
import Discover from '@/views/discover/index'
const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover /> //http://localhost:3002/#/discover can launch the discover page
  }
]
export default routes
