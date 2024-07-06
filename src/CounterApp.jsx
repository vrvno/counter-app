import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export function CounterApp({ value }) {
	const [counter, setCounter] = useState(value);

	const handdleAdd = () => setCounter(counter + 1);
	const handdleSubstract = () => setCounter(counter - 1);
	const handdleReset = () => setCounter(value);

	return (
		<>
			<h1>Counter App</h1>
			<h2>{counter}</h2>
			<button onClick={handdleAdd}>+1</button>
			<button onClick={handdleSubstract}>-1</button>
			<button onClick={handdleReset}>Reset</button>
		</>
	);
}

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};
