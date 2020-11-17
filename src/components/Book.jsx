import React from "react";
import ReactDOM from "react-dom";
import Python from "./Python";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Book() {
  return (
    <div>
      <div className="features segments">
        <div className="container">
          <div className="row">
            <div className="col s4">
              <div className="content">
                <Link to="/python">
                  <i className="fa fa-book bg-red"></i>
                  <h5>Python</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Router>
        <Route path="/python" exact component={Python} />
      </Router>
    </div>
  );
}

export default Book;
