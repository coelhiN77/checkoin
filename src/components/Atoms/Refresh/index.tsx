// types 
import { TRefreshProps } from "./types"

// icon
import { BiRefresh } from 'react-icons/bi';

// ::
const Refresh = ({ onClick, disabled, className }: TRefreshProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
    > <BiRefresh /> </button>
  );
};

export default Refresh;