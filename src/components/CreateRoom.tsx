import { Alert, Button, Card, Divider, Form, Input } from "react-daisyui";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import gameConfigPossibility from "../utils/gameConfigPossibility";
import SelectConfig from "./SelectConfig";
import ThemeCheckbox from "./ThemeCheckbox";
import { createRoom } from "../socket/createGame";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setGameSettings, toggleTheme } from "../store/gameReducer";

type Props = {};

const CreateRoom = (props: Props) => {
  const roomId = useAppSelector((state) => state.game.room.id);
  const gameSettings = useAppSelector((state) => state.game.gameSettings);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (roomId) {
      navigate(`/room/${roomId}`);
    }
  }, [roomId, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createRoom(gameSettings);
  };

  // HANDLE CHANGE CONFIG
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setGameSettings({ key: e.target.name, value: e.target.value }));
  };

  /**
   * Recherche un theme dans le state
   * @param {string} value : slug du theme à rechercher dans le state
   * @returns {number} -1 si false, index si true
   */
  const anyActivTheme = () => {
    return gameSettings.themes.some((theme) => theme.activ);
  };

  return (
    <>
      <Header pageTitle="Créer une partie" showBackNav />
      <Form
        className=" grid grid-cols-1 md:grid-cols-3 gap-12"
        onSubmit={handleSubmit}
      >
        <div>
          <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
            Réglages
          </h2>
          {/*----------------------NOMBRE JOUEURS */}
          <div className="form-control w-full mb-4">
            <SelectConfig
              label={"Nombre de joueurs"}
              defaultValue={gameSettings.totalPlayers}
              options={gameConfigPossibility.totalPlayers}
              handleChange={handleChange}
              name={"totalPlayers"}
            />
          </div>
          {/*----------------------NOMBRE QUESTIONS */}
          <div className="form-control w-full mb-4">
            <SelectConfig
              label={"Nombre de questions"}
              defaultValue={gameSettings.totalQuestions}
              options={gameConfigPossibility.totalQuestions}
              handleChange={handleChange}
              name={"totalQuestions"}
            />
          </div>
          {/*----------------------DIFFICULTE */}
          <div className="form-control w-full mb-4">
            <SelectConfig
              label={"Difficulté"}
              defaultValue={gameSettings.difficulty}
              options={gameConfigPossibility.difficulty}
              handleChange={handleChange}
              name={"difficulty"}
            />
          </div>
        </div>
        <div className="form-control w-full">
          <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
            Thêmes
          </h2>
          {/*----------------------THEMES */}
          {gameSettings.themes.map((g) => (
            <ThemeCheckbox
              key={g.id}
              name={g.name}
              slug={g.slug}
              handleChangeTheme={() => dispatch(toggleTheme(g.id))}
              checked={g.activ}
            />
          ))}
          {!anyActivTheme() && (
            <Alert color="error" className="mt-4 bg-error">
              <span>Vous devez choisir au moins un thême</span>
            </Alert>
          )}
        </div>
        <div>
          <Divider className="md:hidden"></Divider>
          <div>
            <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
              Pseudo
            </h2>
            <div className="form-control w-full mb-4">
              {/*----------------------PSEUDO */}
              <Input
                type="text"
                placeholder="MonPseudoSuperCool"
                value={gameSettings.admin}
                onChange={handleChange}
              />
            </div>
          </div>
          <Divider />
          <Card>
            <Card.Image
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
            <Card.Body className="bg-neutral">
              <Card.Title tag="h2">
                Tout est <span className="text-accent">prêt</span> ?
              </Card.Title>
              <p>
                Si tout est ok on continue, un code à partager avec tes amis te
                sera communiquer à la prochaine étape !
              </p>
              <Card.Actions className="justify-end mt-8">
                <Button className="btn btn-success w-full">
                  Créer la partie
                </Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>
      </Form>
    </>
  );
};

export default CreateRoom;
