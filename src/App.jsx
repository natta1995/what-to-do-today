import { useState } from "react";

function App() {
  const [budget, setBudget] = useState("Gratis");

  return (
    <>
      <div>
        <h1> Vad skall jag göra idag? </h1>
      </div>
      <div>
        <h5>Jag kan tänka mig att ....</h5>
        <div>
          <input type="checkbox" />
          <label>Vara utomhus</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Vara inomhus</label>
          <input type="checkbox" />
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
        <button> Slumpa </button>
      </div>
    </>
  );
}

export default App;
