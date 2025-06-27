import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Trending from './components/trending/Trending.jsx'
import Reasons from './components/reasons/Reasons.jsx'
import Questions from './components/questions/Questions.jsx'
import GetStarted from './components/getstarted/GetStarted.jsx'
import Footer from './components/footer/Footer.jsx'
function App() {
  return (
    <div>
      <Navbar />
      <Trending />
      <Reasons />
      <Questions />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
