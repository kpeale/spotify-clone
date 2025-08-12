import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
} from '@clerk/clerk-react';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        {/* Back / forward arrows */}
        <div className='flex items-center gap-2'>
          <img
            src={assets.arrow_left}
            alt='arrow'
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            onClick={() => navigate(-1)}
          />
          <img
            src={assets.arrow_right}
            alt='arrow'
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            onClick={() => navigate(+1)}
          />
        </div>

        {/* Right side buttons */}
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
            Explore Premium
          </p>
          <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>
            Install App
          </p>

          {/* Show UserButton if signed in */}
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>

          {/* Show Sign-up button if signed out */}
          <SignedOut>
            <SignUpButton>
              <button className='bg-white text-black rounded-sm px-2 py-1.5'>
                SIGN-UP
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>

      {/* Category buttons */}
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>
          All
        </p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
