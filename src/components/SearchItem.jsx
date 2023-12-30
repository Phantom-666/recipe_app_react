import { useNavigate } from "react-router-dom"

const SearchItem = ({ name, id, index, isActive }) => {
  const nav = useNavigate()

  const goToItem = () => {
    nav(`/item/${id}`)
  }

  return (
    <li
      onClick={goToItem}
      className={"collection-item" + (isActive ? " active" : "")}
    >
      {name}
    </li>
  )
}

export default SearchItem
