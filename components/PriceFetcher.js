import { useState, useEffect } from "react";
import axios from "axios";

export default function PriceFetcher() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        setPrice(res.data.bitcoin.usd);
      } catch (error) {
        console.error("Error fetching price:", error);
      }
    }
    fetchPrice();
    const interval = setInterval(fetchPrice, 10000); // Refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-white mt-8">
      <h2 className="text-xl">Bitcoin Price:</h2>
      <p className="text-2xl font-bold">${price ? price.toLocaleString() : "Loading..."}</p>
    </div>
  );
}
