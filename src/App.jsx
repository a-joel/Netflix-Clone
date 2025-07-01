import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Trending from './components/trending/Trending.jsx'
import Reasons from './components/reasons/Reasons.jsx'
import Questions from './components/questions/Questions.jsx'
import GetStarted from './components/getstarted/GetStarted.jsx'
import Footer from './components/footer/Footer.jsx'
import Signin from './components/signin/Signin.jsx'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/netflix-clone"
          element={
            <>
              <Navbar />
              <Trending />
              <Reasons />
              <Questions />
              <GetStarted />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
