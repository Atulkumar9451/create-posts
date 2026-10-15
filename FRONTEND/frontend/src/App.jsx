import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'


function App() {
  return (
    <Router>
      <Routes>
         <Route path='/create-posts' element={<CreatePost />} />
         <Route path='/feed' element={<Feed />} /> 
         <Route path='/about' element={<h1>about us</h1>} />
      </Routes>
    </Router> 
  )
}

export default App