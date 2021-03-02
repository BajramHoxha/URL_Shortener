import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from '../components/Header';
import {Footer} from '../components/Footer';
import MainPage from '../pages/MainPage';

export default (props) => (
	<div className="container-fluid">
		<Navbar />
  		<BrowserRouter>
  			<Switch>
    			<Route path="/" exact component={MainPage} />
      		</Switch>
    	</BrowserRouter>
        <Footer />
  	</div>
);