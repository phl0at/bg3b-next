import React from "react";
import Link from "next/link";
// import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const MenuList = async () => {
//   const { isAuthenticated } = getKindeServerSession();
//   const authenticated = await isAuthenticated();

  return (
    <>
      <Link
        className="
        text-blue-300
        hover:text-blue-500
        transition-colors
        ease-in-out"
        href="/build/create"
      >
        New Build
      </Link>
      <Link
        className="
        text-blue-300
        hover:text-blue-500
        transition-colors
        ease-in-out"
        href="/build/browse"
      >
        Browse Builds
      </Link>
      {/* {authenticated ? (
        <LogoutLink
          className="
          text-blue-300
          hover:text-blue-500
            transition-colors
            ease-in-out"
        >
          Log Out
        </LogoutLink>
      ) : (
        <LoginLink
          className="
        text-blue-300
        hover:text-blue-500
          transition-colors
          ease-in-out"
        >
          Log In
        </LoginLink>
      )} */}
    </>
  );
};

export default MenuList;
