import React from 'react';
import ReactDOM from 'react-dom';
import jo from '../urls';
import Standards from './Standards';
import Book from './Book';
import { BrowserRouter as Router , Route } from 'react-router-dom';


function Bdy()
{
   return(
	<Router>
		<Route path="/" exact component={Book}></Route>
	</Router>
	);
}

export default Bdy;
