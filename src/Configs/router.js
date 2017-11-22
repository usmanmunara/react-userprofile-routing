import React from 'react';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';

import { Login, Dashboard, Register, Reset, App } from '../modules';

const Routers = () => (
	<BrowserRouter basename="/react-userprofile-routing">
		<div>
			<Route path="/" component={App} />
            <Route exact path= "/" component={Login}/>
            <Route exact path="/register" component={Register} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/reset" component={Reset} />
		</div>
	</BrowserRouter>
);

export { Routers };