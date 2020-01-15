export const allEvents = (page, limit) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}/api/all?page=${page}&limit=${limit}`,
    {
      method: "GET",
      // mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  )
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const sendMsg = msg => {
  return fetch(`${process.env.REACT_APP_API_URL}/sendMsg`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(msg)
  });
};
