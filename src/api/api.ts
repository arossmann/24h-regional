import axios, { AxiosResponse } from 'axios';
import { StoreType } from '../models/store.interface';

const instance = axios.create({
	baseURL: 'https://api.24h-regional.de/api/v1/',
    //baseURL: 'http://localhost:8888/api/v1/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) =>
		instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Store = {
	getStores: (): Promise<StoreType[]> => requests.get('stores'),
	/* getAStore: (id: number): Promise<PostType> => requests.get(`stores/${id}`),
	createStore: (post: PostType): Promise<PostType> =>
		requests.post('stores', post),
	updateStore: (post: PostType, id: number): Promise<PostType> =>
		requests.put(`stores/${id}`, post),
	deleteStore: (id: number): Promise<void> => requests.delete(`stores/${id}`), */
};