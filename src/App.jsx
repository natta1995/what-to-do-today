import { useState } from "react";
import { aktiviteter } from "./data/aktiviteter";

function App() {
  const [budget, setBudget] = useState("Gratis");
  const [valdAktivitet, setValdAktivitet] = useState("");

  const [plats, setPlats] = useState("inne");
  const [läge, setLäge] = useState("hemma");

  const filtrerade = aktiviteter.filter(
    (aktivitet) =>
      aktivitet.plats === plats &&
      aktivitet.läge === läge &&
      aktivitet.budget === budget
  );

  function slumpaAktivitet() {
    if (filtrerade.length === 0) {
      setValdAktivitet("Inga aktiviteter hittades.");
      return;
    }

    const slumpIndex = Math.floor(Math.random() * filtrerade.length);
    setValdAktivitet(filtrerade[slumpIndex].text);
  }

  return (
    <>
      <div>
        <h1> Vad skall jag göra idag? </h1>
      </div>
      <div>
        <h5>Jag vill vara </h5>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="hemma"
            checked={läge === "hemma"}
            onChange={(e) => setLäge(e.target.value)}
          />
          Hemma
        </label>
        <label>
          <input
            type="radio"
            value="borta"
            checked={läge === "borta"}
            onChange={(e) => setLäge(e.target.value)}
          />
          Borta
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="inne"
            checked={plats === "inne"}
            onChange={(e) => setPlats(e.target.value)}
          />
          Inomhus
        </label>
        <label>
          <input
            type="radio"
            value="ute"
            checked={plats === "ute"}
            onChange={(e) => setPlats(e.target.value)}
          />
          Utomhus
        </label>
      </div>
      <div>
        <h5>Hur mycket vill du spendera?</h5>
      </div>
      <div>
        <label htmlFor="budget">Budget:</label>
        <select
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="gratis">Gratis</option>
          <option value="small">100-200kr</option>
          <option value="medium">400-800kr</option>
          <option value="high">+ 1000kr</option>
        </select>
      </div>
      <div>
        <button onClick={slumpaAktivitet}> Slumpa </button>
      </div>
      <div>{valdAktivitet && <p>{valdAktivitet}</p>}</div>
    </>
  );
}

export default App;
