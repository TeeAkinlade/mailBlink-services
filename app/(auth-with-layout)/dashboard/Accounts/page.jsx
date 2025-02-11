"use client";
import HyberLink from "./HyberLink";
import { useState, useEffect } from "react";
import { useCurrentUser } from '../../currentUser';
import { passwordInputs, emailRegex, passwordRegex } from "@/constants";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Spinner from "../../../../components/Spinner";
import { useRouter } from "next/navigation";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";

// Functional component for the Account settings
const Account = () => {
  // Access routing functionality
  const router = useRouter();
  // Initialize Supabase client
  const supabase = createClientComponentClient();

  const [userDetail, setUserDetail] = useState(null);
  const { user, loading } = useCurrentUser();

  const [values, setValues] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  // get and set user detail when it is ready or when there is a change
  useEffect(() => {
    const updateUserDetails = () => {
      if (!loading && user) {
        // Process user data here
        setUserDetail(user);
        setValues((prev) => ({ ...prev, email: user.email }));
      }
    };

    return updateUserDetails();
  }, [user, loading]);

  // get user id
  const userId = userDetail;

  console.log(userId);

  // State to manage updated user data
  const [updatedValues, setUpdatedValues] = useState({ ...values });

  // State for managing validation errors
  const [error, setError] = useState({});

  // Function to handle input changes
  const handleInput = (e, value) => {
    setUpdatedValues((prev) => ({ ...prev, [value]: e.target.value }));
  };

  // Validation messages object
  const validationMsg = {};

  // Function to handle email edits button
  const updateEmail = async () => {
    if (isEditable) {
      // Validation for email
      if (!updatedValues.email.trim()) {
        validationMsg.email = "Email is required";
      } else if (!emailRegex.pattern.test(updatedValues.email)) {
        validationMsg.email = "Email not valid";
      } else {
        if (updatedValues.email === values.email) {
          setEditable(false);
        } else {
          try {
            // call the supabade update user API
            const { data, error } = await supabase.auth.updateUser({
              email: updatedValues.email,
            });
            if (error) {
              alert(error.message);
            } else {
              console.log(data);
              alert(
                "a confirmation email has been sent to you, verify this action to continue"
              );
              setValues((prev) => ({ ...prev, email: updatedValues.email }));
            }
          } catch (error) {
            console.log("erver error:", error.message);
          }
        }

        setEditable(false);
      }
      setError(validationMsg);
    } else {
      // Enable the edit mode
      setEditable(true);

      // Copy the existing value to a new object for editing
      const editableValues = { ...values };

      // Set the copied values to the state for editing
      setUpdatedValues(editableValues);
    }
  };

  // Function to update the password and handle validations
  const updatePassword = async () => {
    // Validation for new password
    if (!updatedValues.newPassword.trim()) {
      validationMsg.newPassword = "Password is required";
    } else if (!passwordRegex.pattern.test(updatedValues.newPassword)) {
      validationMsg.newPassword =
        "Password should be at least 8 characters and contain at least one number and a special character";
    }

    // Validation for confirm password
    if (!updatedValues.confirmPassword.trim()) {
      validationMsg.confirmPassword = "re-enter password";
    } else if (updatedValues.confirmPassword !== updatedValues.newPassword) {
      validationMsg.confirmPassword = "Password does not match";
    }

    // Set validation errors
    setError(validationMsg);

    // Update password and clear input areas when no errors are found
    if (Object.keys(validationMsg).length === 0) {
      try {
        const { data, error } = await supabase.auth.updateUser({
          password: updatedValues.newPassword,
        });
        if (error) {
          console.log(error.message);
        } else {
          alert("Password reset succeful");
          router.push("/auth/login");
          setUpdatedValues((prevs) => ({
            ...prevs,
            newPassword: "",
            confirmPassword: "",
          }));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // State to toggle email address edit mode
  const [isEditable, setEditable] = useState(false);

  // State to toggle password visibility
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = (id) => {
    setPasswordShow((prev) => ({
      ...prev,
      [id]: !prev[id] || false,
    }));
  };

  const h3Style = "font-bold text-xl mb-5";

  return (
		<div>
			{loading ? (
				<Spinner />
			) : (
				<main className='text-base flex'>
					<div className='padding-x padding-y w-[100%] m-auto'>
						<h2 className='font-bold text-3xl text-ui_secondary1 dark:text-ui_button'>
							Account Settings
						</h2>

						{/* Email address */}
						<div className='mt-8'>
							<h3 className={h3Style}>Email Address</h3>
							<div className=' flex items-center justify-between'>
								{/* Toggle edit mode */}
								{isEditable ? (
									<div className='flex flex-col gap-2 w-[80%]'>
										Your email address is{' '}
										<input
											type='text'
											value={updatedValues.email}
											onChange={(e) => handleInput(e, 'email')}
											className='border border-gray-400 px-2 py-3 rounded-md font-normal bg-transparent '
										/>
										<small
											className={`transition-all text-red-600 ${
												error.email ? 'opacity-100' : 'opacity-0'
											}`}
										>
											{error.email}
										</small>
									</div>
								) : (
									<p className='text-slate-500'>
										Your email address is{' '}
										<span className='font-bold text-lg  text-ui_secondary1 dark:text-ui_button'>
											{values.email}
										</span>
									</p>
								)}
								<HyberLink
									text={isEditable ? 'Save' : 'Change'}
									onClick={updateEmail}
								/>
							</div>
						</div>

						{/* Password  */}
						<div className='mt-20'>
							<div className=' flex justify-between items-center'>
								<h3
									className={`${h3Style} text-ui_secondary1 dark:text-ui_button`}
								>
									Password
								</h3>
							</div>
							<div className='flex gap-8'>
								{passwordInputs.map((input) => (
									<div key={input.id} className='flex flex-col w-[50%]'>
										<label htmlFor={input.id} className=' font-bold mb-2 md:text-[1rem] text-[0.8rem]' >
											{input.label}
										</label>
										<div className='border border-gray-400 flex-between px-3 rounded-md focus:border-2'>
											<input
												type={passwordShow[input.id] ? 'text' : 'password'}
												id={input.id}
												value={updatedValues[input.id]}
												onChange={(e) => handleInput(e, [input.id])}
												className='py-3 px-1 font-normal bg-transparent focus:outline-none border-none mt-0 w-[90%]'
											/>
											<span
												onClick={() => togglePassword(input.id)}
												className='cursor-pointer'
											>
												{passwordShow[input.id] ? (
													<RiEyeLine />
												) : (
													<RiEyeCloseLine />
												)}
											</span>
										</div>
										<small
											className={`transition-all text-red-600 ${
												error[input.id] ? 'opacity-100' : 'opacity-0'
											}`}
										>
											{error[input.id]}
										</small>
									</div>
								))}
							</div>
							<button
								onClick={updatePassword}
								className='custom-btn mt-7 bg-[#089373] dark:bg-[#0070f0]'
							>
								Save Password
							</button>
						</div>

						{/* Delete account */}
						<div className='mt-20'>
							<h3
								className={`${h3Style} text-ui_secondary1 dark:text-ui_button`}
							>
								Delete account
							</h3>
							<p className='mb-10 text-slate-500'>
								Would you like to delete your account? <br />
								This account contains 13388 posts. Deleting your account will
								remove all the conntent associated with it
							</p>
							<HyberLink
								text='I want to delete my account'
								className='bg-red-600'
							/>
						</div>
					</div>
				</main>
			)}
		</div>
	);
};

export default Account;
