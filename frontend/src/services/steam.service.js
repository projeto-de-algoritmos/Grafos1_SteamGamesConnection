import api from '../config/axios.config';

export async function SearchGameByName(name) {
    return api.get(`search/${name}`);
}

export async function SearchGameDetailsById(id) {
    return api.get(`dfs/${id}`);
}


