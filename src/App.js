import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';

const App = () => {
	return (
		<div id='top'>
			<Header />
			<About />
			<Skills />
			<Project />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
