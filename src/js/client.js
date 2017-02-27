import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Settings from "./pages/Settings";
import Archived from "./pages/Archived";

const app = document.getElementById('app');

ReactDOM.render(
		<Router history={hashHistory}>
		<Route path="/" component={Layout}>
		</Route>
		<IndexRoute component={Featured}></IndexRoute>
		<Route path="archives/(:article)" component={Archives}></Route>
		<Route path="settings" component={Settings}></Route>
		</Router>,
	app)