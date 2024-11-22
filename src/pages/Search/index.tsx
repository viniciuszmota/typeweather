import "./styles.css"

import { useNavigate } from "react-router-dom"
import { SelectCity } from "../../components/SelectCity"

export function Search() {
  const navigate = useNavigate()

  function handleSelect(city) {
    localStorage.setItem("@typeweather:city", JSON.stringify(city))
    navigate("/dashboard")
  }

  return (
    <div className="home">
      <img src="logo_large.svg" alt="logo" />

      <main>
        <h1>
          Boas vindas ao <strong>TypeWeather</strong>
        </h1>
        <span>Escolha o local para ver a previsão do tempo</span>

        <SelectCity onSelect={handleSelect} />
      </main>
    </div>
  )
}
