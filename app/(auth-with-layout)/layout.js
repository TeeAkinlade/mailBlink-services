import '/styles/globals.css';
export default function AuthLayout({ children }) {
	return (
		<html lang='en'>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body className='font-poppins min-h-screen min-w-screen bg-secondary'>
				{children}
			</body>
		</html>
	);
}
