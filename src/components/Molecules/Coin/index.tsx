// types
import { TCoinProps } from './types';

// components
import { Button, InfoCoin } from "../../../components";

// icons
import { IoIosNotificationsOutline, IoIosNotifications, IoMdShareAlt } from "react-icons/io";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { BsCoin } from "react-icons/bs";

// toastify
import { useReward } from 'react-rewards';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// u,s
import { useState, useEffect } from 'react';

// ::
const Coin: React.FC<TCoinProps & { darkMode: boolean }> = ({ coin, index, darkMode, titles }) => {
  const [isStarFav, setIsStarFav] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti');

  const getPriceChangeClass = (priceChange: number) => {
    if (priceChange > 0) {
      return "text-green-400 font-bold";
    } else if (priceChange < 0) {
      return "text-red-500 font-bold";
    } else {
      return "text-gray-500 font-bold";
    }
  };

  const handleStar = () => {
    const newState = !isStarFav;
    setIsStarFav(newState);
    localStorage.setItem(`starState_${index}`, String(newState));
  };

  const handleShare = () => {
    toast.info('Link coming soon!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'bg-zinc-700 text-white',
      theme: "dark"
    });
  };

  const handleNotification = () => {
    const newState = !isNotification;
    setIsNotification(newState);
    localStorage.setItem(`notificationState_${index}`, String(newState));
  };

  useEffect(() => {
    const storedState = localStorage.getItem(`starState_${index}`);
    setIsStarFav(storedState === 'true');
  }, [index]);

  const handleCoinClick = () => {
    setShowProfile(true);
  };

  const handleCloseModal = () => {
    setShowProfile(false);
  };

  return (
    <tr className={`${darkMode ? "hover:bg-zinc-700" : "hover:bg-zinc-300"}`}>

      {/* Ranking */}
      <td className={`flex items-center justify-center text-2xl cursor-pointer ${isStarFav ? 'text-red-400' : ''}`} onClick={handleStar}>
        {isStarFav ? <AiFillStar /> : <AiOutlineStar />}
      </td>
      <td className="px-6 py-4 text-gray-400 font-bold">{index}</td>

      {/* Image, Name and Abv */}
      <td className="px-6 py-4 flex items-center">
        <img src={coin.image} alt="Coin" className="w-8 mr-2" />
        <p className="font-bold">{coin.name}</p>
        <p className="text-gray-500 ml-2 mr-3">{coin.symbol.toUpperCase()}</p>
      </td>

      <td className="px-6 py-4">${coin.current_price.toFixed(2)}</td>
      {/* 1h */}
      <td className="px-6 py-4">
        {(typeof coin.price_change_percentage_1h_in_currency === "number" ? coin.price_change_percentage_1h_in_currency : 0) < 0 ? (
          <span className={` ${darkMode ? "text-red-500" : "text-red-600"}`}>{coin.price_change_percentage_1h_in_currency?.toFixed(1)}%</span>
        ) : (
          <span className={` ${darkMode ? "text-green-400" : "text-green-600"}`}>{coin.price_change_percentage_1h_in_currency?.toFixed(2)}%</span>
        )}
      </td>

      {/* 24h */}
      <td className="px-6 py-4">
        {(typeof coin.price_change_percentage_24h === "number" ? coin.price_change_percentage_24h : 0) < 0 ? (
          <span className={` ${darkMode ? "text-red-500" : "text-red-600"}`}>{coin.price_change_percentage_24h?.toFixed(1)}%</span>
        ) : (
          <span className={` ${darkMode ? "text-green-400" : "text-green-600"}`}>{coin.price_change_percentage_24h?.toFixed(1)}%</span>
        )}
      </td>

      {/* 24h volume */}
      <td className="px-6 py-4">${coin.total_volume.toLocaleString()}</td>

      {/* Mkt Cap */}
      <td className="px-6 py-4">${coin.market_cap.toLocaleString()}</td>

      {/* COIN PROFILE ALONE*/}
      <td>< RiFileList2Line className="text-lg cursor-pointer" onClick={handleCoinClick} /> </td>
      {showProfile && (
        <div className={`fixed inset-0 flex justify-center items-center z-10 w-full h-full transition-all ${darkMode ? "bg-zinc-800" : "bg-white"}`} >
          <div className={`relative flex flex-col shadow-xl rounded-3xl p-7 items-center  ${darkMode ? "bg-zinc-900" : "bg-zinc-500"}`}>
            <div className="absolute top-0 right-0 m-4">
              <Button onClick={handleCloseModal} className="hover:text-red-400 text-red-500 font-bold flex mr-2 text-2xl transition-colors">X</Button>
            </div>

            <td className={`mb-2 font-bold ${darkMode ? "text-gray-400" : "text-white"}`}>Rank #{index}</td>
            <img src={coin.image} alt="Coin" className="w-14 mr-2 mt-2 mb-1" />

            <div className="flex items-center">
              <span className="mr-2 font-bold text-lg text-white">{coin.name}</span>
              <span className={`text-sm ${darkMode ? "text-gray-500" : "text-zinc-800"}`}>{coin.symbol.toUpperCase()}</span>
            </div>

            <div className="flex mt-2 mb-5 items-center">
              <div className="mr-3 text-2xl text-white">${coin.current_price.toFixed(2)}</div>
              {(typeof coin.price_change_percentage_24h === "number" ? coin.price_change_percentage_24h : 0) < 0 ? (
                <span className={` text-xl ${darkMode ? "text-red-500" : "text-red-400"}`}>{coin.price_change_percentage_24h?.toFixed(1)}%</span>
              ) : (
                <span className={` text-xl ${darkMode ? "text-green-400" : "text-green-500"}`}>{coin.price_change_percentage_24h?.toFixed(1)}%</span>
              )}
            </div>

            {/* 3 Buttons Share, Notification, BitPLUS */}
            <div className="flex mb-10 text-3xl text-white border border-red-400 px-2 py-2 rounded-lg w-40 justify-center items-center cursor-pointer">
              <Button onClick={handleShare}> <IoMdShareAlt className="mr-3" /> </Button>

              <p
                className={`${isNotification ? 'text-red-400 hover:text-red-500 transition-colors' : ''}`}
                onClick={handleNotification}> {isNotification ? <IoIosNotifications /> : <IoIosNotificationsOutline />}
              </p>

              <Button
                disabled={isConfettiAnimating}
                onClick={confettiReward}
              >
                <span id="confettiReward" />
                <BsCoin className="ml-3 hover:text-yellow-400" />
              </Button>
            </div>

            {/* Informations below */}
            <div className="flex flex-col w-96 rounded-md text-white">
              <InfoCoin
                label="Market Cap"
                value={
                  coin.market_cap && typeof coin.market_cap === 'number'
                    ? `$${coin.market_cap.toLocaleString()}`
                    : ''
                }
              />

              <InfoCoin
                label="24 Hour Trading Vol"
                value={coin.total_volume && typeof coin.total_volume === 'number'
                  ? `$${coin.total_volume.toLocaleString()}`
                  : ''}
              />

              <InfoCoin
                label="Total Supply"
                value={coin.total_supply && typeof coin.total_supply === 'number'
                  ? coin.total_supply.toLocaleString()
                  : ''}
              />

              <InfoCoin
                label="Max Supply"
                value={coin.max_supply && typeof coin.max_supply === 'number'
                  ? `${coin.max_supply.toLocaleString()}`
                  : ''}
              />

              <InfoCoin
                label="24h Low / 24h High"
                value={coin.low_24h && typeof coin.low_24h === 'number'
                  ? `$${coin.low_24h.toLocaleString()} / $${coin.high_24h.toLocaleString()}`
                  : ''}
              />

              <InfoCoin
                label="7d Low / 7d High"
                value={coin.low_24h && typeof coin.low_24h === 'number'
                  ? `$${coin.low_24h.toLocaleString()} / $${coin.high_24h.toLocaleString()}`
                  : ''}
              />
            </div>
          </div>
        </div>
      )}
    </tr >
  );
};

export default Coin;