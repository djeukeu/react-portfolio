import React from 'react';

const Contact = () => {
	return (
		<section id='contact' className='mx-8 my-12'>
			<div className='container mx-auto'>
				<h2 className='text-center font-header text-4xl font-semibold uppercase text-gray-900 sm:text-5xl lg:text-6xl'>
					get in touch
				</h2>
				<h4 className='pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl'>
					Have Any Questions?
				</h4>
				<form className='mx-auto w-full pt-10 sm:w-3/4'>
					<input
						className='mt-6 w-full rounded border border-gray-300 px-4 py-3 font-body text-black md:mt-8'
						placeholder='Name'
						type='text'
						id='name'
					/>
					<input
						className='mt-6 w-full rounded border border-gray-300 px-4 py-3 font-body text-black md:mt-8'
						placeholder='Email'
						type='text'
						id='email'
					/>
					<textarea
						className='mt-6 w-full rounded border border-gray-300 px-4 py-3 font-body text-black md:mt-8'
						placeholder='Message'
						id='message'
						cols='30'
						rows='10'></textarea>
					<button className='mt-6 flex items-center justify-center rounded bg-gray-900 px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-blue-500'>
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
