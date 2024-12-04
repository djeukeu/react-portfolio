import React from 'react';
import { pages } from '../../Constants';
import './index.css';

const Footer = () => {

	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-white'>
		{/* <footer className='fixed bottom-0 left-0 z-20 w-full p-4 bg-white'> */}
			<div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
				<nav className='flex flex-wrap justify-center -mx-5 -my-2'>
					{pages.map((item) => {
						return (
							<div className='px-5 py-2' key={item.id}>
								<a
									href={`#${item.id}`}
									className='text-base leading-6 text-gray-500 hover:text-blue-900'>
									{item.page}
								</a>
							</div>
						);
					})}
				</nav>
				<div className='flex justify-center mt-8 space-x-6'>
					<a
						href='https://github.com/djeukeu'
						target='_blank'
						className='text-gray-400 hover:text-gray-500' rel="noreferrer">
						<span className='sr-only'>GitHub</span>
						<i className='socialIcon fa-brands fa-github'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/djeukeu/'
						target='_blank'
						className='text-gray-400 hover:text-blue-500' rel="noreferrer">
						<span className='sr-only'>Linkedin</span>
						<i className='socialIcon fa-brands fa-linkedin'></i>
					</a>
				</div>
				<p className='mt-8 text-base leading-6 text-center text-gray-400'>
					© {currentYear} Djeukeu. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
