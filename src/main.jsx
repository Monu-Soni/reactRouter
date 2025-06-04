
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Home, About, Contact, GitHub, User } from './Components/index/index.js'
import { GitHubLoader } from './Components/GitHub/GitHub.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route loader={GitHubLoader} path='github' element={<GitHub />} />
      <Route path='user/:id' element={<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
