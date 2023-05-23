// components
import { Button } from "../../";

// navigate
import { useNavigate } from 'react-router-dom';

// bg
import ErrorBg from "../../../assets/ErrorBg.png";

// ::
const Error = () => {
  const navigate = useNavigate();

  const handleBtnBack = () => {
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-zinc-500">
      <img src={ErrorBg} alt="ErrorBg" className="w-96 h-96" />
      <div className="text-center font-bold text-gray-800 text-3xl mb-10">We can't seem to find the page you're looking for.</div>
      <Button
        onClick={handleBtnBack}
        className="flex items-center justify-center bg-red-400 rounded-lg text-lg text-white px-28 py-2 transition-all hover:bg-red-500"
      >Go back</Button>
    </div>
  );
};

export default Error;