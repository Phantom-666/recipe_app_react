import { useEffect, useState } from "react"
import { favWord, recipes } from "../../config"
import { useNavigate } from "react-router-dom"
import Search from "../Search/Search"
import "./Favorites.css"

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  const fetchFavorites = () => {
    const temp = localStorage.getItem(favWord)

    if (!temp) return

    const json = JSON.parse(temp)

    const result = []

    json.map((id) => {
      const item = recipes[id]

      result.push({
        id: item.id,
        name: item.name,
        image: item.imageUrl,
      })
    })

    setFavorites(result)
  }

  useEffect(() => {
    fetchFavorites()
  }, [])

  const nav = useNavigate()
  const goToItem = (id) => {
    nav(`/item/${id}`)
  }

  const goHome = () => {
    nav("/")
  }

  return (
    <>
      <Search />
      <div className="container">
        <div className="center">
          <button className="btn home-btn" onClick={goHome}>
            Go home
          </button>
          <h4>Favorites</h4>

          <div className="row">
            {favorites.map((item, index) => (
              <div
                key={index}
                onClick={() => goToItem(item.id)}
                className="col s4 fav-item"
              >
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorites
