
import Input from "./components/Input";
import Button from "./components/Button";


function App() {
  return (
    <div className="container">
      <div className="selector">
        <input />
      </div>
      <div className="display">
        <button className="countdown">37 mins</button>
        <button className="button">Stop</button>
      </div>
    </div>
  );
}

export default App;
