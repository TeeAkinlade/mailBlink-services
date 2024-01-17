// This file will be used to access the details of the loged in user
'use client';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const useCurrentUser = () => {
	const supabase = createClientComponentClient();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

<<<<<<< HEAD
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const {
					data: { user },
					error,
				} = await supabase.auth.getUser();
				console.log('hook', user);
				if (error) {
					console.log(error.message);
				} else {
					console.log(user);
					setUser(user);
				}
			} catch (error) {
				console.error('Error fetching user:', error);
			} finally {
				setLoading(false);
			}
		};
=======
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        // console.log("hook",user);
        if (error) {
          console.log(error.message);
        } else {
          // console.log(user);
          setUser(user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };
>>>>>>> 194bee6c0d5043c6c109e3bf3ee620a6af25b6c4

		fetchUser();
	}, []);

	return { user, loading };
};
