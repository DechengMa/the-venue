import React from 'react';

const Location = () => {
	return (
		<div className='location_wrapper'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12595.712109080894!2d145.0456236009888!3d-37.885365824921834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6698cb33e0ac1%3A0x63f9134ad6bf7a0a!2sMonash+University+Caulfield+Campus!5e0!3m2!1sen!2sau!4v1545313171983'
				width='100%'
				height='500px'
				frameBorder='0'
				allowFullScreen
			/>
			<div className='location_tag'>
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;
