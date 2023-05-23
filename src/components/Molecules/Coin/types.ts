export type TCoinProps = {
  coin: {
    image: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_1h_in_currency?: number;
    price_change_percentage_24h?: number;
    total_volume: number;
    market_cap: number;
    total_supply: number;
    max_supply: number;
    low_24h: number;
    high_24h: number;
  };
  index: number;
  titles: string[];
};
