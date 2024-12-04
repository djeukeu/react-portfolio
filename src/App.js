import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';

const App = () => {
	return (
		<div id='top'>
			<Header />
			<About />
			{/* <Skills /> */}
			{/* <Projects /> */}
			{/* <Contact /> */}
			<Footer />
		</div>
	);
};

export default App;
