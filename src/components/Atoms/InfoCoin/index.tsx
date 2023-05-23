// types
import { TInfoCoinProps } from './types';

// ::
const InfoCoin: React.FC<TInfoCoinProps> = ({ label, value }) => {
  return (
    <div className="flex">
      <p className="font-bold text-lg mr-2">{label}:</p>
      <div className="flex flex-grow justify-end">
        <span className="border-b border-b-red-400 mb-2 flex ml-auto">
          {value}
        </span>
      </div>
    </div>
  );
};

export default InfoCoin;