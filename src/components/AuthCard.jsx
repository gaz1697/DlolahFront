// AuthCard.tsx
import React, { useState } from "react";
import LoginCard from "./LoginCard";
import SignupCard from "./SignUpCard";

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="mb-4 w-full md:w-3/4 lg:w-1/2 xl:w-1/3 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        {isLogin ? <LoginCard /> : <SignupCard />}
        <div className="mt-4 text-center">
          <button className="font-semibold text-blue-500 hover:text-blue-700" onClick={toggleForm}>
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
