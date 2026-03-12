import { useState } from "react";
import { aktiviteter } from "./data/aktiviteter";
import "./App.css";

function App() {
  const [budget, setBudget] = useState("gratis");
  const [valdAktivitet, setValdAktivitet] = useState("");
  const [season, setSeason] = useState("summer");

  const [plats, setPlats] = useState("inne");
  const [läge, setLäge] = useState("hemma");

  const filtrerade = aktiviteter.filter(
    (aktivitet) =>
      aktivitet.plats === plats &&
      aktivitet.läge === läge &&
      aktivitet.budget === budget &&
      aktivitet.season.includes(season),
  );

  function slumpaAktivitet() {
    if (filtrerade.length === 0) {
      setValdAktivitet("Inga aktiviteter hittades.");
      return;
    }

    const slumpIndex = Math.floor(Math.random() * filtrerade.length);
    setValdAktivitet(filtrerade[slumpIndex].text);
  }

  const handleSeasonChange = (event) => {
    const selectedSeason = event.target.getAttribute("data-season");
    setSeason(selectedSeason);
  };

  return (
    <div className={`page-wrapper ${season}`}>
      <div className="content-box">
        <div>
          <h1 className="season-heading"> Vad skall jag göra idag? </h1>
        </div>
        <div id="seasonsButtons">
          <button
            data-season="spring"
            onClick={handleSeasonChange}
            className={season === "spring" ? "active-button" : ""}
          >
            Vår
          </button>
          <button
            data-season="summer"
            onClick={handleSeasonChange}
            className={season === "summer" ? "active-button" : ""}
          >
            Sommar
          </button>
          <button
            data-season="fall"
            onClick={handleSeasonChange}
            className={season === "fall" ? "active-button" : ""}
          >
            Höst
          </button>
          <button
            data-season="winter"
            onClick={handleSeasonChange}
            className={season === "winter" ? "active-button" : ""}
          >
            Vinter
          </button>
        </div>

        <div className="radio-group">
          <label className={`radio-card ${läge === "hemma" ? "selected" : ""}`}>
            <input
              type="radio"
              value="hemma"
              checked={läge === "hemma"}
              onChange={(e) => setLäge(e.target.value)}
            />
            🏠 Hemma
          </label>

          <label className={`radio-card ${läge === "borta" ? "selected" : ""}`}>
            <input
              type="radio"
              value="borta"
              checked={läge === "borta"}
              onChange={(e) => setLäge(e.target.value)}
            />
            🌍 Borta
          </label>
        </div>

        <div className="radio-group">
          <label className={`radio-card ${plats === "inne" ? "selected" : ""}`}>
            <input
              type="radio"
              value="inne"
              checked={plats === "inne"}
              onChange={(e) => setPlats(e.target.value)}
            />
            🛋 Inomhus
          </label>

          <label className={`radio-card ${plats === "ute" ? "selected" : ""}`}>
            <input
              type="radio"
              value="ute"
              checked={plats === "ute"}
              onChange={(e) => setPlats(e.target.value)}
            />
            🌳 Utomhus
          </label>
        </div>

        <div className="budget-section">
          <select
            id="budget"
            className="budget-select"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="gratis">Gratis</option>
            <option value="small">100–200 kr</option>
            <option value="medium">400–800 kr</option>
            <option value="high">+1000 kr</option>
          </select>
        </div>
        <div className="slump-container">
          <button className="slump-button" onClick={slumpaAktivitet}>
            Hitta aktivitet
          </button>
        </div>
        <div className="result-box">
          {valdAktivitet && (
            <>
              <p className="result-text">{valdAktivitet}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
