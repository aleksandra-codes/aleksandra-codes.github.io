// Import the react and ReactDom libraries

import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component

const App = () => {
	const welcomeMes1 = "Hello, I'm Aleksandra (Sasha) Sorokina.";
	const welcomeMes2 = " I'm a Junior Software Developer";
	const scrollBtn = 'View my work';
	return (
		<div>
			<section id="welcome">
				<div className="welcomeMsg">{welcomeMes1}</div>
				<div className="welcomeMsg"> {welcomeMes2}</div>
				<button id="scrollButton">{scrollBtn}</button>
			</section>
			<section id="aboutMe" />
			<section id="projects" />
		</div>
	);
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
