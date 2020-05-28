import axios from "axios";

const token = localStorage.getItem('token') || '';
const baseUrl = 'https://webdev-api.loftschool.com';
axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;
console.log(token)
axios.interceptors.response.use(
	response => (response),
	error => {
		const originRequest = error.config;

		if (error.response.status === 401) {
			return axios.post('/refreshToken')
			.then(response => {
				const token = response.data.token;

				localStorage.setItem('token', token);
				axios.defaults.headers["Authorization"] = `Bearer ${token}`;
				originRequest.headers["Authorization"] = `Bearer ${token}`;
				console.log(token)
				return axios(originRequest);
			})
		}

		return Promise.reject(error);
	})

export default axios;