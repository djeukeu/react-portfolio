import React from 'react';
import profileImage from '../../assets/images/profile.jpg';

const About = () => {
	return (
		<section id='about' className='mx-8'>
			<div className='container mx-auto divide-y divide-gray-200 dark:divide-gray-700'>
				<div className='space-y-2 pb-8 pt-6 space-y-5'>
					<h1 className='text-3xl font-extrabold leading-9 tracking-tight text-black-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
						About Me
					</h1>
				</div>
				<div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
					<div className='flex flex-col items-center space-x-2 pt-8'>
						<img
							alt='avatar'
							loading='lazy'
							width='192'
							height='192'
							decoding='async'
							data-nimg='1'
							className='h-48 w-48 rounded-full'
							src={profileImage}
							style={{ color: 'transparent' }}
						/>
						<h3 className='pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight'>
							Christian Djeukeu
						</h3>
						<div className='text-gray-500 dark:text-gray-400'>
                        Full-stack Developer
						</div>
						<div className='text-gray-500 dark:text-gray-400'>
							IT Online Academy
						</div>
					</div>
					<div className='prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2'>
						<p>
							I am meticulous, organised and a Certified AWS Developer with
							years of experience in defining requirements, designing,
							implementing and deploying applications. Using the tools and
							knowledge I have gained over the years as a developer, I oversee
							client projects from the identification of project needs through
							to completion. As a developer, I have a wide range of skills in
							mobile development, front-end development, back-end development,
							database management, UI/UX design and cloud computing.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
