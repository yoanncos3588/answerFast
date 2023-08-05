import { Button } from "react-daisyui";
import Logo from "./Logo";

const Home = () => {
  return (
    <>
      <div className="container px-4 max-w-md h-full flex flex-col justify-center">
        <div className="text-5xl text-center mb-8">
          <Logo />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Button color="primary" className=" my-3 w-full">
            Créer une partie !
          </Button>
          <Button color="secondary" className=" my-3 w-full">
            Rejoindre une partie !
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
