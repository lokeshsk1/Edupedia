import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router , Route } from 'react-router-dom';


function Python() {
  return (
      <div className="features segments">
        <div className="container">
          <div className="row">
            <div className="col s4">
              <div className="content">
                <a href="https://www.google.com">
                <i className="fa fa-book bg-red"></i>
                <h5>Python one-liners</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Python;
