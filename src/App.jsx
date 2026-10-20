import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import { Navigate } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/create-posts" />} />
        <Route path='/create-posts' element={<CreatePost />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/about' element={<h1>about us</h1>} />
      </Routes>
    </Router>
  )
}

export default App