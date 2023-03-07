import axios from "axios";
export { getImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '34210482-0ff822678977a0c2e2014453a';

async function getImages(query, page, perPage) {
    const response = await axios.get(
        `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
    );
    return response;
}