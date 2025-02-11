'use client';
import React from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';

function OauthComponent() {
	const supabase = createClientComponentClient();

	async function handleSignInWithGoogle(response) {
		try {
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: 'google',
				nonce: 'NONCE',
				options: {
					queryParams: {
						access_type: 'offline',
						prompt: 'consent',
					},
					redirectTo: `${location.origin}/auth/callback`,
				},
			});
			console.log(response, data?.user);

			if (error) {
				alert('Supabase error: ' + error.message);
			}

			console.log(data);
		} catch (error) {
			alert('catch error: ' + error.message);
		}
	}

	return (
		<>
			<div>
				<button
					type='submit'
					style={{
						background: `rgba(0,0, 0, 0.90)`,
						border: `1px solid rgba(0, 112, 240, 0.90))`,
						borderRadius: '30px',
						padding: '12px 24px',
					}}
					onClick={handleSignInWithGoogle}
					className="w-full flex gap-2 rounded-[24px] px-6 py-2 text-center text-sm font-medium text-white duration-200"
				>
					Continue with Google
					<span>
						<Image
							src='/assets/icons/google (2).svg'
							width={20}
							height={20}
							alt='Google auth Icon'
							className='text-white italic rounded-full flex items-center bg-transparent cursor-pointer'
						/>
					</span>
				</button>
			</div>
		</>
	);
}

export default OauthComponent;
