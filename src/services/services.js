import axios from "axios";

//const API_KEY = import.meta.env.API_KEY;
const API_KEY = "CG-zk1XC692rwXZoSfQYd88F3HD";
const URL = `https://api.coingecko.com/api/v3/coins/markets`;

// Funcion para verificar si el enpoint esta habilitado
// Funcion para verificar el detalle de una coin (con id)
export const getCryptos = async (params) => {
  const headers = { "x-cg-demo-api-key": API_KEY };
  const url = `${URL}?vs_currency=${params}`;

  try {
    const response = await axios.get(url, { headers });
    const top10Cryptos = response.data.slice(0, 10);
    return top10Cryptos;
  } catch (error) {
    console.error("Error:", error);
  }
  return;
};
