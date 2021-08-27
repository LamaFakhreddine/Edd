import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Sidebar from './components/Sidebar';
import Home from "./pages/Home";

function App() {
  return (
   <div className="grid-container">
     <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route exact to="/" component={Home}/>
        </Switch>
      </BrowserRouter>

   </div>
  );
}

export default App;
