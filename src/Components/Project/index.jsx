import React from 'react';
import { projects } from '../../Constants';

const Project = () => {
	return (
		<section id='projects' className='mx-8 my-12'>
			<div className='container mx-auto'>
				<h2 className='text-center font-header text-4xl font-semibold uppercase text-black-900 sm:text-5xl lg:text-6xl'>
					my projects
				</h2>
				<div className='mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2'>
					{projects.map((item) => {
						return (
							<a
								key={item.id}
								href='/'
								className='mx-auto transform transition-all hover:scale-105 md:mx-0'>
								<img
									src={item.image}
									className='w-full shadow'
									alt={item.id}
								/>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Project;
