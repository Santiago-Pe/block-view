import { useQuery } from "@tanstack/react-query";
import { getCryptos } from "../services/services";
import { Link } from "react-router-dom";
const Home = () => {
  const cryptosQuery = useQuery({
    queryKey: ["cryptos"],
    queryFn: () => getCryptos("usd"),
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    enabled: true,
    retry: false,
  });

  console.log(cryptosQuery.data);
  return (
    <Link to={"https://www.coingecko.com/"}>Data provided by CoinGecko</Link>
  );
};

export default Home;
