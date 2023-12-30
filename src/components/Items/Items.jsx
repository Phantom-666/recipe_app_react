import { useParams, useNavigate } from "react-router-dom"
import "./Items.css"
import { useEffect, useState } from "react"
import { favWord, historyWord, recipes } from "../../config"
import Search from "../Search/Search"

const Items = () => {
  const fetchDataById = (id) => {
    return {
      ingreds: recipes[id].ingredients,
      instrucs: recipes[id].instructions,
      image: recipes[id].imageUrl,
      name: recipes[id].name,
    }
  }
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState([])

  const [inFav, setInFav] = useState(false)

  const { itemid } = useParams()

  // already in favorites

  const checkFav = () => {
    const temp = localStorage.getItem(favWord)

    if (!temp) return

    const json = JSON.parse(temp)

    const status = json.includes(itemid)

    setInFav(status)
  }

  const addToHistory = () => {
    const temp = localStorage.getItem(historyWord)

    if (!temp) {
      localStorage.setItem(historyWord, JSON.stringify([itemid]))

      return
    }

    const json = JSON.parse(temp)

    const index = json.indexOf(itemid)

    console.log(index)

    if (index !== -1) {
      json.splice(index, 1)
    }

    json.unshift(itemid)

    localStorage.setItem(historyWord, JSON.stringify(json))
  }

  useEffect(() => {
    const { ingreds, instrucs, name, image } = fetchDataById(itemid)

    setName(name)
    setImage(image)
    setIngredients(ingreds)
    setInstructions(instrucs)

    checkFav()

    addToHistory()
  }, [itemid])

  const nav = useNavigate()

  const goHome = () => {
    nav("/")
  }

  const addToFavorites = () => {
    const fav = localStorage.getItem(favWord)

    if (fav) {
      const favJson = JSON.parse(fav)

      favJson.push(itemid)

      localStorage.setItem(favWord, JSON.stringify(favJson))
    } else {
      const temp = [itemid]

      localStorage.setItem(favWord, JSON.stringify(temp))
    }

    setInFav(true)
  }

  const deleteFromFavorites = () => {
    const temp = localStorage.getItem(favWord)

    const json = JSON.parse(temp)

    const result = []

    json.map((i) => {
      if (i !== itemid) result.push(i)
    })

    localStorage.setItem(favWord, JSON.stringify(result))

    setInFav(false)
  }

  return (
    <div>
      <header>
        <Search />
      </header>

      <div className="container">
        <button className="btn home-btn" onClick={goHome}>
          Go home
        </button>
        <h4>{name}</h4>
        <img className="responsive-img" src={image} alt="Delicious Recipe" />
      </div>

      <section className="container">
        <h2 className="teal-text lighten-2">Ingredients</h2>
        <ul className="collection ingredients-list">
          {ingredients.map((ing, index) => (
            <li key={index} className="collection-item">
              {ing}
            </li>
          ))}
        </ul>
      </section>

      <section className="container">
        <h2 className="teal-text lighten-2">Instructions</h2>
        <ol className="collection instructions-list">
          {instructions.map((ins, index) => (
            <li key={index} className="collection-item">
              {ins}
            </li>
          ))}
        </ol>
      </section>

      <footer className="container">
        {inFav ? (
          <>
            <button className="btn red" onClick={deleteFromFavorites}>
              Delete from favorites
            </button>
          </>
        ) : (
          <>
            <button className="btn" onClick={addToFavorites}>
              Add to favorites
            </button>
          </>
        )}

        <p className="teal-text lighten-2">Enjoy your delicious meal!</p>
      </footer>
    </div>
  )
}

export default Items
