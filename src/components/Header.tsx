import React from "react";
import Logo from "./Logo";

type Props = { pageTitle?: string };

const Header = ({ pageTitle }: Props) => {
  return (
    <header className="flex justify-center flex-col items-center text-xl mb-8">
      <Logo />
      {pageTitle && (
        <div>
          <h1 className=" text-sm text-center font-bold uppercase mt-2">
            Créer une partie
          </h1>
        </div>
      )}
    </header>
  );
};

export default Header;
