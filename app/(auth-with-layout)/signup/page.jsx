'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Spinner from '../../../components/Spinner';
import { useCurrentUser } from '../currentUser';

import OauthComponent from '../OauthComponent';
// import { useRouter } from "next/router"; // Import useRouter from Next.js

const Signup = () => {
	// Access routing functionality
	const router = useRouter();
	// Initialize Supabase client
	const supabase = createClientComponentClient();

	// access current user from currentUser component
	const { user } = useCurrentUser();

	// State to manage form inputs and their validation statuses
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);

	// Function to handle input changes
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	// Function to validate form inputs
	const validateForm = () => {
		const errors = {};

		// Validate username
		if (!email.trim()) {
			errors.email = 'email is required';
		}

		// Validate password
		if (!password.trim()) {
			errors.password = 'Password is required';
		}

		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	// Function to handle form submission
	const handleSubmit = async (event) => {
		event.preventDefault();

		// Validate form and check if it's valid
		const isValid = validateForm();
		if (!isValid) {
			return; // Don't proceed if validation fails
		}

		// Set loading state and start signup process
		setLoading(true);

		try {
			// Attempt signup using Supabase
			const { user, error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					emailRedirectTo: `${location.origin}/auth/callback`,
				},
			});

			// Check for errors during signup
			if (error) {
				setLoading(false);
				alert('Supabase error: ' + error.message);
				return;
			}

			// Sign in the user after successful signup
			const signInResult = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			// Check for errors during sign-in
			if (signInResult.error) {
				setLoading(false);
				alert('Sign-in error: ' + signInResult.error.message);
				return;
			}

			// Update loading state and handle response
			setLoading(false);

			if (user && user.identities && user.identities.length === 0) {
				// User already exists with this email
				alert('A user with this email already exists');
			} else {
				// Successful signup with no existing user
				router.push('/dashboard/Home'); // Redirect page to the dashboard
			}
		} catch (error) {
			// Handle unexpected errors
			setLoading(false);
			alert('Catch error: ' + error.message);
		}
	};

	return (
		<div>
			<div className='lg:flex'>
				<div
					style={{
						background: 'rgb(243,255,250)',
						background:
							'linear-gradient(90deg, rgba(243,255,250,1) 0%, rgba(210,249,232,1) 35%, rgba(204,250,230,1) 100%)',
					}}
					className='hidden h-[100vh] lg:block w-full'
				>
					<Link
						href={'/'}
						className='font-Poppins ps-[1rem] text-[35px] font-[700] leading-[64px] text-[#17181A]'
					>
						MailBlink
					</Link>
					<div className='pt-[160px] xs:ps-[10px] lg:pr-[109px] lg:ps-[110px]'>
						<h3 className='font-Poppins mt-[15px] flex text-[32px] font-[700] leading-[40px] text-[#17181A]'>
							We are mailblink <br /> So are you.
							<Image
								src='/assets/images/Group 2942.svg'
								width='40'
								height='39'
								className='mt-[-5rem]'
							/>
						</h3>
						<p className='font-Poppins mt-[24px] text-[16px] font-[400] leading-[28px] text-[#17181A]'>
							Join to improve your job search, yourself, and
							<br className='md:hidden' /> more. Get started by creating
							<br className='xs:hidden md:block lg:hidden' /> a free account!
						</p>
						<p className='font-Poppins mt-[5px] text-[16px] font-[400] leading-[28px] text-[#17181A]'>
							We’re creating a service that puts you front
							<br className='md:hidden' /> and center in your career.
						</p>
					</div>
				</div>

				<div className='lg:w-[720px] bg-[#fff] lg:ps-[109px] lg:pt-[160px] xs:pt-[100px] xs:ps-[10px] xs:px-[0.85rem] md:px-[0.85rem]'>
					<h3 className='text-[#17181A] text-[24px] font-[600] leading-[32px] font-Poppins ms-[1rem]'>
						Create a an account
					</h3>
					<form className='mt-[16px]' onSubmit={handleSubmit}>
						<label className='text-[#515458] text-[12px] font-[500] font-Poppins mt-[22px]'>
							email
						</label>
						<input
							type='text'
							placeholder='enter email'
							className='text-[#575757] bg-[#fff] border-[#B7BFC7] border-[1px] border-solid rounded-[8px] text-[16px] font-[400] font-Poppins outline-none lg:w-[364px] xs:w-[100%] md:w-[600px] login-input-text mt-[-1rem]'
							style={{ padding: '12px 0px 12px 12px', height: '48px' }}
							value={email}
							onChange={handleEmailChange}
						/>
						{errors.email && <p className='text-red-500'>{errors.email}</p>}
						{/* Display error message */}
						<label className='text-[#515458] text-[12px] font-[500] font-Poppins'>
							password
						</label>
						<input
							type='password'
							placeholder='enter password'
							className='text-[#575757] bg-[#fff] border-[#B7BFC7] border-[1px] border-solid rounded-[8px] text-[16px] font-[400] leading-[24px] font-Poppins outline-none lg:w-[364px] xs:w-[100%] md:w-[600px] mt-[-1rem]'
							style={{ padding: '12px 0px 12px 12px', height: '48px' }}
							value={password}
							onChange={handlePasswordChange}
						/>
						{errors.password && (
							<p className='text-red-500'>{errors.password}</p>
						)}
						{/* Display error message */}
						<button
							type='submit'
							style={{
								background: `rgba(0, 112, 240, 0.90)`,
								border: `1px solid rgba(0, 112, 240, 0.90))`,
								borderRadius: '30px',
								padding: '12px 24px',
							}}
							className='text-[16px] font-[600] leading-[24px] flex justify-center items-center font-Poppins text-[#fff] lg:w-[364px] xs:w-[100%] md:w-[600px]'
						>
							Sign up
						</button>

						<div className='lg:ms-[-12rem] xs:ms-[-1rem] md:ms-[-4rem]'>
							<p className='text-[#575757] text-center text-[14px] font-Poppins font-[400] leading-[18px] mt-[3px]'>
								Already have an account?
								<Link href='/signup' className='text-[#1F284F] font-[600]'>
									Log in
								</Link>
							</p>
							<p className='text-[#515458] text-center text-[12px] font-Poppins font-[400] leading-[18px] mt-[7px]'>
								By signing up, you agree to MailBlink’s <br />
								<Link href='/legal-concerns' className='font-[500] underline'>
									Terms and Conditions.
								</Link>
							</p>
						</div>
					</form>
				</div>

				{/* spinner displays loading animation when loading is true */}
				{loading && (
					<div className='flex h-screen w-full items-center justify-center'>
						<Spinner />
					</div>
				)}
				{!loading && (
					<div className='flex h-screen w-full flex-col items-center justify-center bg-[#fff]'>
						<h3 className='font-Poppins ms-[1rem] text-[24px] font-[600] leading-[32px] text-[#17181A]'>
							Create an account
						</h3>
						<form className='mt-[16px] w-4/5 lg:w-3/5' onSubmit={handleSubmit}>
							<label className='font-Poppins mt-[22px] text-[12px] font-[500] text-[#515458]'>
								email
							</label>
							<input
								type='text'
								placeholder='enter email'
								className='font-Poppins mt-[-1rem] rounded-[8px] border-[1px] border-solid border-[#B7BFC7] bg-[#fff] text-[16px] font-[400] leading-[24px] text-[#575757] outline-none'
								style={{ padding: '12px 0px 12px 12px', height: '48px' }}
								value={email}
								onChange={handleEmailChange}
							/>
							{errors.email && <p className='text-red-500'>{errors.email}</p>}
							{/* Display error message */}
							<label className='font-Poppins text-[12px] font-[500] text-[#515458]'>
								password
							</label>
							<input
								type='password'
								placeholder='enter password'
								className='font-Poppins mt-[-1rem] rounded-[8px] border-[1px] border-solid border-[#B7BFC7] bg-[#fff] text-[16px] font-[400] leading-[24px] text-[#575757] outline-none'
								style={{ padding: '12px 0px 12px 12px', height: '48px' }}
								value={password}
								onChange={handlePasswordChange}
							/>
							{errors.password && (
								<p className='text-red-500'>{errors.password}</p>
							)}
							{/* Display error message */}
							<button
								type='submit'
								className='w-full rounded-[24px] border border-navyBlue bg-navyBlue px-6 py-2 text-center text-sm font-medium text-white duration-200 hover:border hover:border-navyBlue hover:bg-white hover:text-navyBlue'
							>
								Sign up
							</button>{' '}
							<OauthComponent className='-mt-4' />
							<div>
								<p className='font-Poppins text-left text-[14px] font-[400] leading-[18px] text-[#575757]'>
									{`Already have an account? `}
									<Link href='/login' className='font-[600] text-navyBlue'>
										Log in
									</Link>
								</p>
								<p className='font-Poppins mt-[7px] text-left text-[12px] font-[400] leading-[18px] text-[#515458]'>
									{`By signing up, you agree to MailBlink’s `}
									<Link href='/legal-concerns' className='font-[500] underline'>
										Terms and Conditions.
									</Link>
								</p>
							</div>
						</form>
					</div>
				)}
			</div>
		</div>
	);

};

export default Signup;
