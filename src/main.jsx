import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/ContactUs'
import User from './components/user/User'

// First type of routing 
// const router = createBrowserRouter([
//   { path: '/', 
//     element: <Layout/>,
//     children:[
//       { path: '', element: <Home/> },
//       { path: 'about', element: <About/> },
//       { path: 'contact', element: <Contact/> },
//     ]
//   }
// ])

// Second type of routing 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
