export const fecthData = async (page) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();
  return data;
};

export const newAnime = async () => {
  const response = await fetch(
    'https://shikimori.one/api/animes?status/ongoing,latest?order=aired_on&limit=2'
  );
  const data = await response.json();
  return data;
};