import axios from "axios";

//const API_KEY = import.meta.env.API_KEY;
const API_KEY = import.meta.env.VITE_API_KEY;
const URL = `https://api.coingecko.com/api/v3/`;

export const checkEndpointStatus = async () => {
  const headers = { "x-cg-demo-api-key": API_KEY };
  const url = `${URL}/ping`;

  try {
    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
  return;
};
export const getCryptos = async (params) => {
  const headers = { "x-cg-demo-api-key": API_KEY };
  const url = `${URL}coins/markets?vs_currency=${params}`;

  try {
    const response = await axios.get(url, { headers });
    const top10Cryptos = response.data.slice(0, 10);
    return top10Cryptos;
  } catch (error) {
    console.error("Error:", error);
  }
  return;
};
export const getCryptoDetails = async (id) => {
  const headers = { "x-cg-demo-api-key": API_KEY };
  const url = `${URL}/coins/${id}`;

  try {
    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
  return;
};
export const getCryptoDetailsChart = async (id) => {
  const headers = { "x-cg-demo-api-key": API_KEY };
  const url = `${URL}/coins/${id}/market_chart?vs_currency=usd&days=2`;

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null; // Maneja el error adecuadamente según lo necesites
  }
};
