import { format } from "date-fns";
export function convertToPercentage(number) {
  // Multiplicar por 100 solo si el número es menor que 1
  const percentage = number < 1 ? number * 100 : number;
  return percentage.toFixed(2) + "%";
}

export function mergeChartData(marketCaps, prices, totalVolumes) {
  const mergedData = [];

  // Iterar sobre el primer array (cualquiera de los tres, ya que todos tienen la misma longitud)
  for (let i = 0; i < marketCaps.length; i++) {
    const timestamp = marketCaps[i][0]; // Obtener el timestamp
    const formattedDate = format(new Date(timestamp), "mm:hh"); // Convertir el timestamp a formato de fecha

    // Buscar el precio correspondiente en el array 'prices'
    const price = prices.find((item) => item[0] === timestamp);
    // Buscar el volumen correspondiente en el array 'totalVolumes'
    const volume = totalVolumes.find((item) => item[0] === timestamp);

    // Crear el objeto con la información y añadirlo al array 'mergedData'
    mergedData.push({
      timestamp: formattedDate,
      price: price ? price[1] : null,
      volume: volume ? volume[1] : null,
      marketCap: marketCaps[i][1],
    });
  }

  return mergedData;
}
