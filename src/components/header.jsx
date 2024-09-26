import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import moment from 'moment';

const Header = () => {
  const { user } = useUser();

  return (
    <div>
      <header className='flex justify-between px-[40px] py-5'>
        <div>
          <span className="text-white text-[50px]">{moment().format('dddd')}</span>
          <span className="text-yellow-400 ml-2">{moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
        <div  className='mt-7'>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      <span className='text-white text-center pt-5 block'>
        {user && (
          <div>
            Hi <span className='text-yellow-400 text-[30px]'>{user.fullName},</span> welcome to my portfolio website.
          </div>
        )}
      </span>
    </div>
  );
}

export default Header;

