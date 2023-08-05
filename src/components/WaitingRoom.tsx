import React from "react";
import Header from "./Header";
import {
  Badge,
  Card,
  ChatBubble,
  Divider,
  Indicator,
  Loading,
  Mask,
} from "react-daisyui";
import { Link } from "react-router-dom";

type Props = {};

const WaitingRoom = (props: Props) => {
  return (
    <>
      <Header pageTitle="Salle d'attente" />
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
              <ChatBubble
                end={true}
                onClick={() => alert("cool")}
                className=" animate__animated animate__headShake animate__delay-4s "
              >
                <ChatBubble.Message color="accent">
                  <span className="font-bold text-lg">HE30DLAP876</span>
                </ChatBubble.Message>
              </ChatBubble>
            </div>
          </Indicator>
          <Divider />
          <h2 className="text-xs font-bold mb-4 text-secondary uppercase">
            Réglages
          </h2>
          <ul className="mb-8">
            <li className="mb-2">
              Nombre de joueurs :<span className=" text-accent"> 4</span>
            </li>
            <li className="mb-2">
              Nombre de questions :<span className=" text-accent"> 10</span>
            </li>
            <li className="mb-2">
              Difficulté : <span className=" text-accent"> Facile</span>
            </li>
          </ul>
          <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
            Thêmes
          </h2>
          <ul className="-mx-2">
            <li className=" inline-block bg-neutral p-4 m-2 rounded-lg">
              TV/Cinéma
            </li>
            <li className="inline-block bg-neutral p-4 m-2 rounded-lg">
              Musique
            </li>
            <li className="inline-block bg-neutral p-4 m-2 rounded-lg">
              Sport
            </li>
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
                3/5 personnes attendues
                <Loading className="ml-2" variant="dots" size="xs" />
              </span>
            </Divider>
            <li className=" animate-pulse bg-neutral-content text-neutral p-3 rounded-lg grid grid-cols-5 mb-4 opacity-20 grayscale">
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

export default WaitingRoom;
