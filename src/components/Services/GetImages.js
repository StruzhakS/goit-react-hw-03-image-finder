import axios from 'axios';

const API_KEY = '36236073-560374128ebdbbd6821cfa057';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function searchImages(query) {
  const data = await axios({
    params: {
      key: API_KEY,
      q: query,
      page: 1,
      per_page: 12,
    },
  });
  return data;
}
