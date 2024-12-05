import React, { Fragment, useState } from 'react';
import logo from '../../assets/images/logo.png';
import { pages } from '../../Constants';
import './index.css';

const Header = () => {
	const [menu, setMenu] = useState(false);

	const toggleMenu = (e) => {
		e.preventDefault();
		setMenu(!menu);
	};

	return (
		<Fragment>
			<header
				className='customVh lg:h-screen bg-cover bg-no-repeat'
				style={{
					backgroundImage:
						"url('https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif')",
				}}>
				<div className='flex flex-col justify-between text-white'>
					<nav className='bg-white border-gray-200 bg-gray-900'>
						<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
							<a
								className='flex items-center space-x-3 rtl:space-x-reverse'
								href='#home'>
								<img src={logo} className='h-12' alt='Djeukeu Logo' />
								<span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
									Djeukeu
								</span>
							</a>
							<button
								data-collapse-toggle='navbar-default'
								type='button'
								className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600'
								aria-controls='navbar-default'
								aria-expanded='false'
								onClick={toggleMenu}>
								<span className='sr-only'>Open main menu</span>
								<i className='menuIcon fa-solid fa-bars'></i>
							</button>
							<div
								className={`w-full md:block md:w-auto ${!menu && 'hidden'}`}
								id='navbar-default'>
								<ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700'>
									{pages.map((item) => {
										return (
											<li key={item.id}>
												<a
													href={`#${item.id}`}
													className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>
													{item.page}
												</a>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</header>
			<a
				href='#top'
				alt='back-to-top'
				className='!fixed bottom-5 end-5 rounded-full bg-gray-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg'>
				<span className='[&>svg]:w-4'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='3'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18'
						/>
					</svg>
				</span>
			</a>
		</Fragment>
	);
};

export default Header;
