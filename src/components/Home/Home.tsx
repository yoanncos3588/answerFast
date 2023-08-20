import Logo from "../Logo";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container px-4 max-w-md h-full flex flex-col justify-center">
        <div className="text-5xl text-center mb-8">
          <Logo />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link
            to="/create-room"
            className="btn btn-primary my-3 w-full"
            role="button"
          >
            Créer une partie !
          </Link>
          <Link
            to="/join-room"
            className="btn btn-secondary my-3 w-full"
            role="button"
          >
            Rejoindre une partie !
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
