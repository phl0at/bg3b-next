import React from "react";
import Link from "next/link";
import {
  useKindeBrowserClient,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs";
import { usePathname } from "next/navigation";
import { FaCirclePlus, FaTableList } from "react-icons/fa6";
import { IoMdLogOut, IoMdLogIn } from "react-icons/io";

const MenuList = () => {
  const { isAuthenticated } = useKindeBrowserClient();
  const pathname = usePathname();
  const className =
    "flex \
    flex-row \
    items-center \
    gap-2  \
    font-sans text-4xl \
    text-amber-100 \
    hover:text-amber-300 \
    hover:shadow-sm \
    hover:translate-x-4 \
    transition \
    ease-in-out \
    delay-250 \
    duration-300";

  return (
    <>
      {pathname === "/browse" && (
        <Link className={className} href="/build/new/origins">
          <FaCirclePlus />
          New
        </Link>
      )}
      {pathname !== "/browse" && pathname !== "/" ? (
        <Link className={className} href="/browse">
          <FaTableList />
          Browse
        </Link>
      ) : (
        ""
      )}
      {isAuthenticated ? (
        <LogoutLink className={className}>
          <IoMdLogOut />
          Log Out
        </LogoutLink>
      ) : (
        <LoginLink className={className}>
          <IoMdLogIn />
          Log In
        </LoginLink>
      )}
    </>
  );
};

export default MenuList;
