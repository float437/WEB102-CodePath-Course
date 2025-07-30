import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import ViewPost from './pages/ViewPost'
import SideBar from './components/SideBar'
import Default from './pages/Default'
import { Link } from 'react-router-dom'



const App = () => {
  
  const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  const posts = [
      {'id':'1', 
      'title': 'Cartwheel in Chelsea 🤸🏽‍♀️',
      'author':'Harvey Milian', 
      'description': descr},
      {'id':'2', 
      'title': 'Love Lock in Paris 🔒',
      'author':'Beauford Delaney', 
      'description':descr},
      {'id':'3', 
      'title': 'Wear Pink on Fridays 🎀',
      'author':'Onika Tonya', 
      'description':descr},
      {'id':'4', 
      'title': 'Adopt a Dog 🐶',
      'author':'Denise Michelle', 
      'description':descr},
  ]


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<HomePage/>
    },
    {
      path:"gallery/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"gallery/edit/:id/name/:name/speed/:speed/color/:color",
      element: <EditPost data={posts} />
    },
    {
      path:"gallery/:id/name/:name/speed/:speed/color/:color",
      element: <ViewPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path:"/gallery",
      element: <ReadPosts data={posts}/>
    },
    {
      path: "*",
      element:<Default/>
    }
  ]);

  return ( 

    <div className="App">
      <SideBar className="sideNav" />
      <div className="mainContent">
        {element}
      </div>
        
    </div>

  )
}

export default App
