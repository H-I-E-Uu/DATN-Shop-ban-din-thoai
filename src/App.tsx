import React from 'react'
import { useRoutes } from 'react-router-dom'
import ClientLayout from './layout/client'
import AdminLayout from './layout/admin'
import GetList from './components/admin/GetList'
import PostAdd from './components/admin/PostAdd'
import PutEdit from './components/admin/PutEdit'
import Register from './components/admin/Register'
import Login from './components/admin/Login'
import GetListCategory from './components/admin/GetListCategory'
import PostAddCategory from './components/admin/PostAddCategory'
import PutEditCategory from './components/admin/PutEditCategory'


type Props = {}

const App = (props: Props) => {
  const routes = useRoutes([
      {path:"/admin",element:<ClientLayout/>,children:[]},
      {path:"/category",element:<AdminLayout/>,children:[
        {path:'phone/list',element:<GetListCategory/>},
      {path:'phone/add',element:<PostAddCategory/>},
      {path:'phone/:id/edit',element:<PutEditCategory/>},

      ]},
      {path:"/",element:<AdminLayout/>,children:[
      {path:'phone/list',element:<GetList/>},
      {path:'phone/add',element:<PostAdd/>},
      
      {path:'phone/:id/edit',element:<PutEdit/>},
      {path:'register',element:<Register/>},
      {path:'login',element:<Login/>},
      ]},
  ])
  return routes
}

export default App