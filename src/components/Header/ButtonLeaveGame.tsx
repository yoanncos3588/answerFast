import React from "react";
import { emitClientLeftTheRoom } from "../../socket/room";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { killGame } from "../../store/gameReducer";
import useConfirmationModal from "../../hooks/useConfirmationModal";

type Props = { roomId: string };

const ButtonLeaveGame = ({ roomId }: Props) => {
  const { showModal, ModalComponent } = useConfirmationModal();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  /**
   * Handle user leaving game manually
   * @param e clicking event
   */
  const handleQuitGame = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const res = (await showModal(
        "Quitter la partie ?",
        "Vous êtes sur le point de quitter cette partie, êtes-vous sûr ?"
      )) as boolean;
      if (res && roomId) {
        emitClientLeftTheRoom(roomId);
        dispatch(killGame(true));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Link
        to={".."}
        onClick={(e) => handleQuitGame(e)}
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Link>

      {ModalComponent}
    </>
  );
};

export default ButtonLeaveGame;
