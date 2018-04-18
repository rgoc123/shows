<<<<<<< HEAD
export const fetchShows = (filters) => {
  return $.ajax({
    url: '/api/shows',
    method: 'GET',
    data: filters,
=======
export const fetchShows = () => {
  return $.ajax({
    url: '/api/shows',
    method: 'GET',
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468
    error: (err) => console.log(err)
  });
};

export const fetchShow = id => {
  return $.ajax({
    url: `/api/shows/${id}`,
    method: 'GET',
    error: (err) => console.log(err)
  });
};
