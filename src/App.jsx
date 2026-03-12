import { useState } from "react";
import { aktiviteter } from "./data/aktiviteter";
import "./App.css";

function App() {
  const [budget, setBudget] = useState("gratis");
  const [valdAktivitet, setValdAktivitet] = useState("");
  const [season, setSeason] = useState("summer");

  const [plats, setPlats] = useState("inne");
  const [läge, setLäge] = useState("hemma");

  const [showPopup, setShowPopup] = useState(false);

  const filtrerade = aktiviteter.filter(
    (aktivitet) =>
      aktivitet.plats === plats &&
      aktivitet.läge === läge &&
      aktivitet.budget === budget &&
      aktivitet.season.includes(season)
  );

  function slumpaAktivitet() {
    if (filtrerade.length === 0) {
      setValdAktivitet("Tyvärr hittade jag ingen aktivitet.");
      setShowPopup(true);
      return;
    }

    const slumpIndex = Math.floor(Math.random() * filtrerade.length);
    setValdAktivitet(filtrerade[slumpIndex].text);
    setShowPopup(true);
  }

  const handleSeasonChange = (event) => {
    const selectedSeason = event.target.getAttribute("data-season");
    setSeason(selectedSeason);
  };

  const getSeasonText = () => {
  switch (season) {
    case "spring":
      return "🌸 Perfekt för en vårdag!";
    case "summer":
      return "☀️ En idé för en härlig sommardag!";
    case "fall":
      return "🍂 Något mysigt för hösten!";
    case "winter":
      return "❄️ En aktivitet för vinterdagar!";
    default:
      return "Här är ett förslag:";
  }
};

  return (
    <div className={`page-wrapper ${season}`}>
      <div className="content-box">
        <h1 className="season-heading">Aktivitetsgeneratorn</h1>

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
        <select
          className="budget-select"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="gratis">Gratis</option>
          <option value="small">100-200 kr</option>
          <option value="medium">400-800 kr</option>
          <option value="high">+1000 kr</option>
        </select>

        <div className="slump-container">
          <button className="slump-button" onClick={slumpaAktivitet}>
             Hitta aktivitet
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div
            className={`popup-modal ${season}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
            <div className="popup-activity-box">
              <h2 className="popup-title">{getSeasonText()}</h2>
              <p className="popup-activity-text">{valdAktivitet}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
