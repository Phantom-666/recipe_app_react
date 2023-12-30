import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Items from "./components/Items/Items"
import Favorites from "./components/Favorites/Favorites"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/item/:itemid" element={<Items />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  )
}

export default App
