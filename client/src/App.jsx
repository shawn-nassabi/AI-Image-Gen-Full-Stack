import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, Create } from "./pages";

const App = () => {
  return (
    // Browser Router uses browser history to optimize routing
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-slate-50 border-b border-b-slate-400 p-2">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20" />
        </Link>

        <Link
          to="/create"
          className="bg-green-400 w-16 mx-8 h-fit text-center rounded-sm text-sm"
        >
          Create
        </Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
