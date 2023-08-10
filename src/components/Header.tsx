import Logo from "./Logo";
import { Divider } from "react-daisyui";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useCallback, useRef } from "react";

interface Props {
  pageTitle?: string;
  showBackNav?: boolean;
  askLeaveGame?: boolean;
}

const Header = ({ pageTitle, showBackNav }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleBackClick = useCallback(
    (e) => {
      e.preventDefault();
      ref.current?.showModal();
    },
    [ref]
  );

  return (
    <>
      <header className="flex justify-start items-center text-xl mb-4">
        {showBackNav && (
          <Link
            to={".."}
            onClick={handleBackClick}
            className="btn btn-ghost mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
        )}
        {pageTitle && (
          <div>
            <h1 className=" text-lg text-center font-bold uppercase">
              {pageTitle}
            </h1>
          </div>
        )}
        <div className="ml-auto">
          <Logo />
        </div>
      </header>
      <Divider className="md:mb-12" />
      <Modal
        ref={ref}
        title={"Voulez vous quitter la partie ?"}
        message={
          "Vous êtes sur le point de quitter cette partie, êtes-vous sur ?"
        }
      />
    </>
  );
};

export default Header;
