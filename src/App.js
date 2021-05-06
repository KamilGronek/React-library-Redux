import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import ReturnedBooks from "./components/ReturnedBooks"
import BorrowedBooks from "./components/BorrowedBooks";


function App() {

  return ( 
    <Router>
      <div className="grid">
            <Header/>
            <Menu/>
              <Route exact path="/" render={() =><BorrowedBooks/>}/>
              <Route path="/returnedBooks" render={() =><ReturnedBooks/>} />
            <Navigation/>
      </div>
     </Router>
  );
}

export default App;
