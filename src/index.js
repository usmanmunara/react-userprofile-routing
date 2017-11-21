import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Routers} from './Configs/router'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers />, document.getElementById('root'));
registerServiceWorker();
