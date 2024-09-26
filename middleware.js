// middleware.js or middleware.ts

export default function middleware(req, res) {
    // Basic middleware logic without Clerk
    console.log("Middleware triggered");
  
    // You can add any custom headers or logic here without Clerk
    return res.next(); // Continue to the next handler
  }
  
  // Export configuration for the middleware
  export const config = {
    matcher: ['/((?!_next).*)'], // Adjust the matcher based on your routing needs
  };
  