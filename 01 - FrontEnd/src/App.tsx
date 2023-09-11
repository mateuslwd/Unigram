import "./App.css";

import Post from "./assets/pub/pub";

function App() {
  return (
    <div className="App">
      <Post
        data={{ name: "Lucas Porto", date: "28/08/2023", status: "solved" }}
      />
    </div>
  );
}

export default App;
