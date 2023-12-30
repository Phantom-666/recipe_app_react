import { useEffect, useState } from "react"
import { historyWord, recipes } from "../../config"

import "./History.css"
import { useNavigate } from "react-router-dom"

const History = () => {
  const [history, setHistory] = useState([])

  const fetchHistory = () => {
    const his = localStorage.getItem(historyWord)

    if (!his) {
      setHistory([])
      return
    }

    const json = JSON.parse(his)

    const result = []

    for (let i = 0; i < json.length; ++i) {
      const id = json[i]

      const item = recipes[id]

      result.push({ id: item.id, name: item.name, image: item.imageUrl })

      if (result.length === 3) break
    }

    setHistory(result)
  }

  useEffect(() => {
    fetchHistory()
  }, [])

  const nav = useNavigate()

  const goToItem = (id) => {
    nav(`/item/${id}`)
  }

  return (
    <div className="container">
      <div className="center">
        <h4>History</h4>
        <div className="row">
          {history.map((h, i) => (
            <div
              key={i}
              className="his-item col s4"
              onClick={() => goToItem(h.id)}
            >
              <img src={h.image} alt="" />
              <p>{h.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default History
