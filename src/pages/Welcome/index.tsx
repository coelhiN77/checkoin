// components
import { Button } from "../../components";

// navigate
import { useNavigate } from "react-router-dom";

// ::
const Welcome = () => {
  const navigate = useNavigate();

  const handleBtnStart = () => {
    navigate("/home")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-backgroundMain">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-5xl font-serif font-bold mb-5">
          Welcome Checkoin
        </h1>
        <Button
          onClick={handleBtnStart}
          className="flex items-center justify-center bg-red-600 rounded-lg text-lg text-white px-28 py-2 transition-all hover:bg-red-500">Start</Button>
      </div>
    </div>
  );
};

export default Welcome;