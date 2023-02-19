import { useState } from "react";
import reactLogo from "./assets/react.svg";
import About from "../components/About";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Interests from "../components/Interests";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="card">
                <Info />
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    );
}

export default App;
