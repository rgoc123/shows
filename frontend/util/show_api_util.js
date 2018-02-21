export const fetchShows = () => {
  return $.ajax({
    url: '/api/shows',
    method: 'GET',
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
