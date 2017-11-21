import React from 'react';
import {
	BrowserRouter,
	Route,
} from 'react-router-dom';

import { Login, Dashboard, Register, Reset, App } from '../modules';

const Routers = () => (
	<BrowserRouter>
		<div>
			<Route path="/react-userprofile-routing" component={App} />
            <Route exact path="/react-userprofile-routing" component={Login}/>
            <Route exact path="/react-userprofile-routing/register" component={Register} />
			<Route path="/react-userprofile-routing/dashboard" component={Dashboard} />
			<Route path="/react-userprofile-routing/reset" component={Reset} />
		</div>
	</BrowserRouter>
);

export { Routers };