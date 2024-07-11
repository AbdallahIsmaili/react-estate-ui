import Navbar from "./components/Navbar/Navbar"
import "./layout.scss"
import HomePage from "./routes/homePage/HomePage"

function App() {
  return (
    <div className="layout">
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App