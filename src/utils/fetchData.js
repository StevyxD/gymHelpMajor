export const exerciseOptions = {
  method: "GET",
  hostname: "exercisedb.p.rapidapi.com",
  port: null,
  path: "/exercises/bodyPartList",
  headers: {
    "x-rapidapi-key": "8afb5e6f54msh16d82964069322fp1f0970jsn213c413c449c",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
