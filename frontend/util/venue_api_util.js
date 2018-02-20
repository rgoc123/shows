export const fetchVenues = () => {
  return $.ajax({
    url: '/api/venues',
    method: 'GET',
    error: (err) => console.log(err)
  });
};

export const fetchVenue = id => {
  return $.ajax({
    url: `/api/venues/${id}`,
    method: 'GET',
    error: (err) => console.log(err)
  });
};
