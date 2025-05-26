import { useState } from "react";
import { aktiviteter } from "./data/aktiviteter";

function App() {
  const [budget, setBudget] = useState("Gratis");

  const [uteCheckbox, setUteCheckbox] = useState(true);
  const [inneCheckbox, setInneCheckbox] = useState(true);
  const [bortaCheckbox, setBortaCheckbox] = useState(true);

  const [valdAktivitet, setValdAktivitet] = useState("");

  function slumpaAktivitet() {
    const filtrerade = aktiviteter.filter((aktivitet) => {
      const platsMatch =
        (uteCheckbox && aktivitet.plats === "ute") ||
        (inneCheckbox && aktivitet.plats === "inne");
  
      const lägeMatch =
        (bortaCheckbox && aktivitet.läge === "borta") ||
        (!bortaCheckbox && aktivitet.läge === "hemma");
  
      const budgetMatch = aktivitet.budget === budget;
  
      return platsMatch && lägeMatch && budgetMatch;
    });
  
    if (filtrerade.length === 0) {
      setValdAktivitet("Inga aktiviteter hittades för dina val.");
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
        <h5>Jag kan tänka mig att ....</h5>
        <div>
          <input
            type="checkbox"
            id="ute"
            checked={uteCheckbox}
            onChange={() => setUteCheckbox(!uteCheckbox)}
          />
          <label>Vara utomhus</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="inne"
            checked={inneCheckbox}
            onChange={() => setInneCheckbox(!inneCheckbox)}
          />
          <label>Vara inomhus</label>
          <input
            type="checkbox"
            id="borta"
            checked={bortaCheckbox}
            onChange={() => setBortaCheckbox(!bortaCheckbox)}
          />
          <label>Åka iväg</label>
        </div>
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
        <button onClick={slumpaAktivitet} > Slumpa </button>
      </div>
      <div>
      {valdAktivitet && <p>{valdAktivitet}</p>}
      </div>
    </>
  );
}

export default App;
