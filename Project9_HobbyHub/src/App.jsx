import { useState } from 'react'
import {useRoutes, Link} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import CreatePost from './pages/CreatePost'
import Default from './pages/Default'
import PostList from './pages/PostList'
import EditPost from './pages/EditPost'
import ViewPost from './pages/ViewPost'

function App() {
  let page = useRoutes([
    {
      path: "/",
      element: <PostList/>
    },
    {
      path: "/new",
      element: <CreatePost/>
    },
    {
      path: "/edit/:id",
      element: <EditPost/>
    },
    {
      path:"/gallery/:id",
      element: <ViewPost />
    },
    {
      path: "*",
      element: <Default/>
    }
  ]);

  return (
    <>
        <Header/>
          {/* TODO : It should change current page, and Link you back to App page when done*/}
          {/* TODO: should take in just a question and submit */}
        <div className='main_content'>
          {page}
        </div>
    </>
  )
}

export default App
