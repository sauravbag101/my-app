import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

const REACT_APP_CLERK_FRONTEND_API='pk_test_c3BlY2lhbC1zZWFzbmFpbC02OC5jbGVyay5hY2NvdW50cy5kZXYk'

const PUBLISHABLE_KEY = REACT_APP_CLERK_FRONTEND_API;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

ReactDOM.render(
  <BrowserRouter>
    {/* <ClerkProvider frontendApi={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
      <App />
    {/* </ClerkProvider> */}
  </BrowserRouter>,
  document.getElementById('root')
);
