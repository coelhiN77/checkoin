// types
import { TInputProps } from "./types";

// ::
const Input = ({ autoFocus, onChange }: TInputProps) => {
  return (
    <input
      type="text"
      placeholder="Search a Coin"
      autoFocus={autoFocus}
      onChange={onChange}
      className="block bg-zinc-500 text-white placeholder-white text-md rounded-full px-5 py-3 w-64 hover:bg-zinc-400 transition-colors focus:outline-none font-mono"
    />
  );
};

export default Input; 