import axios from 'axios';

const API_KEY = '36236073-560374128ebdbbd6821cfa057';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function searchImages(query, page = 1) {
  try {
    const data = await axios({
      params: {
        key: API_KEY,
        q: query,
        page,
        per_page: 12,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
