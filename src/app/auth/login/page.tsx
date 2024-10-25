import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const LoginPage = () => {
  return (
    <main className="w-full h-screen fixed top-0 py-3 flex justify-center items-center">
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </main>
  );
};

export default LoginPage;
