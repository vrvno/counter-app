import React from 'react';
import PropTypes from 'prop-types';

//default props deben ir en las propiedades (defaultProps no longer supported)
export const FirstApp = ({
	title = 'no hay titulo',
	subTitle = 'no hay subtitulo',
	nombre = 'no hay nombre',
}) => {
	//console.log(props);
	return (
		<>
			<div data-testid='test-title'>{title}</div>
			{/*<code>{JSON.stringify(newMessage)}</code>*/}
			<p>{subTitle}</p>
			<p>{nombre}</p>
		</>
	);
};

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.number.isRequired,
};
