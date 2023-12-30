import SearchItem from "../SearchItem"
import { recipes } from "../../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {
  const [searchItem, setSearchItem] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const [activeItem, setActiveItem] = useState(-1)

  const nav = useNavigate()

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()

      if (searchResults.length > 0) {
        if (activeItem === -1) {
          nav(`/item/${searchResults[0].id}`)

          setSearchItem("")
          setSearchResults([])
          return
        }

        nav(`/item/${searchResults[activeItem].id}`)
        setSearchItem("")
        setSearchResults([])
      }
    } else if (event.key === "ArrowDown") {
      // make active

      if (searchResults === 0) return

      if (searchResults === 1) {
        setActiveItem(0)
        return
      }

      if (activeItem + 1 === searchResults.length) {
        setActiveItem(0)
      } else {
        setActiveItem((a) => a + 1)
      }
    } else if (event.key === "ArrowUp") {
      if (searchResults === 0) return

      if (searchResults === 1) {
        setActiveItem(0)
        return
      }

      if (activeItem === 0) {
        setActiveItem(searchResults.length - 1)
      } else {
        setActiveItem((a) => a - 1)
      }
    }
  }

  const searchHandle = (target) => {
    setSearchItem(target)

    if (target) {
      const res = []

      recipes.map((r) => {
        const status = r.name.toLowerCase().includes(target.toLowerCase())

        if (status) {
          res.push({ name: r.name, id: r.id })
        }
      })

      setSearchResults(res)
    } else {
      setSearchResults([])
    }
  }

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                required
                value={searchItem}
                onChange={(e) => searchHandle(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>

      {searchResults.length > 0 && (
        <ul className="collection">
          {searchResults.map((result, index) => (
            <SearchItem
              name={result.name}
              key={index}
              id={result.id}
              index={index}
              isActive={activeItem === index}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search
