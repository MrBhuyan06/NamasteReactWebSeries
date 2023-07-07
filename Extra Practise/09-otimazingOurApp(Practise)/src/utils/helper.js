export function SerchRestaurent(search, listofRes) {
  const searchRes = listofRes.filter((res) => {
    return res.data.name.toLowerCase().includes(search.toLowerCase());
  });
  return searchRes;
}
