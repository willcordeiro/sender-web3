export const shortenAddress = (adress) =>
  `${adress.slice(0, 5)}...${adress.slice(adress.length - 4)}`;
