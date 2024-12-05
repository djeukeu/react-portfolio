import React from 'react';
import { skills } from '../../Constants';

const Skills = () => {
	return (
		<section id='skills' className='mx-8'>
			<div className='container mx-auto divide-y divide-gray-200 dark:divide-gray-700'>
				<div className='space-y-2 pb-8 pt-6 space-y-5'>
					<h1 className='text-3xl font-extrabold leading-9 tracking-tight text-black-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
						Here are my skills
					</h1>
				</div>
				<div className='grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3'>
					{skills.map((item) => {
						return (
							<div
								className='group rounded px-8 py-12 shadow hover:bg-gray-900'
								key={item.id}>
								<div className='mx-auto h-24 w-24 text-center xl:h-28 xl:w-28'>
									<div className='block'>
										<img src={item.icon} alt='development black icon' />
									</div>
								</div>
								<div className='text-center'>
									<h3 className='pt-8 text-lg font-semibold uppercase text-blue group-hover:text-blue-500 lg:text-xl'>
										{item.title}
									</h3>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
