import { Alert, Checkbox, Divider, Form, Input, Select } from "react-daisyui";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const CreateRoom = (props: Props) => {
  return (
    <>
      <Header pageTitle="Créer une partie"/>
      <Form className=" grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
            Réglages
          </h2>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Nombre de joueurs :</span>
            </label>
            <Select defaultValue={5} onChange={console.log}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Select>
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Nombre de questions :</span>
            </label>
            <Select defaultValue={5} onChange={console.log}>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </Select>
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Difficulté :</span>
            </label>
            <Select defaultValue={"Facile"} onChange={console.log}>
              <option>Facile</option>
              <option>Normal</option>
              <option>Difficile</option>
            </Select>
          </div>
        </div>
        <div className="form-control w-full">
          <h2 className=" text-xs font-bold mb-4 text-secondary uppercase">
            Thêmes
          </h2>
          <Alert color="error" className="mb-4 bg-error">
            <span>Vous devez choisir au moins un thême</span>
          </Alert>
          <Form.Label title="TV/Cinéma" className=" bg-neutral p-4 my-2 rounded-lg">
            <Checkbox defaultChecked />
          </Form.Label>
          <Form.Label title="Art/Littérature" className=" bg-neutral p-4 my-2 rounded-lg">
            <Checkbox defaultChecked />
          </Form.Label>
          <Form.Label title="Musique" className=" bg-neutral p-4 my-2 rounded-lg">
            <Checkbox defaultChecked />
          </Form.Label>
          <Form.Label title="Actu/Politique" className=" bg-neutral p-4 my-2 rounded-lg">
            <Checkbox defaultChecked />
          </Form.Label>
          <Form.Label title="Culture générale" className=" bg-neutral p-4 my-2 rounded-lg">
            <Checkbox defaultChecked />
          </Form.Label>
          <Form.Label title="Sport" className=" bg-neutral p-4 my-2 rounded-lg">
            <Checkbox defaultChecked />
          </Form.Label>
          <Form.Label title="Jeux vidéos" className=" bg-neutral p-4 mt-2 rounded-lg">
            <Checkbox defaultChecked />
          </Form.Label>
        </div>
        <div>
          <Divider className="md:hidden"></Divider>
          <h2 className=" text-xl font-bold mb-8">
            Tout est <span className="text-accent">prêt</span> ?
          </h2>
          <p className="mb-4">
            Si tout est ok on continue, un code à partager avec tes amis te sera
            communiquer à la prochaine étape !
          </p>
          <Link
            to="/waiting-room"
            className="btn btn-success my-3 w-full"
            role="button"
          >
            Créer la partie !
          </Link>
        </div>
      </Form>
    </>
  );
};

export default CreateRoom;
