import Header from "../Header/Header";
import { Badge, Button, Card, Divider, Indicator } from "react-daisyui";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import RoomIdBubble from "./RoomIdBubble";
import PlayersList from "../PlayersList";
import {
  subscribeToNewPlayerInRoom,
  subscribeToPlayerDisconnect,
} from "../../socket/room";
import ConfigItem from "./ConfigItem";

const Room = () => {
  const navigate = useNavigate();
  const roomId = useAppSelector((state) => state.game.id);
  const gameSettings = useAppSelector((state) => state.game.gameSettings);
  const hostId = useAppSelector((state) => state.game.hostId);
  const userId = useAppSelector((state) => state.player.id);

  // obligatoire sinon redirect
  useEffect(() => {
    if (!roomId) {
      navigate("/create-room");
    }
  }, [roomId, navigate]);

  useEffect(() => {
    subscribeToNewPlayerInRoom();
    subscribeToPlayerDisconnect();
  });

  return (
    <>
      <Header pageTitle="Salle d'attente" />
      <div className=" grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-xs font-bold mb-4 text-secondary uppercase">
            Inviter des joueurs
          </h2>
          <div className="text-neutral bg-neutral-content rounded-lg p-4 mb-8 w-full">
            <h3 className="text-xl font-bold mb-4">Le code pour participer</h3>
            <p className="text-sm mb-4">
              Appuie sur le code ci-dessous pour le copier et le partager avec
              tes amis
            </p>
            <RoomIdBubble roomId={roomId as string} />
          </div>
          <Divider />
          <h2 className="text-xs font-bold mb-4 text-secondary uppercase">
            Réglages
          </h2>
          <ul className="mb-8">
            <ConfigItem
              label="Nombre de joueurs"
              value={gameSettings.totalPlayers}
            />
            <ConfigItem
              label="Nombre de question"
              value={gameSettings.totalQuestions}
            />
            <ConfigItem label="Difficulté" value={gameSettings.difficulty} />
          </ul>
          <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
            Thêmes
          </h2>
          <ul className="-mx-2">
            {gameSettings.themes.map(
              (t) =>
                t.activ && (
                  <li
                    className="inline-block bg-neutral p-4 m-2 rounded-lg "
                    key={t.id}
                  >
                    {t.name}
                  </li>
                )
            )}
          </ul>
        </div>
        <div>
          <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
            Participants
          </h2>
          <PlayersList totalPlayers={Number(gameSettings.totalPlayers)} />
        </div>
        <div>
          <h2 className="text-xs font-bold mb-4 text-secondary uppercase">
            Lancer la partie !
          </h2>
          <Card>
            <Card.Image
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
            <Card.Body className="bg-neutral">
              <Card.Title tag="h2">Tout le monde est là ?</Card.Title>
              <p>Vous pouvez lancer la partie quand vous le souhaitez</p>
              <Card.Actions className="justify-end mt-8">
                {hostId === userId ? (
                  <Link to={"/play"} className="btn btn-success w-full">
                    Lancer la partie !
                  </Link>
                ) : (
                  <Button disabled active={false} className="w-full">
                    L'host va bientôt lancer la partie
                  </Button>
                )}
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Room;
