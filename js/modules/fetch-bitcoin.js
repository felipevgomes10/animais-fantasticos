export default async function fetchBitcoin(url, target) {
  try {
    const jsonBitcoin = await (await fetch(url)).json();
    const btcPreco = document.querySelector(target);
    btcPreco.innerText = (100 / jsonBitcoin.BRL.sell).toFixed(4);
  } catch (error) {
    console.log(Error(error));
  }
}