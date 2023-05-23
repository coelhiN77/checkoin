// axios
import axios from 'axios';

// Coins Names
const coinIds = [
  'bitcoin', 'ethereum', 'binancecoin', 'tether', 'cardano', 'ripple', 'dogecoin',
  'polkadot', 'uniswap', 'litecoin', 'chainlink', 'stellar', 'cosmos', 'tron', 'vechain'
];

// ::
export const getData = async () => {
  try {
    const ids = coinIds.join('%2C');
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?ids=${ids}&vs_currency=usd&sparkline=true&price_change_percentage=1h&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_total_supply=true&include_max_supply=true`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
