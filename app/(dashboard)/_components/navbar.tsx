"use client";

import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 bg-gray-500 p-5">
      <div className="hidden lg:flex lg:flex-1">{/* TODO: add search */}</div>
      <UserButton />
    </div>
  );
};

export default Navbar;
