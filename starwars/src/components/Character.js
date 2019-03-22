import React from 'react';

import './StarWars.css';

const Character = (props) => {
	return (
		<div className="character-container">
			<h3>{props.charData.name}</h3>
		</div>
	);
};

export default Character;
