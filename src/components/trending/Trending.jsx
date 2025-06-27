import React from 'react'
import './Trending.css'
function Trending() {
  const trendingMovies = [
    { id: 1, title: 'Wenesday', image: 'https://i.pinimg.com/736x/37/54/b6/3754b60a5c53ea9e36b4436d0205fb88.jpg' },
    { id: 2, title: 'Stranger Things', image: 'https://i.pinimg.com/736x/c7/66/04/c76604c266543ba9245e9637d43b191a.jpg' },
    { id: 3, title: 'Breaking Bad', image: 'https://i.pinimg.com/736x/5f/31/6b/5f316b50220823ac81376f3cee4cb579.jpg' },
    { id: 4, title: 'Money Heist', image: 'https://i.pinimg.com/736x/7f/4b/b9/7f4bb993db069c067b54ca155230fdcf.jpg' },
    { id: 5, title: 'Squid Game', image: 'https://i.pinimg.com/736x/51/1b/b1/511bb1da8720d7f81a69f390c38352e8.jpg' },
    { id: 6, title: 'The Crown', image: 'https://i.pinimg.com/736x/10/fb/be/10fbbe0bf276b7b74f1c9a1cc84ee92e.jpg' }
  ];
  return (
    <div>
      
      <div className="main-trend-container">
        <h2>Trending Now</h2>
      <div className="trending-container">
        
        {trendingMovies.map(movie => (
          <div key={movie.id} className="trending-item">
            <img src={movie.image} alt={movie.title} className="trending-image" />
            <p className="trending-title">{movie.id}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Trending
