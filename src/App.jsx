import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages

import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Resume from "./Pages/Resume";
import { SignedIn, SignedOut, SignInButton, UserButton, RedirectToSignIn } from "@clerk/clerk-react";
import Header from "./components/header";

function App ()  {
  
  return(
    
    <div className="App">
   {/* <h1>Hello Every one

   <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
   </h1> */}
 
  
  <Routes>
   {/* <Route path="/" element={<About/>}/> */}
   <Route path="/" element={
    <>
    <SignedIn>
       <About/>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
    </>
   }/>
   
   <Route path="/resume" element={<Resume/>}/>
   <Route path="/portfolio" element={<Portfolio/>}/>
   <Route path="/blog" element={<Blog/>}/>

   <Route path="/contact" element={<Contact/>}/>

  </Routes>
  
  </div>
  )
}

export default App;