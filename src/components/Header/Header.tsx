import Logo from "../Logo";
import { Divider } from "react-daisyui";
import ButtonBack from "./ButtonBack";
import ButtonLeaveGame from "./ButtonLeaveGame";
import { useAppSelector } from "../../hooks/reduxHooks";

interface Props {
  pageTitle?: string;
}

const Header = ({ pageTitle }: Props) => {
  const roomId = useAppSelector((state) => state.game.id);

  return (
    <>
      <header className="flex justify-start items-center text-xl mb-4">
        {roomId ? <ButtonLeaveGame roomId={roomId} /> : <ButtonBack />}
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
    </>
  );
};

export default Header;
