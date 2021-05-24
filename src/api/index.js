export const getAlbums = async () => {
  const url = "https://jsonplaceholder.typicode.com/albums";
  const res = await fetch(url);
  const data = await res.json();
  return data;
};


export const getAlbumsById = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
