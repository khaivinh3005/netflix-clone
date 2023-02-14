import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import type { ImageLoaderProps } from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

type Props = {};
type Inputs = {
  email: string;
  password: string;
};

function Login({}: Props) {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className='relative flex h-screen w-screen flex-col md:items-center md:justify-center'>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Image
        src='https://rb.gy/p2hphi'
        className='-z-10 !hidden opacity-60 sm:!inline'
        alt=''
        layout='fill'
        objectFit='cover'
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div className='absolute left-2 top-1 h-20 w-44 cursor-pointer md:left-8 md:top-4'>
        <Image
          src='https://rb.gy/ek4j9f'
          style={{ objectFit: 'contain' }}
          alt=''
          layout='fill'
          objectFit='contain'
        />
      </div>
      <form
        className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-4xl font-semibold'>Sign In</h1>
        <div className='space-y-4'>
          <label className='inline-block w-full'>
            <input
              {...register('email', { required: true })}
              type='email'
              placeholder='Email'
              className='input'
            />
            {errors.email && <span>This field is required</span>}
          </label>
          <label className='inline-block w-full'>
            <input
              {...register('password', { required: true })}
              type='password'
              placeholder='Password'
              className='input'
            />
            {errors.password && <span>This field is required</span>}
          </label>
        </div>
        <button
          className='w-full rounded bg-[#E50914] py-3 font-semibold'
          type='submit'
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>
        <div className='text-[gray]'>
          New to Netflix?{' '}
          <button
            className='cursor-pointer text-white hover:underline'
            type='submit'
            onClick={() => setLogin(false)}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
