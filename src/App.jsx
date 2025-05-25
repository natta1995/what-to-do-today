function App() {
  return (
    <>
      <div>
        <h1> Vad skall jag göra idag? </h1>
      </div>
      <div>
        <h5>Jag vill vara ....</h5>
        <div>
          <input type="checkbox" />
          <label>Inomhus</label>
          <input type="checkbox" />
          <label>Utomhus</label>
        </div>
        <div>
          <input type="checkbox" />

          <label>Hemma</label>
          <input type="checkbox" />
          <label>Åka iväg</label>
        </div>
      </div>
      <div>
        <button> Slumpa </button>
      </div>
    </>
  );
}

export default App;
