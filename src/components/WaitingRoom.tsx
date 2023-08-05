import React from "react";
import Header from "./Header";
import { Avatar, Badge, Card, Divider, Loading, Mask } from "react-daisyui";
import { Link } from "react-router-dom";

type Props = {};

const WaitingRoom = (props: Props) => {
  return (
    <>
      <Header />
      <div className=" grid md:grid-cols-3 gap-12">
        <div>
          <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
            Réglages
          </h2>
          <ul className=" text-xl mb-8">
            <li className="mb-4">
              Nombre de joueurs :<span className=" text-accent"> 4</span>
            </li>
            <li className="mb-4">
              Nombre de questions :<span className=" text-accent"> 10</span>
            </li>
            <li className="mb-4">
              Difficulté : <span className=" text-accent"> Facile</span>
            </li>
          </ul>
          <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
            Thêmes
          </h2>
          <ul>
            <li className="bg-neutral p-4 mb-4 rounded-lg">TV/Cinéma</li>
            <li className="bg-neutral p-4 mb-4 rounded-lg">Musique</li>
            <li className="bg-neutral p-4 mb-4 rounded-lg">Sport</li>
          </ul>
        </div>
        <div>
          <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
            Participants
          </h2>
          <ul>
            <li className=" bg-neutral-content text-neutral p-3 rounded-lg grid grid-cols-5 mb-4">
              <Mask
                className="w-[56px]"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                variant="circle"
              />
              <div className=" col-span-4 flex flex-col justify-center pl-4">
                <span className="block font-bold text-success-content">
                  MichealJordan
                </span>
                <Badge color="success">admin</Badge>
              </div>
            </li>
            <Divider>
              <span className="flex opacity-40">
                3/5 personnes
                <Loading className="ml-2" variant="dots" size="xs" />
              </span>
            </Divider>
            <li className=" bg-neutral-content text-neutral p-3 rounded-lg grid grid-cols-5 mb-4 opacity-20 grayscale">
              <div className="mask mask-circle bg-neutral w-[56px] h-[56px] opacity-20"></div>
              <div className=" col-span-4 flex flex-col justify-center pl-4 opacity-20">
                <div className="bg-neutral w-full h-5 mb-1"></div>
                <Badge color="neutral" outline>
                  invité
                </Badge>
              </div>
            </li>
          </ul>
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
                <Link to={"/play"} className="btn btn-success w-full">Lancer la partie !</Link>
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default WaitingRoom;
