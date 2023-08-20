import { Link, useNavigate } from "react-router-dom";

type Props = {};

const ButtonBack = (props: Props) => {
  const navigate = useNavigate();
  // const handleBackClick = async (
  //   e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   if (typeof backUrl !== "undefined") {

  //   }
  // };
  return (
    <Link to={".."} onClick={() => navigate(-1)} className="btn btn-ghost mr-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </Link>
  );
};

export default ButtonBack;
