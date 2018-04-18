
export const fetchShows = (filters) => {
  return $.ajax({
    url: '/api/shows',
    method: 'GET',
    data: filters,
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
