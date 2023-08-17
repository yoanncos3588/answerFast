import Header from "./Header";
import { Badge, Card, Divider, Indicator, Loading, Mask } from "react-daisyui";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { useEffect } from "react";
import RoomIdBubble from "./RoomIdBubble";
import PlayersList from "./PlayersList";

type Props = {};

const Room = (props: Props) => {
  const navigate = useNavigate();
  const roomId = useAppSelector((state) => state.game.id);
  const gameSettings = useAppSelector((state) => state.game.gameSettings);

  // obligatoire sinon redirect
  useEffect(() => {
    if (!roomId) {
      navigate("/create-room");
    }
  }, [roomId, navigate]);

  return (
    <>
      <Header
        pageTitle="Salle d'attente"
        showBackNav
        askLeaveGame
        backUrl="/create-room"
      />
      <div className=" grid md:grid-cols-3 gap-12">
        <div>
          <Indicator className="w-full">
            <Badge
              color="secondary"
              className={Indicator.Item.className({ horizontal: "start" })}
            >
              Hey
            </Badge>
            <div className="text-neutral bg-neutral-content rounded-lg p-4 mb-8">
              <h2 className="text-xl font-bold mb-4">
                Le code pour participer
              </h2>
              <p className="text-sm mb-4">
                Appuie sur le code ci-dessous pour le copier et le partager avec
                tes amis
              </p>
              <RoomIdBubble roomId={roomId as string} />
            </div>
          </Indicator>
          <Divider />
          <h2 className="text-xs font-bold mb-4 text-secondary uppercase">
            Réglages
          </h2>
          <ul className="mb-8">
            <li className="mb-2">
              Nombre de joueurs :{" "}
              <span className=" text-accent">{gameSettings.totalPlayers}</span>
            </li>
            <li className="mb-2">
              Nombre de questions :{" "}
              <span className=" text-accent">
                {gameSettings.totalQuestions}
              </span>
            </li>
            <li className="mb-2">
              Difficulté :{" "}
              <span className=" text-accent">{gameSettings.difficulty}</span>
            </li>
          </ul>
          <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
            Thêmes
          </h2>
          <ul className="-mx-2">
            {gameSettings.themes.map(
              (t) =>
                t.activ && (
                  <li
                    className="inline-block bg-neutral p-4 m-2 rounded-lg"
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
          <PlayersList totalPlayers={gameSettings.totalPlayers} />

        </div>
        <div>
          <Card>
            <Card.Image
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
            <Card.Body className="bg-neutral">
              <Card.Title tag="h2">Tout le monde est là ?</Card.Title>
              <p>Vous pouvez lancer la partie quand vous le souhaitez</p>
              <Card.Actions className="justify-end mt-8">
                <Link to={"/play"} className="btn btn-success w-full">
                  Lancer la partie !
                </Link>
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Room;
