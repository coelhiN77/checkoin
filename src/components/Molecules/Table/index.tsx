// types
import { TableCoinsProps } from "./types";

// components
import Coin from '../Coin';

// noCoin 
import noCoin from "../../../assets/searchNull.png";

// titles
const titles = [
  "Fav",
  "#",
  "Coin",
  "Price",
  "1h",
  "24h",
  "24h Volume",
  "Mkt Cap",
  ""
]

// ::
const Table: React.FC<TableCoinsProps & { darkMode: boolean }> = ({ coins, search, darkMode, }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  if (!coins) return <div>no coins</div>;

  return (
    <div>
      {filteredCoins.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={noCoin} alt="NoCoins" className="w-96" />
          <p className="text-center text-2xl text-red-400 flex uppercase">No coins found!</p>
        </div>
      ) : (
        <table className={`w-3/4 border-collapse mb-5 ${darkMode ? "text-white" : "text-black"}`}>
          <thead className={`shadow-lg text-white ${darkMode ? "bg-zinc-700" : "bg-zinc-500"}`}>
            <tr>
              {titles.map((title, i) => (
                <th key={i} className="px-6 py-4 text-left">{title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-red-500">
            {filteredCoins.map((coin, index) => (
              <Coin coin={coin} index={index + 1} key={coin.id} darkMode={darkMode} titles={titles} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;