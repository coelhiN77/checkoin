// types
import { TNavbarProps } from "./types";

// icons
import { MdLightMode, MdDarkMode, } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi"

// ::
const Navbar = ({ darkMode, onDarkModeToggle }: TNavbarProps) => {
  const handleDarkModeToggle = () => {
    onDarkModeToggle();
  };

  return (
    <div className="flex justify-center items-center mt-5 font-serif border-b border-zinc-700 shadow-lg">
      <div className={`flex font-bold text-5xl items-center justify-center ${darkMode ? "text-white" : "text-black"}`}>
        Checkoins <BiDollarCircle className="text-red-400 text-6xl mb-2 ml-2" />
      </div>
      <div className="transition-colors flex absolute ml-24 w-10 justify-center mr-24 rounded-lg p-2 right-0 shadow-sm text-2xl border-b-red-500 border-b-2">
        <button onClick={handleDarkModeToggle}>
          {darkMode ? (
            <MdLightMode className="text-yellow-400 transition-colors" />
          ) : (
            <MdDarkMode className="text-zinc-500 transition-colors" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;