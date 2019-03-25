import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			starwarsChars : []
		};
	}

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people/');
	}

	page1 = () => {
		this.getCharacters('https://swapi.co/api/people/');
	};

	page2 = () => {
		this.getCharacters('https://swapi.co/api/people/?page=2');
	};

	getCharacters = (URL) => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				this.setState({ starwarsChars: data.results });
			})
			.catch((err) => {
				throw new Error(err);
			});
	};

	render() {
		return (
			<div className="App">
				<h1 className="Header">React Wars</h1>
				<CharacterList starwarsChars={this.state.starwarsChars} />
				<div className="btn">
					<button onClick={this.page1}>Page 1</button>
					<button onClick={this.page2}>Page 2</button>
				</div>
			</div>
		);
	}
}

export default App;
