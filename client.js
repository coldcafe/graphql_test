const axios = require('axios').default;

(async () => {
  const response = await axios.post('http://127.0.0.1:5000/graphql', { query: '{ hello }' });
  console.log(response.data);
})().catch(error => {
  console.error(error.response ? error.response.data : error.message);
})
