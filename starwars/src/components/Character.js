import React from 'react';

import './StarWars.css';

const Character = (props) => {
	return (
		<div className="character-container">
			<h3>{props.charData.name}</h3>
			<div className="char-attr">
				<li>Born: {props.charData.birth_year}</li>
				<li>Gender: {props.charData.gender}</li>
				<li>Height: {props.charData.height}</li>
				<li>Weight: {props.charData.mass}</li>
				<li>Eye Color:{props.charData.eye_color}</li>
				<li>Hair Color: {props.charData.hair_color}</li>
				<li>Skin Color: {props.charData.skin_color}</li>
			</div>

			{/* {props.charData.films.map((movie, index) => <li key={index}>{movie}</li>)}; */}
		</div>
	);
};

export default Character;
