import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">Tailwind Test</h1>
      <Card username="kaiyum" button="click me"></Card>
      <Card username="Abdul Kaiyum"></Card>
    </>
  );
}

export default App;
