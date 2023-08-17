import { Button, Card, Form, Input } from "react-daisyui";
import Header from "./Header";

import { useEffect, useState } from "react";
import { joinRoom } from "../socket/joinRoom";
import { useAppSelector } from "../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";

type Props = {};

const JoinRoom = (props: Props) => {
  const [pseudo, setPseudo] = useState<string>("UnSuperPseudo");
  const [code, setCode] = useState<string>("");

  const roomId = useAppSelector((state) => state.game.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (roomId) {
      navigate(`/room/${roomId}`);
    }
  }, [roomId, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    if (code !== "" && code !== "") {
      joinRoom(code, pseudo);
    }
  };

  return (
    <>
      <Header pageTitle="Rejoindre une partie" showBackNav backUrl={"/"} />
      <Form
        className=" flex justify-center max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <Card>
            <Card.Image
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
            <Card.Body className="bg-neutral">
              <Card.Title tag="h2" className=" mb-4">
                Rentre le <span className="text-accent">code</span> de la partie
                pour rejoindre tes amis
              </Card.Title>
              <div className="form-control w-full mb-2">
                {/*----------------------PSEUDO */}
                <label className="label">
                  <span className="label-text">Ton pseudo</span>
                </label>
                <Input
                  type="text"
                  placeholder="UnPseudoCool"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                />
              </div>
              <div className="form-control w-full mb-4">
                {/*----------------------CODE */}
                <label className="label">
                  <span className="label-text">Le code</span>
                </label>
                <Input
                  type="text"
                  placeholder="ex: AcfEG"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <Card.Actions className="justify-end">
                <Button className="btn btn-success w-full">Rejoindre</Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>
      </Form>
    </>
  );
};

export default JoinRoom;
