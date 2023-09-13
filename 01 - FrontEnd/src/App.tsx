import "./App.css";

import Post from "./assets/pub/pub";

function App() {
  return (
    <div className="App">
      <Post
        name="Lucas Porto"
        date="28/08/2023"
        status="solved"
        body="Gostaria de saber o horário da prova, vai ser postada no quadro de avisos?"
        count={2}
      />
    </div>
  );
}

export default App;
