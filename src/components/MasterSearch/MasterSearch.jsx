import { cuisines, recipes } from "../../config"
import React, { useEffect, useState } from "react"
import M from "materialize-css"
import "./MasterSearch.css"
import { useNavigate } from "react-router-dom"

const allIngredientsObject = () => {
  const result = []

  recipes.map((recipe) => {
    const mainIngredients = recipe.ingredients.map((ingredient) => {
      const ingredientParts = ingredient.split(" ")
      const mainIngredient = ingredientParts.slice(1).join(" ")
      return mainIngredient
    })

    mainIngredients.map((i) => result.push(i))
  })

  return result
}

const MasterSearch = () => {
  const [addedIng, setAddedIng] = useState([])
  const [chosedCuisines, setChosedCuisines] = useState([])
  //   const [ingredients, setIngredients] = useState(allIngredientsObject())
  const ingredients = allIngredientsObject()
  const [founded, setFounded] = useState([])

  useEffect(() => {
    const selectElement = document.querySelectorAll("select")
    M.FormSelect.init(selectElement)
  }, [])

  const addIng = (value) => {
    setAddedIng((a) => [...a, ingredients[value]])
  }

  const deleteIng = (index) => {
    addedIng.splice(index, 1)

    setAddedIng([...addedIng])
  }

  const choseCuisine = (index) => {
    if (chosedCuisines.includes(index)) {
      chosedCuisines.splice(index, 1)
      setChosedCuisines([...chosedCuisines])
    } else {
      setChosedCuisines([...chosedCuisines, index])
    }
  }

  const search = () => {
    const result = []

    if (chosedCuisines.length === 0) {
      // seach everywhere

      recipes.map((r) => {
        for (let i = 0; i < r.ingredients.length; ++i) {
          for (let j = 0; j < addedIng.length; ++j) {
            const status = r.ingredients[i].includes(addedIng[j])

            if (status) {
              result.push(r.id)
            }
          }
        }
      })
    } else {
      recipes.map((r) => {
        chosedCuisines.map((c) => {
          if (r.cuisine !== cuisines[c]) return

          for (let i = 0; i < r.ingredients.length; ++i) {
            for (let j = 0; j < addedIng.length; ++j) {
              const status = r.ingredients[i].includes(addedIng[j])

              if (status) {
                result.push(r.id)
              }
            }
          }
        })
      })
    }

    const uniq = [...new Set(result)]

    setFounded(uniq)
  }

  const nav = useNavigate()

  const goToItem = (id) => {
    nav(`/item/${id}`)
  }

  return (
    <>
      <div className="container">
        <div className="center">
          <div className="row">
            {founded.length > 0 ? (
              <div className="col s12">
                <h3>Founded</h3>

                {founded.map((id, i) => (
                  <div
                    key={i}
                    className="search-item col s4"
                    onClick={() => goToItem(id)}
                  >
                    <img src={recipes[id].imageUrl} alt="" />
                    <p>{recipes[id].name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}

            <h3>Added</h3>
            <div className="col s12">
              <div className="row">
                {addedIng.map((ing, index) => (
                  <div
                    key={index}
                    className="col s3 cell"
                    onClick={() => deleteIng(index)}
                  >
                    {ing}
                  </div>
                ))}
              </div>
            </div>

            <div className="col s6">
              <h3>Ingredients</h3>
              <div className="input-field col s12">
                <select onChange={(e) => addIng(e.target.value)} value="">
                  <option value=""></option>

                  {ingredients.map((ing, index) => (
                    <option key={index} value={index}>
                      {ing}
                    </option>
                  ))}
                </select>
                <label>Ingredients</label>
              </div>
            </div>

            <div className="col s6">
              <h3>Cuisine</h3>
              <ul className="collection">
                {cuisines.map((c, i) => (
                  <li
                    key={i}
                    className={
                      "collection-item" +
                      (chosedCuisines.includes(i) ? " active" : "")
                    }
                    onClick={() => choseCuisine(i)}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className="btn search-btn" onClick={search}>
            Search
          </button>
        </div>
      </div>
    </>
  )
}

export default MasterSearch
