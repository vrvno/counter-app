import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import CounterApp from './CounterApp';

import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CounterApp value={41} />
		{/*<FirstApp title='Un título' subTitle={4141} />*/}
	</React.StrictMode>
);
