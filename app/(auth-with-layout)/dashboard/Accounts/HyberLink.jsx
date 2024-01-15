import React from 'react';

const HyberLink = (props, e) => {
	return (
		<button
			className='custom-btn bg-[#089373] dark:bg-[#0070f0]'
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
};

export default HyberLink;
