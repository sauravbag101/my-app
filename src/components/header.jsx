import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
const Header = () => {
  return (
    <div>
       <header>

        <span className='text-white'>hello there</span>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </div>
  )
}

export default Header
