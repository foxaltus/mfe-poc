import { FusionThemeProvider } from "fusion";
import "./App.css";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <FusionThemeProvider>
        <Banner />
      </FusionThemeProvider>
    </div>
  );
}

export default App;
