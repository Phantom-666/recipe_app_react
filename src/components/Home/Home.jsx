import { useNavigate } from "react-router-dom"
import History from "../History/History"

import Search from "../Search/Search"

// TODO: Make master search

const Home = () => {
  const nav = useNavigate()

  const goToFavorites = () => {
    nav("/favorites")
  }

  return (
    <div className="App">
      <Search />
      <History />

      <div className="container">
        <div className="center">
          <button className="btn fav-btn" onClick={goToFavorites}>
            Go to favorites
          </button>
          <h3>Master search recipe</h3>
        </div>
      </div>
    </div>
  )
}

export default Home
