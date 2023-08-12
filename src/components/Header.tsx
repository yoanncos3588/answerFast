import Logo from "./Logo";
import { Divider } from "react-daisyui";
import { Link } from "react-router-dom";
import useConfirmationModal from "../hooks/useConfirmationModal";

interface Props {
  pageTitle?: string;
  showBackNav?: boolean;
  askLeaveGame?: boolean;
}

const Header = ({ pageTitle, showBackNav }: Props) => {
  const { showModal, ModalComponent } = useConfirmationModal();

  const handleBackClick = async (e) => {
    e.preventDefault();
    try {
      const res = await showModal("Title", "content");
      if (res) {
        console.log("valid");
      } else {
        console.log("decline");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
      {ModalComponent}
    </>
  );
};

export default Header;
