import { Mask, Badge, Divider, Loading } from "react-daisyui";
import { useAppSelector } from "../hooks/reduxHooks";
import { useEffect, useState } from "react";

type Props = {};

const PlayersList = ({ totalPlayers }) => {
  // const [waitingForPlayers, setWaitingForPlayers] = useState(true);

  const players = useAppSelector((state) => state.game.players);
  const totalConnectedPlayers = Object.keys(players).length;

  // useEffect(() => {
  //   if (totalConnectedPlayers >= totalPlayers) {
  //     setWaitingForPlayers(false);
  //   }
  // }, [waitingForPlayers, totalConnectedPlayers, totalPlayers]);

  return (
    <>
      <ul>
        {Object.keys(players).map((key) => (
          <li className=" bg-neutral-content text-neutral p-3 rounded-lg grid grid-cols-5 mb-4">
            <Mask
              className="w-[56px]"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              variant="circle"
            />
            <div className=" col-span-4 flex flex-col justify-center pl-4">
              <span className="block font-bold text-success-content">
                {players[key].name}
              </span>
              <Badge color="success">host</Badge>
            </div>
          </li>
        ))}
      </ul>
      <Divider>
        <span className="flex opacity-40">
          {totalConnectedPlayers >= totalPlayers ? (
            <div>Tout le monde est là !</div>
          ) : (
            <div>
              En attente de {totalPlayers - totalConnectedPlayers}{" "}
              <Loading className="ml-2" variant="dots" size="xs" />
            </div>
          )}
        </span>
        {}
      </Divider>
      {totalConnectedPlayers < totalPlayers &&
        [...Array(totalPlayers - totalConnectedPlayers)].map((i) => (
          <div
            className=" animate-pulse bg-neutral-content text-neutral p-3 rounded-lg grid grid-cols-5 mb-4 opacity-20 grayscale"
            key={i}
          >
            <div className="mask mask-circle bg-neutral w-[56px] h-[56px] opacity-20"></div>
            <div className=" col-span-4 flex flex-col justify-center pl-4 opacity-20">
              <div className="bg-neutral w-full h-5 mb-1"></div>
              <Badge color="neutral" outline>
                arrive...
              </Badge>
            </div>
          </div>
        ))}
    </>
  );
};

export default PlayersList;
