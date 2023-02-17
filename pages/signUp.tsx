import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

type Props = {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};
type Inputs = {
  email: string;
  password: string;
};

const SignUpComponent = ({ setIsSignUp }: Props) => {
  const { signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    await signUp(email, password);
  };
  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center opacity-80 md:opacity-100 md:bg-inherit'>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Image
        src='https://rb.gy/p2hphi'
        className='-z-10  opacity-60 sm:!inline'
        alt=''
        layout='fill'
        objectFit='cover'
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div className='absolute left-2 top-1 md:h-20 w-24 h-28 cursor-pointer md:left-8 md:top-4'>
        <Image
          src='https://rb.gy/ek4j9f'
          style={{ objectFit: 'contain' }}
          alt=''
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='absolute right-2 top-10 md:h-20 w-24 h-28 cursor-pointer md:right-8 md:top-8'>
        <button
          className='w-full rounded bg-[#E50914] py-2 font-semibold'
          type='submit'
          onClick={() => setIsSignUp(false)}
        >
          Sign In
        </button>
      </div>
      <h1 className=' text-5xl text-center font-bold text-[#E50914] '>
        Sign Up
      </h1>

      <p className=' text-3xl text-center mt-3'>
        Watch anywhere. Cancel anytime.
      </p>
      <p className=' text-1xl text-center my-3'>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form
        className='w-full md:flex  md:items-center md:justify-center text-center md:text-left  py-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='md:w-4/12'>
          <input
            {...register('email', { required: true })}
            type='email'
            placeholder='Email'
            className='input  rounded-sm'
          />
          {errors.email && <span>This field is required</span>}
        </label>
        <label className='md:w-4/12 md:ml-1 '>
          <input
            {...register('password', { required: true })}
            type='password'
            placeholder='Password'
            className='input  rounded-sm mt-2 md:mt-0'
          />
          {errors.password && <span>This field is required</span>}
        </label>
        <button className='md:px-0 px-8 py-3  mt-3 md:mt-0  bg-[#E50914] font-semibold md:py-3.5 md:ml-1 md:w-2/12'>
          Get Started
          <FaAngleRight className='inline ml-1 text-2xl' />
        </button>
      </form>
    </div>
  );
};

export default SignUpComponent;
