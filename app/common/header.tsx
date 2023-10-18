import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-16 md:h-24 px-4 md:px-8 w-ful border-b border-b-tertiary">
      <div className="flex h-full flex-row items-center justify-between max-w-screen-xl m-auto">
        <Link href="/">
          <div className="text-white text-base lg:text-lg font-bold">
            Great<span className="text-primary">.Projects</span>
          </div>
        </Link>
        <nav>
          <Link href="/projects" className="text-sm text-heading">
            Projects
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
