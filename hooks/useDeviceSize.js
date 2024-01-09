"use client"
import {useEffect, useState} from "react"

const useDeviceSize = () => {
	const [innerWidth, setWidth] = useState(0);
	const [innerheight, setHeight] = useState(0);

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		// component is mounted and window is available
		handleWindowResize();
		window.addEventListener('resize', handleWindowResize);
		// unsubscribe from the event on component unmount
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return [innerWidth, innerheight];
};

export default useDeviceSize;
