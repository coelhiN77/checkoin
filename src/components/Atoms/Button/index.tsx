// types
import { TButtonProps } from "./types";

// ::
const Button: React.FC<TButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;