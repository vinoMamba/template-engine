import {createHashRouter } from 'react-router-dom'
import App from '../App'

export const routes = createHashRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/about',
    element: <div>about</div>,
  },
  // 添加404页面
  {
    path: '*',
    element: <div>404</div>,
  },
])
