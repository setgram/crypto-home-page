/*let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};

*/
const bitcoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const dogecoin = document.getElementById("dogecoin");
const url =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    bitcoin.innerHTML = data.bitcoin.usd;
    ethereum.innerHTML = data.ethereum.usd;
    dogecoin.innerHTML = data.dogecoin.usd;
  });
