import React from 'react';

import './StarWars.css';

import Character from './Character';

const CharacterList = (props) => {
	console.log(props);
	return (
		<div className="character-list">
			{props.starwarsChars.map((character, index) => <Character key={index} charData={character} />)}
		</div>
	);
};

export default CharacterList;
