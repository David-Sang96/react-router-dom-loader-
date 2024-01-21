import { useNavigate, useRouteError } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  let title = error.data.message || "404 Not Found";
  return (
    <div className="text-3xl text-purple-600 text-center">
      {title} <br />
      <button
        className="border-2 border-purple-500"
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
