import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { CLIENT_ID } from '../constants/strings';
import { googleLogin, login } from '../lib/server-requests';

type Props = {
  handleLogin: (email: string, password: string) => void;
};

type Inputs = {
  email: string;
  password: string;
};
export const LoginPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  useEffect(() => {
    const google = window.google;
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleGoogleLogin
    });
    const parent = document.getElementById('googleLogin') as HTMLElement;
    google.accounts.id.renderButton(parent, { type: 'standard', shape: 'pill', text: 'signin_with' });
  }, []);

  function handleGoogleLogin(res: { credential: string }) {
    googleLogin(res.credential).then((dateRes) => {
      console.log(dateRes);
    });
  }

  const onSubmit = (data: Inputs) => {
    login({ email: data.email, password: data.password }).then((dateRes) => {
      console.log(dateRes);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
        <h1 className='font-bold text-3xl dark:text-white'>Sign in</h1>
        <h2 className='dark:text-white'>Save your guesses</h2>
        <label className='mb-4 block flex flex-col text-start font-bold dark:text-white '>
          Email
          <input
            data-cy='email'
            {...register('email')}
            className='focus:shadow-outline appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
            type='email'
            placeholder='name@hotmail.com'
            required
          />
        </label>
        <label className=' mb-4 block flex flex-col text-start font-bold dark:text-white '>
          Password
          <input
            data-cy='password'
            {...register('password')}
            className='focus:shadow-outline appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
            type='password'
            placeholder='•••••••••'
            required
          />
        </label>
        <input
          type='submit'
          value='Sign in'
          className='cursor-pointer rounded-full  border border-gray-300 bg-white py-2 px-4 text-black h-10 w-44 mb-2 font-sans ease-in duration-200 hover:bg-sky-50 hover:border-blue-200 focus:bg-sky-100 focus:border-blue-300'
        />
      </form>
      <div className='flex flex-col items-center'>
        <div className='flex flex-row items-center mb-2 w-44 align-middle'>
          <div className='bg-black flex-1 h-px w-5 dark:bg-white'></div>
          <div className='w-8 text-black text-center dark:text-white'>or</div>
          <div className='bg-black flex-1 h-px w-5 dark:bg-white'></div>
        </div>
        <div id='googleLogin'></div>
      </div>
    </div>
  );
};
