import React from "react";
import "./App.css";
import Terminal from "./components/Terminal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";


const Will = () => {
    return (
        <div className="App">
            <header className="William Yi">
                <h1>Will</h1>
            </header>
        </div>
    );
}

const Abdul = () => {
    return (
        <div className="App">
            <header className="William Yi">
                <h1>Abdul</h1>
            </header>
        </div>
    );
}

const Chris = () => {
    return (
        <div className="App">
            <header className="William Yi">
                <h1>Chris</h1>
            </header>
        </div>
    );
}

const Temi = () => {
    return (
        <div className="App">
            <header className="William Yi">
                <h1>Temi</h1>
            </header>
        </div>
    );
}

const Nimi = () => {
    return (
        <div className="App">
            <header className="William Yi">
                <h1>Nimi</h1>
            </header>
        </div>
    );
}

const Peniel = () => {
    return (
        <div className="App">
            <header className="William Yi">
                <h1>Peniel</h1>
            </header>
        </div>
    );
}

const David = () => {
    return (
        <div className="App">
            <header className="William Yi">
                <h1>David</h1>
            </header>
        </div>
    );
}

const Jr = () => {
    return (
        <div className="App">
            <header className="William Yi">
                <h1>Thomas</h1>
            </header>
        </div>
    );
}

const Nissi = () => {
    return (
        <div className="App">
            <header className="William Yi">
                <h1>Nissi</h1>
            </header>
        </div>
    );
}

function App(): React.ReactNode {
    return (
        <Router>
            <Routes>
                <Route path="/will" element={<Will />} />
                <Route path="/abdul" element={<Abdul />} />
                <Route path="/chris" element={<Chris />} />
                <Route path="/temi" element={<Temi />} />
                <Route path="/nimi" element={<Nimi />} />
                <Route path="/peniel" element={<Peniel />} />
                <Route path="/david" element={<David />} />
                <Route path="/jr" element={<Jr />} />
                <Route path="/nissi" element={<Nissi />} />
                <Route path="/" element={<Terminal />} />
            </Routes>
        </Router>
    );
}

export default App;
