import React from 'react';

const HyberLink = (props, e) => {
	return (
		<button
			className="custom-btn"
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
};

export default HyberLink;
